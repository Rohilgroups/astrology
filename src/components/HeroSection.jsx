import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

const HeroSection = () => {
  const { t } = useTranslation();
  const [particles, setParticles] = useState(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 6 + 2}px`,
      delay: `${Math.random() * 5}s`,
    }));
  });

  return (
    <section className="hero-section">
      <div className="hero-slider">
        <img src="/images/hero_bg.png" alt="Slide 1" className="hero-bg-image" fetchpriority="high" loading="eager" />
        <img src="/images/slide1.png" alt="Slide 2" className="hero-bg-image" loading="lazy" />
        <img src="/images/slide2.png" alt="Slide 3" className="hero-bg-image" loading="lazy" />
        <img src="/images/slide3.png" alt="Slide 4" className="hero-bg-image" loading="lazy" />
        <img src="/images/slide4.png" alt="Slide 5" className="hero-bg-image" loading="lazy" />
        <img src="/images/about_art.png" alt="Slide 6" className="hero-bg-image" loading="lazy" />
      </div>
      
      <div className="hero-overlay"></div>
      
      <div className="particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Added Floating High-Quality Images in Hero Section */}
      {/* <img src="/images/tarot_pic.png" alt="Tarot" className="floating-img floating-1 animate-float" />
      <img src="/images/crystal_pic.png" alt="Crystal" className="floating-img floating-2 animate-float" style={{animationDelay: '2s'}} />
      <img src="/images/about_art.png" alt="Astrology Art" className="floating-img floating-3 animate-float" style={{animationDelay: '4s'}} /> */}

      <div className="container hero-content">
        <div className="hero-graphic-container animate-float">
          <img 
            src="/images/hero_graphic.png" 
            alt="Zodiac Wheel" 
            className="hero-graphic" 
            fetchpriority="high"
            loading="eager"
          />
        </div>
        
        <h1 className="hero-exact-title">
          {t('hero.welcome')}
        </h1>

        <div className="hero-cta" style={{ marginTop: '2rem' }}>
          <button className="btn btn-exact-primary">
            {t('hero.discover')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
