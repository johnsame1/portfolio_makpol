import React from 'react';
import './SliderCart.css';
import testimonials from '../../assets/data';
import image from '../../assets/man.jpg';
import { FaComments } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const SliderCart = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const renderCards = (direction) => (
    <div className={`sliderTrack ${direction}`}>
      {[...testimonials, ...testimonials].map((item, index) => (
        <div
          key={index}
          className="card"
          data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'} // ✅ Animation
          data-aos-delay={(index % testimonials.length) * 100} // ✅ Delay effect
        >
          <div className="title">
            <img src={image} alt={item.name} className="clientImage" />
            <div className="titleContainer">
              <h3 style={{ margin: '0' }}>{item.name}</h3>
              <p className="job">{t(`testimonials.${item.id}.job`)}</p>
            </div>
          </div>
          <p className="comment">"{t(`testimonials.${item.id}.comment`)}"</p>
          <p className="date">{item.date}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="sliderContainer" data-aos="fade-up">
      <div className="head">
        <h1>
          <FaComments style={{ color: '#525CA9', marginRight: '5px' }} />
          {t('slider.title')}
        </h1>
        <p className="description">{t('slider.description')}</p>
      </div>

      <div className="slider">
        {renderCards(isRTL ? 'scrollRight' : 'scrollLTRLeft')}
      </div>
      <div className="slider">
        {renderCards(isRTL ? 'scrollLeft' : 'scrollLTRRight')}
      </div>
    </div>
  );
};

export default SliderCart;
