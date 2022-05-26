import React, { useEffect, useState } from "react";
import AuthContext from "../contexts/index.jsx";
import localStorageService from "../services/localStorageService.js";

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
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;