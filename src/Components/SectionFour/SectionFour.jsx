import React from 'react';
import './SectionFour.css';
import { FaPlay } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <section className="SectionFour">
      <div className="intro">
        <h2
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontFamily: '400',
          }}
        >
          <span className="line"></span>
          {t('why.title')}
        </h2>
        <p className="descreption">
          {t('why.description.line1')}
          <br />
          {t('why.description.line2')}
          <br />
          {t('why.description.line3')}
        </p>
        <div className="video">
          <button className="play">
            <FaPlay style={{ fontSize: '15px' }} />
          </button>
          <h1>{t('why.video')}</h1>
        </div>
      </div>

      <div className="features">
        <div className="feature-card highlighted">
          <h3>{t('why.cards.card1.title')}</h3>
          <p>{t('why.cards.card1.desc')}</p>
        </div>
        <div className="feature-card">
          <h3>{t('why.cards.card2.title')}</h3>
          <p>{t('why.cards.card2.desc')}</p>
        </div>
        <div className="feature-card">
          <h3>{t('why.cards.card3.title')}</h3>
          <p>{t('why.cards.card3.desc')}</p>
        </div>
        <div className="feature-card highlighted">
          <h3>{t('why.cards.card4.title')}</h3>
          <p>{t('why.cards.card4.desc')}</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
