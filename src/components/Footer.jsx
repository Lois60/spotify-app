import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import "./Footer.css";
import { Logo } from "../components/Logo.jsx";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid-container">
        <div className="grid-item">
          <Logo />
        </div>
        <div className="grid-item">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Jobs</li>
            <li>For the records</li>
          </ul>
        </div>
        <div className="grid-item">
        <h4>Communities</h4>
          <ul>
            <li>Artists</li>
            <li>For developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
          </ul>
        </div>
        <div className="grid-item">
        <h4>Useful links</h4>
          <ul>
            <li>Support</li>
            <li>Web Player</li>
            <li>Advertising</li>
            <li>Free mobile app</li>
            
          </ul>
        </div>
        <div className="grid-items ocial-icons">
        <FaTwitter style={{ marginRight: '10px'}} />
      <FaFacebook style={{ marginRight: '10px' }} />
      <FaInstagram style={{ marginRight: '10px' }} />
        </div>
      </div>
    </footer>
  );
};
