import React from 'react';
import './ServicesSection.css';
import { Star, Moon, Sun, Gem } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation();
  const services = [
    {
      title: t('services.cards.0.title'),
      desc: t('services.cards.0.desc'),
      icon: <Star size={32} />,
      img: "/images/tarot_pic.png"
    },
    {
      title: t('services.cards.1.title'),
      desc: t('services.cards.1.desc'),
      icon: <Sun size={32} />,
      img: "/images/hero_bg.png" 
    },
    {
      title: t('services.cards.2.title'),
      desc: t('services.cards.2.desc'),
      icon: <Moon size={32} />,
      img: "/images/about_art.png"
    },
    {
      title: t('services.cards.3.title'),
      desc: t('services.cards.3.desc'),
      icon: <Gem size={32} />,
      img: "/images/crystal_pic.png"
    }
  ];

  return (
    <section className="services-section section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>{t('services.title')}</h2>
          <p className="text-lead" style={{ maxWidth: '600px', margin: '0 auto' }}>
            {t('services.')}
          </p>
        </div>

        <div className="services-grid">
          {services.map((srv, idx) => (
            <div key={idx} className="service-card hover-lift">
              <img 
                src={srv.img} 
                alt={srv.titdescle} 
                className="service-img-feature" 
                loading="lazy"
                decoding="async"
              />
              <div className="service-icon-wrapper">
                {srv.icon}
              </div>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-desc">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
