import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutPhilosophy = () => {
  const { t } = useTranslation();
  return (
    <section className="team-philosophy-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', color: '#fff' }}
          >
            {t('aboutPhilosophy.title1')} <span style={{ color: 'var(--color-primary)' }}>{t('aboutPhilosophy.title2')}</span>
          </motion.h2>
        </div>

        <div className="team-philosophy-grid" style={{ position: 'relative' }}>
          <div className="light-streak-1" style={{ position: 'absolute', top: '-100px', right: '-10%', width: '1px', height: '400px', background: 'linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.4), transparent)', transform: 'rotate(25deg)', pointerEvents: 'none' }} />
          <div className="light-streak-2" style={{ position: 'absolute', bottom: '-50px', left: '-5%;', width: '1px', height: '300px', background: 'linear-gradient(to bottom, transparent, rgba(255, 105, 180, 0.3), transparent)', transform: 'rotate(-15deg)', pointerEvents: 'none' }} />
          {/* Card 1 */}
          <motion.div 
            className="premium-glass-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="card-content">
              <div className="icon-wrapper" style={{ background: 'transparent', border: 'none' }}>
                <img src="/images/astro_logo.jpeg" alt="Logo" className="card-logo" style={{ borderRadius: '0', objectFit: 'contain' }} />
              </div>
              <h3>{t('aboutPhilosophy.teamTitle')}</h3>
              <p>
                {t('aboutPhilosophy.teamP1')}
              </p>
              <p style={{ marginTop: '15px' }}>
                {t('aboutPhilosophy.teamP2')}
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="premium-glass-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="card-content">
              <div className="icon-wrapper" style={{ background: 'transparent', border: 'none' }}>
                <img src="/images/astro_logo.jpeg" alt="Logo" className="card-logo" style={{ borderRadius: '0', objectFit: 'contain' }} />
              </div>
              <h3>{t('aboutPhilosophy.philTitle')}</h3>
              <p>
                {t('aboutPhilosophy.philP1')}
              </p>
              <p style={{ marginTop: '15px' }}>
                {t('aboutPhilosophy.philP2')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
