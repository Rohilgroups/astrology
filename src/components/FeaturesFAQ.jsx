import React, { useState } from 'react';
import './FeaturesFAQ.css';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FeaturesFAQ = () => {
  const { t } = useTranslation();
  const faqData = t('faq.items', { returnObjects: true });
  const [openId, setOpenId] = useState(0); // First one open by default

  const toggleAccordion = (index) => {
    if (openId === index) {
      setOpenId(-1); // close if clicking the already open one
    } else {
      setOpenId(index);
    }
  };

  return (
    <section className="features-section section-padding">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="heading-lg">{t('faq.title')}</h2>
          <p className="text-lead">
            {t('faq.desc')}
          </p>
        </div>

        <div className="faq-accordion-list">
          {faqData.map((item, idx) => (
            <div 
              key={idx} 
              className={`faq-accordion-card ${openId === idx ? 'open' : ''}`}
              onClick={() => toggleAccordion(idx)}
            >
              <div className="faq-header">
                <div className="faq-title-wrapper">
                  <HelpCircle size={24} className="faq-icon" />
                  <h3 className="faq-question-text">{item.q}</h3>
                </div>
                <div className="faq-chevron">
                  {openId === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </div>
              
              <div className={`faq-body-container ${openId === idx ? 'expanded' : ''}`}>
                <div className="faq-body-content">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesFAQ;
