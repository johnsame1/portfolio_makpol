import React from 'react';
import './BannerContact.css';
import { useTranslation } from 'react-i18next';

function BannerContact() {
  const { t } = useTranslation();

  return (
    <div className='bannerContact'>
      {/* الصورة اللي هتظهر بس في الموبايل */}
      <div className='bannerImageMobile' data-aos="fade-down"></div>

      {/* المحتوى النصي */}
      <div className='bannerContent' data-aos="fade-up" data-aos-delay="200">
        <h1 className='bannerTitle'>{t('contact.title')}</h1>
        <p className='bannerTopic'>{t('contact.subtitle')}</p>
      </div>

      {/* العناصر الديكورية */}
      <div className='rotated-box rotated-box1' data-aos="zoom-in" data-aos-delay="100"></div>
      <div className='rotated-box rotated-box2' data-aos="zoom-in" data-aos-delay="200"></div>
      <div className='rotated-box rotated-box3' data-aos="zoom-in" data-aos-delay="300"></div>
      <div className='rotated-box rotated-box4' data-aos="zoom-in" data-aos-delay="400"></div>
      <div className='rotated-box rotated-box5' data-aos="zoom-in" data-aos-delay="500"></div>
    </div>
  );
}

export default BannerContact;
