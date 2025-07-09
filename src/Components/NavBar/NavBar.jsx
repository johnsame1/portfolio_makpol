import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { GrLanguage } from "react-icons/gr";
import { FaAngleDown } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleLanguageDropdown = () => setShowDropdown(!showDropdown);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowDropdown(false);
    closeMenu();
  };

  return (
    <div className="navbarLine">
      <div className="NavBar">
        <div className="container">
          {/* Logo */}
          <div className="logos">
            <HashLink smooth to="/#banner" className="logo" onClick={closeMenu}>
              <img src={logo} alt="Logo" className="logo-img" />
            </HashLink>
          </div>

          {/* Burger Menu */}
          <button className="menu" onClick={toggleMenu} aria-label="Toggle Menu">
            ☰
          </button>

          {/* Links */}
          <div className={`links ${isOpen ? 'open' : ''}`}>
            <HashLink smooth to="/#banner" onClick={closeMenu}>{t("navbar.home")}</HashLink>
            <HashLink smooth to="/#about" onClick={closeMenu}>{t("navbar.about")}</HashLink>
            <HashLink smooth to="/#services" onClick={closeMenu}>{t("navbar.services")}</HashLink>
            <HashLink smooth to="/#portfolio" onClick={closeMenu}>{t("navbar.portfolio")}</HashLink>
            <Link to="/contact" onClick={closeMenu}>{t("navbar.contact")}</Link>

            {/* Language Button (for mobile) */}
            <div className="mobile-only">
              <button className="btnCreate" onClick={toggleLanguageDropdown}>
                <GrLanguage style={{ fontSize: '20px', marginRight: '10px' }} />
                <p>{i18n.language.toUpperCase()}</p>
                <FaAngleDown />
              </button>
              {showDropdown && (
                <div className="language-dropdown">
                  <button onClick={() => changeLanguage('en')}>English</button>
                  <button onClick={() => changeLanguage('ar')}>العربية</button>
                </div>
              )}
            </div>
          </div>

          {/* Language Button (for desktop) */}
          <div className="Btns desktop-only" style={{ position: 'relative' }}>
            <button className="btnCreate" onClick={toggleLanguageDropdown}>
              <GrLanguage style={{ fontSize: '20px', marginRight: '10px' }} />
              <p>{i18n.language.toUpperCase()}</p>
              <FaAngleDown />
            </button>
            {showDropdown && (
              <div className="language-dropdown">
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('ar')}>العربية</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
