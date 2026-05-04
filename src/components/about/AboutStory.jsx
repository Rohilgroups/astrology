import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutStory = () => {
  const { t } = useTranslation();
  return (
    <section className="about-split-section">
      <div className="container">
        <div className="about-split-grid" style={{ position: 'relative' }}>
          <div className="about-aura" style={{ position: 'absolute', width: '300px', height: '300px', background: 'var(--color-primary)', filter: 'blur(150px)', opacity: 0.1, top: '10%', left: '-10%', pointerEvents: 'none' }} />
          <motion.div 
            className="about-text-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>{t('aboutStory.title1')} <span>{t('aboutStory.title2')}</span></h2>
            <p>{t('aboutStory.p1')}</p>
            <p>{t('aboutStory.p2')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <div className="about-visual-box" style={{ backgroundImage: 'url("/images/about_story_new.png")' }}>
              <div className="glass-panel animate-float experience-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div className="icon-badge" style={{ background: 'transparent', padding: '0' }}>
                      <img src="/images/astro_logo.jpeg" alt="Logo" className="badge-logo" style={{ borderRadius: '0', width: '50px', height: '50px', objectFit: 'contain' }} />
                    </div>
                    <div>
                      <h4 className="badge-title">{t('aboutStory.badgeTitle')}</h4>
                      <p className="badge-subtitle">{t('aboutStory.badgeSub')}</p>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
