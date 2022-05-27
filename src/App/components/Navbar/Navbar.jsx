import React from 'react';
import LogOutBtn from './components/LogOutBtn.jsx';

const Navbar = () => {
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">Hexlet Chat</a>
        <LogOutBtn />
      </div>
    </nav>
  );
}

export default Navbar;
