import React from 'react';
import './Banner.css';
import banner from '../../assets/banner.png';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-text">
            <h1 className="banner-heading">
              Build <span className="highlight">Smart Software</span> Empower Your Business
            </h1>
            <p className="banner-subtext">
              We craft reliable and scalable web & mobile solutions tailored to your goals.
            </p>
            <div className="banner-buttons">
              <Link to="contact">
                <button type="button" className="banner-button">Get Start</button>
              </Link>
            </div>
          </div>

          <div className="banner-image">
            <img src={banner} alt="banner" />
          </div>
        </div>

        <div className="banner-button-mobile">
          <Link to="SearchByID">
            <button type="button" className="banner-button">Get Start</button>
          </Link>
        </div>
      </div>
      <div className='triangle'></div>
      <div className='rotated-box'></div>
      <div className='rotated-box2'></div>
      <div className='rotated-box3'></div>
      <div className='rotated-box4'></div>
      <div className='rotated-box5'></div>
    </div>
  );
};

export default Banner;
