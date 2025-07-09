import React from 'react';
import './BannerContact.css';
import { useTranslation } from 'react-i18next';

function BannerContact() {
  const { t } = useTranslation();

  return (
    <div className='bannerContact'>
      <div className='bannerContent'>
        <h1 className='bannerTitle'>{t('contact.title')}</h1>
        <p className='bannerTobic'>{t('contact.subtitle')}</p>
      </div>
      <div className='rotated-box'></div>
      <div className='rotated-box2'></div>
      <div className='rotated-box3'></div>
      <div className='rotated-box4'></div>
      <div className='rotated-box5'></div>
    </div>
  );
}

export default BannerContact;
