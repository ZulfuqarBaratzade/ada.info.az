import React, { useState } from "react";
import logo from "../Images/logo.jpg";
import '../Styles/Header.css';

function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <div className="header">
            <div className="logo">
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div className="navbar">
                <div className="burger">
                    <button className="btn" onClick={toggleNav}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
                <div className={`nav ${isNavVisible ? "show" : ""}`}>
                    <ul>
                        <li>
                            <a href="#services">haqqımızda</a>
                        </li>
                        <li>
                            <a href="#about">xidmətlərimiz</a>
                        </li>
                        <li>
                            <a href="#contact">bizimlə əlaqə</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
