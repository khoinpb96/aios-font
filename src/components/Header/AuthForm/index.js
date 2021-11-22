import { useContext, useRef, useState } from "react";
import "./AuthForm.scss";
import { AuthContext } from "../../../context";

export default function AuthForm() {
  const { user, userLogin, userLogout } = useContext(AuthContext);

  const [showForm, setShowForm] = useState(false);
  const [isAuth, setIsAuth] = useState(() => user.isAuth);

  const usernameRef = useRef();
  const passwordRef = useRef();

  const loginHandler = (e) => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const validInput = username.length > 4 && password.length > 4;

    e.preventDefault();
    if (validInput) {
      userLogin(username, password);
      setShowForm(false);
      setIsAuth(true);
    }
  };

  const logoutHandler = () => {
    userLogout();
    setIsAuth(false);
  };

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
      <button
        className="auth-btn"
        type="submit"
        onClick={(e) => loginHandler(e)}
      >
        Login
      </button>
    </form>
  );

  return (
    <div>
      {!showForm &&
        (isAuth ? (
          <button className="auth-btn" onClick={() => logoutHandler()}>
            Logout
          </button>
        ) : (
          <button
            className="auth-btn"
            onClick={() => {
              if (!isAuth) setShowForm(true);
            }}
          >
            Login
          </button>
        ))}
      {!isAuth && showForm && loginForm}
    </div>
  );
}
