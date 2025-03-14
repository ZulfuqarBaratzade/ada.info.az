import React from "react";
import logo from "../Images/logo.jpg";
import '../Styles/Header.css'
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="#">
            <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="navbar">
        <div className="burger">
            <button className="btn"><i class="fa-solid fa-bars"></i></button>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="#">haqqımızda</a>
            </li>
            <li>
              <a href="#">xidmətlərimiz</a>
            </li>
            <li>
              <a href="#">bizimlə əlaqə</a>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
