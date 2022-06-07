import React from "react";
import { Link } from "react-router-dom";
import LogOutBtn from "./components/LogOutBtn.jsx";

const Navbar = () => {
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Hexlet Chat
        </Link>
        <LogOutBtn />
      </div>
    </nav>
  );
};

export default Navbar;
