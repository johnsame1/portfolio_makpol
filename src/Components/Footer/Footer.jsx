import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import './Footer.css';
import logo from '../../assets/logo.png';
import { IoIosChatboxes } from 'react-icons/io';
import { MdCall } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa6';

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
          <li>
            <HashLink smooth to="/#banner">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about">
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#services">
              Services
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#portfolio">
              Portfolio
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/contact">
              Contact Us
            </HashLink>
          </li>
        </ul>
      </div>

      <div className="footerColumn">
        <h4 className="topic">
          <IoIosChatboxes style={{ color: '#2E2D7D', fontSize: '30px' }} />{' '}
          mohamedmakpool11@gmail.com
        </h4>
        <h4 className="topic">
          <MdCall style={{ color: '#2E2D7D', fontSize: '30px' }} /> 01091944770
        </h4>
        <div className="socialIcons">
          <a
            href="https://www.facebook.com/share/1MLJPqnnqt/?mibextid=qi2Omg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icon" />
          </a>

          <a
            href="https://www.linkedin.com/company/makpool-solutions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://wa.me/201091944770"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icon" />
          </a>
        </div>
        <p>All rights reserved © 2025 Makpool Solutions</p>
      </div>
    </div>
  </footer>
);

export default Footer;
