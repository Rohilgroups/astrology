import React from 'react';
import './AboutSection.css';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-content-column">
            <span className="about-subtitle">{t('about.subtitle')}</span>
            <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>
              <Trans i18nKey="about.heading">
                We Believe The <span className="text-gradient-gold">Universe</span> Always Hears You.
              </Trans>
            </h2>
            <p className="text-lead" style={{ marginBottom: '1.5rem' }}>
              {t('about.desc')}
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
              {[t('about.list.0', {returnObjects: true}), t('about.list.1', {returnObjects: true}), t('about.list.2', {returnObjects: true})].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '1.1rem', fontWeight: 500 }}>
                  <CheckCircle2 color="var(--color-gold)" size={24} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="quote-box">
              {t('about.quote')}
            </div>
          </div>
          
          <div className="about-image-column animate-float">
            <div className="about-img-wrapper">
              <img 
                src="/images/about_art.png" 
                alt="Spiritual Astrology Reading" 
                className="about-img" 
                loading="lazy"
              />
            </div>
            <div className="experience-badge hover-lift">
              <div className="badge-logo">
                <img 
                  src="/images/astro_logo.jpeg" 
                  alt="Logo" 
                  loading="lazy"
                />
              </div>
              <div className="badge-content">
                <span className="years">{t('about.years')} Years</span>
                <span className="text">{t('about.yearsText')}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
