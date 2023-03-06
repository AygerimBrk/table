import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="appbar">
      <img
        src="https://cdn-icons-png.flaticon.com/128/3917/3917375.png"
        alt="error"
        width={60}
      />
      <div className="logo">
        <h3>Home</h3>
        <h3>Contact</h3>
        <h3>Info about us</h3>
      </div>
      <div>
        <input className="search" type="text" placeholder="SEARCH" />
        <button className="button">Search</button>
      </div>
    </div>
  );
};

export default Header;
