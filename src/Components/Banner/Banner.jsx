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
          {/* النصوص */}
          <div className="banner-text" data-aos="fade-right">
            <h1 className="banner-heading">
              {t("banner.titlePart1")} <span className="highlight">{t("banner.titleHighlight")}</span> {t("banner.titlePart2")}
            </h1>
            <p className="banner-subtext">
              {t("banner.subtitle")}
            </p>
            <div className="banner-buttons" data-aos="fade-up">
              <Link to="contact">
                <button type="button" className="banner-button">
                  {t("banner.button")}
                </button>
              </Link>
            </div>
          </div>

          {/* صورة البانر */}
          <div className="banner-image" data-aos="zoom-in">
            <img src={banner} alt="banner" />
          </div>
        </div>

        {/* زرار موبايل */}
        <div className="banner-button-mobile" data-aos="fade-up">
          <Link to="SearchByID">
            <button type="button" className="banner-button">
              {t("banner.button")}
            </button>
          </Link>
        </div>
      </div>

      {/* عناصر ديكورية - ممكن تحط لكل واحد انيميشن مختلف */}
      <div className='triangle' data-aos="fade-up-left"></div>
      <div className='rotated-box' data-aos="flip-left"></div>
      <div className='rotated-box2' data-aos="flip-right"></div>
      <div className='rotated-box3' data-aos="zoom-in-up"></div>
      <div className='rotated-box4' data-aos="zoom-in-left"></div>
      <div className='rotated-box5' data-aos="zoom-in-right"></div>
    </div>
  );
};

export default Banner;
  