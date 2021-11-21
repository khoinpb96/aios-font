import { createContext, useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initUser = {
    isAuth: false,
    username: "there",
    password: "",
  };

  const [user, setUser] = useState(initUser);

  const userLogin = (username, password) => {
    setUser({
      isAuth: true,
      username,
      password,
    });
  };

  const userLogout = () => {
    setUser(initUser);
  };

  const context = { user, userLogin, userLogout };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
