import React from 'react';
import './About.css';
import image from '../../assets/man.png';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="sectionAbout" data-aos="fade-up">
      <h1 className="title" data-aos="fade-down">{t("about.title")}</h1>

      <div className="header" data-aos="fade-up">
        {t("about.description")}
      </div>

      <div className="containerAbout">
        <div className="contentAbout">
          {/* Left Image */}
          <div className="contentLeft" data-aos="zoom-in">
            <div className="imageWrapper">
              <img className="image" src={image} alt="About" />
            </div>
          </div>

          {/* Middle Line */}
          <div className="coulmnLine" data-aos="fade-up">
            <div className="line1"></div>
            <span className="year">2025</span>
            <div className="line2"></div>
          </div>

          {/* Right Text */}
          <div className="contentRight" data-aos="fade-left">
            <h1>{t("about.growthTitle")}</h1>
            <p className="topic">
              {t("about.growthText")}
            </p>
          </div>
        </div>
        <div className="rotated-box" data-aos="zoom-in"></div>
        <div className="rotated-box2" data-aos="zoom-in"></div>
      </div>
    </div>
  );
}

export default About;
