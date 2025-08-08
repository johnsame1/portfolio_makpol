import React from 'react';
import './SliderCart.css';
import { testimonials, card } from '../../assets/data';
import { FaFolderOpen, FaMobileAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const SliderCart = () => {
  const { t } = useTranslation();

  return (
    <div className="sliderContainer" data-aos="fade-up">
      {/* العنوان الرئيسي */}
      <div className="head">
        <h1>
          <FaFolderOpen style={{ color: '#ffba67', marginRight: '5px' }} />
          {t('slider.title')}
        </h1>
        <p className="description">{t('slider.description')}</p>
      </div>

      {/* قسم المشاريع - مواقع ويب */}
      <div className="cardsWrapper">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="projectCard"
            data-aos={item.id % 2 === 0 ? 'fade-up' : 'fade-down'}
            data-aos-delay={item.id * 100}
          >
            <div className="imageWrapper">
              <img src={item.image} alt={item.name} className="projectImage" />
            </div>
            <div className="projectContent">
              <h3 className="projectTitle">{item.name}</h3>
              <p className="projectDescription">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                {t('Link Project')}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* عنوان فرعي لتطبيقات الموبايل */}
      <div className="head" style={{ marginTop: '50px' }}>
        <h2>
          <FaMobileAlt style={{ color: '#ffba67', marginRight: '5px' }} />
          {t('slider.mobileApps')}
        </h2>
        <p className="description">{t('slider.mobileAppsDesc')}</p>
      </div>

      {/* قسم المشاريع - تطبيقات موبايل */}
      <div className="cardsWrapper">
        {card.map((item) => (
<div key={item.id} className="projectCard mobileCard">
            <div className="imageWrapper">
              <img src={item.image} alt={item.name} className="projectImage" />
            </div>
            <div className="projectContent">
              <h3 className="projectTitle">{item.name}</h3>
              <p className="projectDescription">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderCart;
