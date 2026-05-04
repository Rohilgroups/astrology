import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutCommitment = () => {
  const { t } = useTranslation();
  return (
    <section className="commitment-section-wrapper">
      <motion.div 
        className="commitment-banner"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <h2>{t('aboutCommitment.title')}</h2>
        <p>
          {t('aboutCommitment.text')}
        </p>
      </motion.div>
    </section>
  );
};

export default AboutCommitment;
