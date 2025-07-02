import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/logo.png';
import { IoIosChatboxes } from "react-icons/io";
import { MdCall } from "react-icons/md";



const Footer = () => (
  <footer className="footer">
    <div className="footerOverlay"></div>
    <div className="container">
      <div className="footerLogo">
        <img src={logo} alt="logo" />
        <p>We build smart digital products</p>
      </div>
      <div className="footerColumn">
        <ul className="about">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Services</Link></li>
          <li><Link to="/blogs">Portfolio</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className="footerColumn">
        <h4 className="topic"><IoIosChatboxes style={{color:"#2E2D7D" ,fontSize:"30px"}}/> makpool@Makpool Solutions.com</h4>
        <h4 className="topic"><MdCall style={{color:"#2E2D7D" ,fontSize:"30px"}}/> 010673909260</h4>
        <div className="socialIcons">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaLinkedin className="icon" />
        </div>
        <p>All rights reserved © 2025 Makpool Solutions</p>
      </div>
      
    </div>
  </footer>
);

export default Footer;