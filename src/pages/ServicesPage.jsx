import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const IconTarot = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2" ry="2"></rect>
    <path d="M8 6h8"></path>
    <path d="M12 10v8"></path>
    <path d="M9 13l3 3 3-3"></path>
  </svg>
);

const IconNumbers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="9" x2="20" y2="9"></line>
    <line x1="4" y1="15" x2="20" y2="15"></line>
    <line x1="10" y1="3" x2="8" y2="21"></line>
    <line x1="16" y1="3" x2="14" y2="21"></line>
  </svg>
);

const IconSoul = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const IconHealing = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const categoryRefs = [
  { id: 'tarot', icon: <IconTarot />, glow: "rgba(180, 60, 220, 0.5)", bgTint: "linear-gradient(180deg, #1A0B2E 0%, #0C0814 100%)" },
  { id: 'numerology', icon: <IconNumbers />, glow: "rgba(60, 150, 255, 0.4)", bgTint: "linear-gradient(180deg, #0B1D2E 0%, #0C0814 100%)" },
  { id: 'soul', icon: <IconSoul />, glow: "rgba(255, 80, 150, 0.4)", bgTint: "linear-gradient(180deg, #2E0B1A 0%, #0C0814 100%)" },
  { id: 'healing', icon: <IconHealing />, glow: "rgba(40, 220, 140, 0.4)", bgTint: "linear-gradient(180deg, #0B2E1D 0%, #0C0814 100%)" }
];

const serviceImages = {
  tarot: "/images/tarot_reading.png",
  numerology: "/images/numerology_art.png",
  soul: "/images/soul_reading.png",
  healing: "/images/healing_therapy.png"
};

const ServicesPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('tarot');

  const categories = t('servicesPage.categories', { returnObjects: true });
  const serviceDataRaw = t('servicesPage.serviceData', { returnObjects: true });
  const content = serviceDataRaw[activeTab];
  const activeStyle = categoryRefs.find(c => c.id === activeTab);

  return (
    <div style={{ background: '#0C0814', minHeight: '100vh', color: '#FFF', fontFamily: 'var(--font-body)', overflow: 'hidden', position: 'relative' }}>
      
      {/* Background tint transition */}
      <motion.div animate={{ background: activeStyle.bgTint }} transition={{ duration: 1.5, ease: "easeInOut" }} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section 1: Hero */}
        <section style={{ padding: '220px 0 100px', position: 'relative', overflow: 'hidden' }}>
          {/* Cinematic Video Background for Hero Section */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
            >
              <source src="/images/astro_services_202604151611.mp4" type="video/mp4" />
            </video>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(12,8,20,0.4) 0%, rgba(12,8,20,0.7) 60%, rgba(12,8,20,1) 100%)' }} />
          </div>
          {/* Majestic Glow Orbs */}
          <motion.div animate={{ y: [-30, 30, -30], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 12, repeat: Infinity }} style={{ position: 'absolute', top: '10%', left: '10%', width: '400px', height: '400px', background: activeStyle.glow, filter: 'blur(150px)', borderRadius: '50%', pointerEvents: 'none' }} />
          <motion.div animate={{ y: [30, -30, 30], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 15, repeat: Infinity }} style={{ position: 'absolute', bottom: '-20%', right: '10%', width: '500px', height: '500px', background: 'rgba(212,175,55,0.15)', filter: 'blur(140px)', borderRadius: '50%', pointerEvents: 'none' }} />

          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}
            >
              <div style={{ display: 'inline-block', marginBottom: '20px' }}>
                <span style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '8px', color: '#D4AF37', borderBottom: '1px solid rgba(212,175,55,0.4)', paddingBottom: '10px' }}>Divine Insights</span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3.5rem, 8vw, 6rem)', color: '#FFF', fontWeight: 'bold', marginBottom: '24px', textShadow: '0 10px 40px rgba(0,0,0,1)', lineHeight: 1.1 }}>
                {t('servicesPage.header.title')} <br/><span style={{ background: 'linear-gradient(135deg, #FFD700 0%, #FFF 50%, #D4AF37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.3))' }}>{t('servicesPage.header.titleHighlight')}</span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: '#F8EEFF', maxWidth: '800px', margin: '0 auto', lineHeight: 1.9, letterSpacing: '3px', textTransform: 'uppercase', textShadow: '0 4px 15px rgba(0,0,0,0.8)' }}>
                {t('servicesPage.header.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Celestial Tabs */}
        <section style={{ padding: '40px 0', position: 'relative', zIndex: 10 }}>
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}
            >
              {categories.map((cat) => {
                const catRef = categoryRefs.find(c => c.id === cat.id);
                return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '24px 32px', borderRadius: '30px', border: 'none', cursor: 'pointer',
                    textAlign: 'center', fontWeight: 'bold', fontSize: '1.1rem', transition: 'all 0.5s ease', position: 'relative', overflow: 'hidden',
                    flex: '1 1 180px', maxWidth: '220px', minHeight: '120px',
                    background: activeTab === cat.id 
                      ? `linear-gradient(to bottom, rgba(12,8,20,0.3), rgba(12,8,20,0.75)), url("${serviceImages[cat.id]}") center/cover no-repeat` 
                      : `linear-gradient(to bottom, rgba(12,8,20,0.7), rgba(12,8,20,0.9)), url("${serviceImages[cat.id]}") center/cover no-repeat`,
                    color: activeTab === cat.id ? '#FFF' : 'rgba(255,255,255,0.6)',
                    boxShadow: activeTab === cat.id ? `0 0 50px ${catRef.glow} inset, 0 15px 30px rgba(0,0,0,0.6)` : '0 10px 20px rgba(0,0,0,0.4)',
                    border: activeTab === cat.id ? `1px solid ${catRef.glow}` : '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                   <div style={{ position: 'absolute', inset: 0, background: activeTab === cat.id ? `radial-gradient(circle at top, ${catRef.glow}, transparent 80%)` : 'none', opacity: 0.5, pointerEvents: 'none' }} />
                  <div style={{ position: 'relative', zIndex: 2, color: activeTab === cat.id ? '#FFD700' : 'rgba(11, 76, 3, 0.4)', filter: activeTab === cat.id ? 'drop-shadow(0 0 10px rgba(48, 238, 23, 0.5))' : 'none' }}>
                    {catRef?.icon}
                  </div>
                  <span style={{ position: 'relative', zIndex: 2, letterSpacing: '1px', textShadow: '0 4px 15px rgba(0,0,0,0.9), 0 2px 5px rgba(0,0,0,0.6)', fontSize: '1rem' }}>{cat.title}</span>
                </motion.button>
              )})}
            </motion.div>
          </div>
        </section>

        {/* Section 3: Cosmic Service Details */}
        <section style={{ padding: '60px 0 140px', position: 'relative' }}>
          <div className="container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.98 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ 
                  background: 'rgba(20, 12, 30, 0.6)', 
                  borderRadius: '40px', 
                  padding: '60px', 
                  boxShadow: `0 40px 100px rgba(123, 54, 54, 0.8), 0 0 80px ${activeStyle.glow} inset`, 
                  border: `1px solid rgba(255,255,255,0.1)`, 
                  backdropFilter: 'blur(40px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Accent Line */}
                <div style={{ position: 'absolute', top: 0, left: '10%', width: '80%', height: '2px', background: `linear-gradient(90deg, transparent, ${activeStyle.glow.replace('0.5', '1').replace('0.4', '1')}, transparent)` }} />
                
                <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap-reverse', position: 'relative', zIndex: 2 }}>
                  
                  {/* Left Column: Text & Features */}
                  <div style={{ flex: '2 1 600px' }}>
                    <div style={{ textAlign: 'left', marginBottom: '50px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: `1px solid ${activeStyle.glow}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFD700', boxShadow: `0 0 20px ${activeStyle.glow}` }}>
                          {activeStyle?.icon}
                        </div>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFF', margin: 0, textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
                          {content.title}
                        </h2>
                      </div>
                      <p style={{ fontSize: '1.2rem', color: '#E8D5F5', lineHeight: 1.9, maxWidth: '800px', marginBottom: '40px' }}>
                        {content.desc}
                      </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                      {content.features.map((feature, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.05 * idx, duration: 0.5 }}
                          whileHover={{ y: -10, boxShadow: `0 20px 40px ${activeStyle.glow}`, borderColor: 'rgba(255,215,0,0.5)', background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)' }}
                          style={{ padding: '32px', background: 'linear-gradient(135deg, rgba(168, 54, 54, 0.04) 0%, rgba(255,255,255,0.01) 100%)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden', backdropFilter: 'blur(20px)', transition: 'all 0.3s ease' }}
                        >
                          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `radial-gradient(circle at top right, ${activeStyle.glow}, transparent 60%)`, pointerEvents: 'none', opacity: 0.5 }} />
                          <h4 style={{ fontSize: '1.4rem', color: '#FFF', marginBottom: '12px', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>{feature.name}</h4>
                          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{feature.detail}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Prominent Celestial Image */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ flex: '1 1 350px', position: 'relative' }}
                  >
                    <div style={{ position: 'sticky', top: '150px' }}>
                        <motion.div
                          animate={{ y: [-15, 15, -15] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                          style={{ position: 'relative' }}
                        >
                          {/* Inner Aura matching active style */}
                          <div style={{ position: 'absolute', inset: '-30px', background: `radial-gradient(circle, ${activeStyle.glow} 0%, transparent 70%)`, filter: 'blur(60px)', zIndex: -1 }} />
                          
                          {/* Sacred Astrological Orbit Rings */}
                          <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', top: '-15%', left: '-15%', width: '130%', height: '130%', border: '1px dashed rgba(255,255,255,0.2)', borderRadius: '50%', zIndex: -2 }} />
                          <motion.div animate={{ rotate: -360 }} transition={{ duration: 70, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', top: '-8%', left: '-8%', width: '116%', height: '116%', border: '2px dotted rgba(212,175,55,0.3)', borderRadius: '50%', zIndex: -2 }} />

                          <div style={{ borderRadius: '40px', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 100px rgba(0,0,0,0.8)' }}>
                            <img 
                              src={serviceImages[activeTab]} 
                              alt={content.title} 
                              style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.03)' }} 
                            />
                            {/* Cinematic Overlay */}
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12, 8, 20, 0.9) 0%, transparent 40%)' }} />
                          </div>

                          {/* Floating Badge */}
                          <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(20, 10, 30, 0.95)', backdropFilter: 'blur(10px)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', padding: '12px 30px', borderRadius: '50px', border: '1px solid rgba(255,215,0,0.4)', whiteSpace: 'nowrap', color: '#FFF', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                             <span style={{ color: '#fdd701ff', marginRight: '6px' }}>✦</span> {t('servicesPage.sacredVision')} <span style={{ color: '#FFD700', marginLeft: '6px' }}>✦</span>
                          </div>
                        </motion.div>
                    </div>
                  </motion.div>

                </div>

                <div style={{ marginTop: '80px', textAlign: 'center' }}>
                    <motion.a 
                        href="/contact"
                        whileHover={{ scale: 1.05, boxShadow: `0 20px 40px ${activeStyle.glow}` }}
                        whileTap={{ scale: 0.95 }}
                        style={{ display: 'inline-block', padding: '20px 60px', background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)', color: '#000', borderRadius: '30px', textDecoration: 'none', fontWeight: '900', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', border: 'none', cursor: 'pointer' }}
                    >
                        {t('servicesPage.bookBtn')}
                    </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
