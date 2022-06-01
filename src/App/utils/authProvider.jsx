import React, { useState } from "react";
import AuthContext from "./contexts/authContext.js";
import localStorageService from "./localStorageService.js";

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const token = localStorageService.getToken();

  if (loggedIn !== !!token) {
    setLoggedIn(!!token);
  }

  const logIn = (token) => {
    localStorageService.setToken(token);
    setLoggedIn(true);
  }

  const logOut = () => {
    localStorageService.removeToken()
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;