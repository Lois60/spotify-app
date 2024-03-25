import "./LandingPageHeader.css";
import { Logo } from "../components/Logo.jsx";
import { useImperativeHandle } from "react";

import { useState } from 'react';

export const LandingPageHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="logo">
        <Logo />
      </div>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul>
          <li>
            <a href="#/Premium">Premium</a>
          </li>
          <li>
            <a href="#/Support">Support</a>
          </li>
          <li>
            <a href="#/Download">Download</a>
          </li>
          <li>
            <a href="#/|">|</a>
          </li>
          <li className="active">
            <a href="#/Sign up">Sign up</a>
          </li>
          <li className="active">
            <a href="#/Log in">Log in</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
