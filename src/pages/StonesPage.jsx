import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const IconDiamond = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12l4 6-10 13L2 9Z"></path>
    <path d="M11 3 8 9l4 13 4-13-3-6"></path>
    <path d="M2 9h20"></path>
  </svg>
);

const IconGem = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const IconCrystal = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20"></path>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const categoryRefs = [
  { id: 'gem', icon: <IconGem />, gradient: "linear-gradient(180deg, #3A1015 0%, #150A1E 100%)", glow: "rgba(220, 20, 60, 0.45)" },
  { id: 'precious', icon: <IconDiamond />, gradient: "linear-gradient(180deg, #352510 0%, #150A1E 100%)", glow: "rgba(255, 200, 70, 0.45)" },
  { id: 'semi', icon: <IconCrystal />, gradient: "linear-gradient(180deg, #102A40 0%, #150A1E 100%)", glow: "rgba(40, 160, 255, 0.45)" }
];

const stoneImages = {
  gem: "/images/navaratna_gems.png",
  precious: "/images/precious_stones.png",
  semi: "/images/semi_precious.png"
};

const StonesPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('gem');
  
  const categories = t('stonesPage.categories', { returnObjects: true });
  const stoneDataRaw = t('stonesPage.stoneData', { returnObjects: true });
  const content = stoneDataRaw[activeTab];
  const activeStyle = categoryRefs.find(c => c.id === activeTab);

  return (
    <div style={{ background: '#150A1E', minHeight: '100vh', color: '#FFF', fontFamily: 'var(--font-body)', overflow: 'hidden', position: 'relative' }}>
      
      {/* Dynamic Main Background wrapper for smooth color transition flowing across the page */}
      <motion.div
        animate={{ background: activeStyle.gradient }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />

      <div style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section 1: Cosmic Hero without boxes - Brighter */}
        <section style={{ padding: '220px 0 120px', position: 'relative', background: 'url(/images/crystal_pic.png) center/cover no-repeat', backgroundAttachment: 'fixed', overflow: 'hidden' }}>
          
          {/* Ultra-Smooth Brighter Cosmic Overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(21,10,30,0.1) 0%, rgba(21,10,30,0.5) 60%, rgba(21,10,30,0.85) 100%)' }} />
          {/* Fix top navbar clash & bottom gradient to next section */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(21,10,30,0.9) 0%, transparent 20%, transparent 70%, #150A1E 100%)' }} />

          {/* Magical Floating Ambient Light Orbs - Brighter opacities */}
          <motion.div animate={{ y: [-40, 40, -40], x: [-30, 30, -30], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: '10%', left: '15%', width: '400px', height: '400px', background: 'rgba(180,60,220,0.25)', filter: 'blur(100px)', borderRadius: '50%' }} />
          <motion.div animate={{ y: [40, -40, 40], x: [30, -30, 30], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', bottom: '10%', right: '15%', width: '500px', height: '500px', background: 'rgba(255,215,80,0.2)', filter: 'blur(120px)', borderRadius: '50%' }} />

          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            {/* Soft text backdrop aura */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '250%', background: 'radial-gradient(ellipse at center, rgba(21,10,30,0.5) 0%, transparent 70%)', zIndex: -1, pointerEvents: 'none' }} />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ textAlign: 'center', maxWidth: '1100px', margin: '0 auto', position: 'relative' }}
            >
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3.5rem, 8vw, 7rem)', color: '#FFF', fontWeight: 'bold', marginBottom: '20px', textShadow: '0 10px 40px rgba(0,0,0,0.8), 0 2px 10px rgba(255,215,0,0.5)', lineHeight: 1.1, letterSpacing: '-1px' }}>
                {t('stonesPage.header.title')} <span style={{ background: 'linear-gradient(135deg, #FFEF80 0%, #FFF 50%, #E5C158 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', filter: 'drop-shadow(0 0 30px rgba(255,215,0,0.4))' }}>{t('stonesPage.header.titleHighlight')}</span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: '#F8EEFF', maxWidth: '800px', margin: '0 auto', lineHeight: 1.9, letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 500, textShadow: '0 4px 15px rgba(0,0,0,0.9), 0 2px 5px rgba(0,0,0,0.6)' }}>
                {t('stonesPage.header.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Tab Navigation Floating Naturally */}
        <section style={{ padding: '60px 0 80px', background: 'transparent' }}>
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto', marginTop: '30px' }}
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
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '24px 40px', borderRadius: '30px', border: 'none', cursor: 'pointer',
                    textAlign: 'center', transition: 'all 0.5s ease', flex: '1 1 240px', maxWidth: '300px',
                    background: activeTab === cat.id 
                      ? `linear-gradient(to bottom, rgba(30,15,45,0.4), rgba(21,10,30,0.8)), url("${stoneImages[cat.id]}") center/cover no-repeat` 
                      : `linear-gradient(to bottom, rgba(21,10,30,0.75), rgba(21,10,30,0.9)), url("${stoneImages[cat.id]}") center/cover no-repeat`,
                    color: '#FFF',
                    boxShadow: activeTab === cat.id ? `0 0 60px ${catRef.glow} inset, 0 20px 40px rgba(0,0,0,0.6)` : '0 10px 20px rgba(0,0,0,0.4)',
                    border: activeTab === cat.id ? `1px solid ${catRef.glow}` : '1px solid rgba(255,255,255,0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: activeTab === cat.id ? `radial-gradient(circle at top, ${catRef.glow}, transparent 80%)` : 'none', opacity: 0.5, pointerEvents: 'none' }} />
                  
                  <div style={{ position: 'relative', zIndex: 2, color: activeTab === cat.id ? '#FFF' : 'rgba(255,255,255,0.6)', transition: 'color 0.3s', filter: activeTab === cat.id ? 'drop-shadow(0 2px 10px rgba(0,0,0,0.6))' : 'none' }}>
                    {catRef?.icon}
                  </div>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: activeTab === cat.id ? '#FFF' : 'rgba(255,255,255,0.85)', textShadow: '0 4px 15px rgba(0,0,0,0.9), 0 2px 5px rgba(0,0,0,0.6)' }}>{cat.title}</div>
                    <div style={{ fontSize: '0.85rem', color: activeTab === cat.id ? '#FFEF80' : 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '4px', fontWeight: 'bold', textShadow: '0 4px 15px rgba(0,0,0,0.9), 0 2px 5px rgba(0,0,0,0.6)' }}>{cat.subtitle}</div>
                  </div>
                </motion.button>
              )})}
            </motion.div>
          </div>
        </section>

        {/* Section 3: Dynamic Premium Content Presentation - Brighter Container */}
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
                  background: 'rgba(30, 18, 45, 0.45)', 
                  borderRadius: '40px', 
                  padding: '60px', 
                  boxShadow: `0 30px 60px rgba(0,0,0,0.6), 0 0 100px ${activeStyle.glow} inset`, 
                  border: `1px solid rgba(255,255,255,0.2)`, 
                  backdropFilter: 'blur(30px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: '20%', width: '60%', height: '2px', background: 'linear-gradient(90deg, transparent, rgba(255,215,80,0.9), transparent)' }} />
                
                <div className="stones-grid-container" style={{ display: 'flex', gap: '60px', flexWrap: 'wrap-reverse', position: 'relative', zIndex: 2 }}>
                  
                  {/* Left Column: Text & Features */}
                  <div style={{ flex: '2 1 600px' }}>
                    <div style={{ textAlign: 'left', marginBottom: '60px' }}>
                      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFF', marginBottom: '16px', textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
                        {content.title}
                      </h2>
                      <p style={{ fontSize: '1.25rem', color: '#F8EEFF', lineHeight: 1.8, maxWidth: '800px', margin: '0' }}>
                        {content.desc}
                      </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                      {content.features.map((feature, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.05 * idx, duration: 0.5 }}
                          whileHover={{ y: -10, boxShadow: `0 20px 40px ${activeStyle.glow}`, borderColor: 'rgba(255,215,80,0.6)', background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)' }}
                          style={{ padding: '32px', background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden', backdropFilter: 'blur(15px)', transition: 'all 0.3s ease' }}
                        >
                          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `radial-gradient(circle at top right, ${activeStyle.glow}, transparent 55%)`, pointerEvents: 'none', opacity: 0.8 }} />
                          <h4 style={{ fontSize: '1.5rem', color: '#FFF', marginBottom: '8px', fontWeight: 'bold', fontFamily: 'var(--font-heading)', textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>{feature.name}</h4>
                          <h5 style={{ fontSize: '0.85rem', color: '#FFD700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px', fontWeight: '600' }}>{feature.sub}</h5>
                          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>{feature.detail}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Prominent Stone Image */}
                  <motion.div 
                    className="stone-image-column"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ flex: '1 1 350px', position: 'relative' }}
                  >
                    <div style={{ position: 'sticky', top: '150px', zIndex: 10 }}>
                       <motion.div
                         animate={{ y: [-15, 15, -15] }}
                         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                         style={{ position: 'relative' }}
                       >
                         {/* Outer Glow matching active style */}
                         <div style={{ position: 'absolute', inset: '-30px', background: `radial-gradient(circle, ${activeStyle.glow} 0%, transparent 75%)`, filter: 'blur(50px)', zIndex: -1 }} />
                         
                         {/* Sacred Geometry Orbiting Rings - Lighter and clearer */}
                         <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', top: '-15%', left: '-15%', width: '130%', height: '130%', border: '2px dashed rgba(255,215,80,0.4)', borderRadius: '50%', zIndex: -2 }} />
                         <motion.div animate={{ rotate: -360 }} transition={{ duration: 55, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', top: '-8%', left: '-8%', width: '116%', height: '116%', border: '2px dotted rgba(255,255,255,0.4)', borderRadius: '50%', zIndex: -2 }} />

                         <div style={{ borderRadius: '40px', overflow: 'hidden', border: '2px solid rgba(255,215,80,0.4)', boxShadow: '0 30px 80px rgba(0,0,0,0.6)' }}>
                           <img 
                             src={stoneImages[activeTab]} 
                             alt={content.title} 
                             style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.02)' }} 
                           />
                           
                           {/* Overlays - Lighter */}
                           <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(21, 10, 30, 0.6) 0%, transparent 35%)' }} />
                         </div>

                         {/* Floating Label */}
                         <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(30, 15, 45, 0.95)', backdropFilter: 'blur(10px)', padding: '12px 30px', borderRadius: '50px', border: '1px solid rgba(255,215,80,0.8)', whiteSpace: 'nowrap', color: '#FFF', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.85rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                            <span style={{ color: '#FFD700', marginRight: '6px' }}>✦</span> {t('stonesPage.label')} <span style={{ color: '#FFD700', marginLeft: '6px' }}>✦</span>
                         </div>
                       </motion.div>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

      </div>
    </div>
  );
};

export default StonesPage;
