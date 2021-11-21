import { useContext, useRef, useState } from "react";
import "./AuthForm.scss";
import { AuthContext } from "../../../context";

export default function AuthForm() {
  const { user, userLogin, userLogout } = useContext(AuthContext);

  const loginHandler = (e) => {
    e.preventDefault();
    userLogin(usernameRef.current.value, passwordRef.current.value);
    setShowForm(false);
    setIsAuth(true);
  };

  const logoutHandler = () => {
    userLogout();
    setIsAuth(false);
  };

  const usernameRef = useRef();
  const passwordRef = useRef();

  const loginForm = (
    <form className="login-form" onSubmit={(e) => loginHandler(e)}>
      <label htmlFor="username">
        Username:
        <input type="text" id="username" ref={usernameRef} />
      </label>
      <label htmlFor="password">
        Password:
        <input type="text" id="password" ref={passwordRef} />
      </label>
      <button type="submit" onClick={(e) => loginHandler(e)}>
        Login
      </button>
    </form>
  );

  const [showForm, setShowForm] = useState(false);
  const [isAuth, setIsAuth] = useState(() => user.isAuth);

  console.log(user);

  return (
    <div>
      {!isAuth && showForm && loginForm}
      {isAuth ? (
        <button onClick={() => logoutHandler()}>Logout</button>
      ) : (
        <button
          onClick={() => {
            if (!isAuth) setShowForm(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}
