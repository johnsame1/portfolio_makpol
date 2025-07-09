import React from 'react';
import './Banner.css';
import banner from '../../assets/banner.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-text">
            <h1 className="banner-heading">
              {t("banner.titlePart1")} <span className="highlight">{t("banner.titleHighlight")}</span> {t("banner.titlePart2")}
            </h1>
            <p className="banner-subtext">
              {t("banner.subtitle")}
            </p>
            <div className="banner-buttons">
              <Link to="contact">
                <button type="button" className="banner-button">
                  {t("banner.button")}
                </button>
              </Link>
            </div>
          </div>

          <div className="banner-image">
            <img src={banner} alt="banner" />
          </div>
        </div>

        <div className="banner-button-mobile">
          <Link to="SearchByID">
            <button type="button" className="banner-button">
              {t("banner.button")}
            </button>
          </Link>
        </div>
      </div>

      {/* Decoration Elements */}
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
