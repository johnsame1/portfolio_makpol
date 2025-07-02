import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { GrLanguage } from "react-icons/gr";
import { FaAngleDown } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('En');
  const [showDropdown, setShowDropdown] = useState(false); 

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleLanguageDropdown = () => setShowDropdown(!showDropdown);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setShowDropdown(false); 
    closeMenu(); 
  };

  return (
    <div className="navbarLine">
      <div className="NavBar">
        <div className="container">
          {/* Logo */}
          <div className="logos">
            <Link to="/" className="logo" onClick={closeMenu}>
              <img src={logo} alt="Logo" className="logo-img" />
            </Link>
          </div>

          {/* Burger Menu */}
          <button className="menu" onClick={toggleMenu} aria-label="Toggle Menu">
            ☰
          </button>

          {/* Links */}
          <div className={`links ${isOpen ? 'open' : ''}`}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/services" onClick={closeMenu}>Services</Link>
            <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
            <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
          </div>

          {/* Language Button with Dropdown */}
          <div className="Btns" style={{ position: 'relative' }}>
            <button className="btnCreate" onClick={toggleLanguageDropdown}>
              <GrLanguage  style={{fontSize:'20px',marginRight:'10px'}} />
              <p>{language}</p>
              <FaAngleDown />
            </button>

            {showDropdown && (
              <div className="language-dropdown">
                <button onClick={() => changeLanguage('En')}>English</button>
                <button onClick={() => changeLanguage('Ar')}>العربية</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
