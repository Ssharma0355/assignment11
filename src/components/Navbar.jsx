import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="Logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="Menu">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="btns">
        <button className="login">Login</button>
        <button className="bookdemo">Book Demo</button>
      </div>
    </div>
  );
}

export default Navbar;
