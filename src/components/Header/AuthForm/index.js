import { useState } from "react";
import "./AuthForm.scss";

export default function AuthForm() {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const loginForm = (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="username">
        Username:
        <input type="text" id="username" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="text" id="password" />
      </label>
    </form>
  );

  const [showForm, setShowForm] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      {!isAuth && showForm && loginForm}
      {!isAuth && (
        <button
          onClick={() => {
            setShowForm(true);
            showForm && console.log("login");
          }}
        >
          Login
        </button>
      )}
      {isAuth && (
        <button
          onClick={() => {
            setShowForm(false);
            console.log("logout");
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
}
