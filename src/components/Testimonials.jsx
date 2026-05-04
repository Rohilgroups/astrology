import React from 'react';
import './Testimonials.css';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonialsData = t('testimonials.items', { returnObjects: true });
  
  const initialsMap = ["SJ", "MC", "EW"];

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>{t('testimonials.title')}</h2>
          <p className="text-lead" style={{ margin: '0 auto', maxWidth: '600px' }}>
            {t('testimonials.desc')}
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-rating">
                {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{initialsMap[idx]}</div>
                <div className="author-info">
                  <h5>{t.name}</h5>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
