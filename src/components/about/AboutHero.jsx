import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutHero = ({ yVideo, yContent, contentOpacity }) => {
  const { t } = useTranslation();
  return (
    <section className="hero-about">
      <motion.div 
        className="hero-video-container"
        style={{ y: yVideo }}
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video"
        >
          <source src="/images/201293-915375233_medium.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <motion.div 
        className="hero-about-content"
        style={{ y: yContent, opacity: contentOpacity }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-about-title">{t('aboutHero.title')}</h1>
        <p className="hero-about-subtitle">{t('aboutHero.subtitle')}</p>
      </motion.div>
    </section>
  );
};

export default AboutHero;
