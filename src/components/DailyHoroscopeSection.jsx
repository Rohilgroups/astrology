import React from 'react';
import './DailyHoroscopeSection.css';
import { useTranslation } from 'react-i18next';

const signsImages = [
  '/images/aries.png', '/images/taurus.png', '/images/gemini.png', '/images/cancer.png',
  '/images/leo.png', '/images/virgo.png', '/images/libra.png', '/images/scorpio.png',
  '/images/sagittarius.png', '/images/capricorn.png', '/images/aquarius.png', '/images/pisces.png'
];

const DailyHoroscopeSection = () => {
  const { t } = useTranslation();
  return (
    <section className="horoscope-section section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>{t('horoscope.title')}</h2>
          <p className="text-lead" style={{ maxWidth: '600px', margin: '0 auto' }}>
            {t('horoscope.desc')}
          </p>
        </div>

        <div className="zodiac-grid">
          {signsImages.map((img, idx) => (
            <div key={idx} className="zodiac-card">
              <div className="zodiac-img-wrapper">
                <img src={img} alt={`Sign ${idx}`} className="zodiac-img" />
              </div>
              <h3 className="zodiac-name">{t(`horoscope.signs.${idx}`)}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyHoroscopeSection;
