import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const userTemplate = {
    isAuth: false,
    username: "",
    password: "",
  };

  const initUser = JSON.parse(localStorage.getItem("user")) || userTemplate;

  const [user, setUser] = useState(initUser);
  console.log(user);

  const userLogin = (username, password) => {
    const newUser = {
      isAuth: true,
      username,
      password,
    };

    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const userLogout = () => {
    localStorage.removeItem("user");
    setUser(userTemplate);
  };

  const context = { user, userLogin, userLogout };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
