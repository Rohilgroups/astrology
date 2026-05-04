import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

/* ── Icons ─────────────────────────────────────────────────── */
const IconPhone = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
  </svg>
);
const IconMapPin = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconMail = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconWhatsApp = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);
const IconArrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M7 7h10v10"/>
  </svg>
);
const IconStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
  </svg>
);

/* ── Contact Card ───────────────────────────────────────────── */
const ContactCard = ({ icon, label, value, href, color, glowColor, delay, btnText }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ textDecoration: 'none', flex: '1 1 260px', maxWidth: '360px', minWidth: 0 }}
    >
      <motion.div
        animate={{ y: hovered ? -10 : 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          position: 'relative',
          padding: 'clamp(28px, 5vw, 50px) clamp(20px, 4vw, 36px)',
          borderRadius: '24px',
          background: 'linear-gradient(145deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.01) 100%)',
          border: `1px solid ${hovered ? color : 'rgba(255,255,255,0.08)'}`,
          backdropFilter: 'blur(30px)',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'border-color 0.4s ease',
          boxShadow: hovered ? `0 40px 80px rgba(0,0,0,0.5), 0 0 60px ${glowColor}` : '0 20px 50px rgba(0,0,0,0.35)',
          height: '100%',
        }}
      >
        {/* Radial glow */}
        <motion.div
          animate={{ opacity: hovered ? 0.6 : 0.15 }}
          transition={{ duration: 0.4 }}
          style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at top left, ${glowColor}, transparent 65%)`, pointerEvents: 'none' }}
        />
        {/* Top shimmer line */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'absolute', top: 0, left: '15%', width: '70%', height: '2px', background: `linear-gradient(90deg, transparent, ${color}, transparent)`, transformOrigin: 'left', borderRadius: '2px' }}
        />
        {/* Icon */}
        <motion.div
          animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? 6 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            width: 'clamp(56px, 10vw, 72px)', height: 'clamp(56px, 10vw, 72px)', borderRadius: '18px',
            background: `linear-gradient(135deg, ${glowColor}, transparent)`,
            border: `1px solid ${color}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: color, marginBottom: '20px',
            boxShadow: `0 8px 24px ${glowColor}`,
            position: 'relative', zIndex: 2,
          }}
        >
          {icon}
        </motion.div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px', color: color, fontWeight: '700', marginBottom: '10px' }}>
            {label}
          </p>
          <h3 style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', color: '#FFFFFF', fontWeight: '600', lineHeight: 1.4, marginBottom: '24px', wordBreak: 'break-word' }}>
            {value}
          </h3>
          {/* CTA Button */}
          <motion.div
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: 'clamp(8px, 2vw, 12px) clamp(14px, 3vw, 24px)',
              borderRadius: '50px',
              background: hovered ? color : 'rgba(255,255,255,0.05)',
              color: hovered ? '#0F091A' : color,
              fontSize: 'clamp(0.7rem, 2vw, 0.85rem)', fontWeight: '700', letterSpacing: '1px',
              textTransform: 'uppercase',
              border: `1px solid ${color}`,
              transition: 'all 0.35s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {btnText} <IconArrow />
          </motion.div>
        </div>
      </motion.div>
    </motion.a>
  );
};

/* ── Floating Orb ───────────────────────────────────────────── */
const FloatOrb = ({ top, left, size, color, duration }) => (
  <motion.div
    animate={{ y: [-25, 25, -25], x: [-15, 15, -15], opacity: [0.15, 0.45, 0.15] }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    style={{ position: 'absolute', top, left, width: size, height: size, borderRadius: '50%', background: color, filter: 'blur(90px)', pointerEvents: 'none', zIndex: 0 }}
  />
);

/* ── Main Contact Component ─────────────────────────────────── */
const Contact = () => {
  const { t } = useTranslation();

  return (
    <div style={{ background: '#0A0612', minHeight: '100vh', color: '#F2E8F5', fontFamily: 'var(--font-body)', overflowX: 'hidden', width: '100%' }}>

      {/* ═══════════════════════════════════════════════
          SECTION 1 — CINEMATIC HERO WITH VIDEO
      ═══════════════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

        {/* Navbar gradient shield */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(to bottom, rgba(10,6,18,0.95) 0%, transparent 100%)', zIndex: 20, pointerEvents: 'none' }} />

        {/* Video BG */}
        <video autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.75 }}>
          <source src="/images/contact_hero_video.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,6,18,0.7) 0%, rgba(10,6,18,0.25) 50%, rgba(10,6,18,0.7) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, #0A0612, transparent)', zIndex: 2 }} />

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 16px', maxWidth: '900px', width: '100%' }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}
          >
            <motion.img
              src="/images/astro_logo.jpeg"
              alt="Logo"
              style={{ width: 'clamp(70px, 15vw, 120px)', height: 'clamp(70px, 15vw, 120px)', objectFit: 'contain', marginBottom: '16px', filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.3))' }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 18px', borderRadius: '50px', background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.35)', backdropFilter: 'blur(10px)' }}>
              <motion.span animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} style={{ color: '#D4AF37', fontSize: '0.9rem' }}>✦</motion.span>
              <span style={{ fontSize: 'clamp(0.6rem, 2.5vw, 0.8rem)', textTransform: 'uppercase', letterSpacing: 'clamp(2px, 1.5vw, 5px)', color: '#D4AF37', fontWeight: '700' }}>Future Guide Astrology</span>
              <motion.span animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} style={{ color: '#D4AF37', fontSize: '0.9rem' }}>✦</motion.span>
            </div>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 6vw, 5rem)', color: '#FFFFFF', lineHeight: 1.15, fontWeight: '900', marginBottom: '16px', textShadow: '0 0 80px rgba(212,175,55,0.2)' }}
          >
            {t('contact.hero.title')}
            <br />
            <span style={{ background: 'linear-gradient(135deg, #FFD700 0%, #FFFACD 40%, #D4AF37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.5))' }}>
              {t('contact.hero.titleHighlight')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            style={{ fontSize: 'clamp(0.75rem, 2.5vw, 1.1rem)', color: '#E8D5F5', letterSpacing: 'clamp(1px, 1.5vw, 4px)', textTransform: 'uppercase', fontWeight: '600', marginBottom: '36px', textShadow: '0 4px 20px rgba(0,0,0,0.7)' }}
          >
            {t('contact.hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.a
              href="tel:+919003398732"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: 'clamp(12px, 3vw, 18px) clamp(20px, 5vw, 40px)', background: 'linear-gradient(135deg, #D4AF37, #FFD700, #B8860B)', color: '#0A0612', borderRadius: '50px', fontWeight: '900', fontSize: 'clamp(0.8rem, 2.5vw, 1rem)', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none', boxShadow: '0 10px 30px rgba(212,175,55,0.3)', whiteSpace: 'nowrap' }}
            >
              <IconPhone /> {t('contact.cards.voice.title')}
            </motion.a>
            <motion.a
              href="https://wa.me/919003398732"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: 'clamp(12px, 3vw, 18px) clamp(20px, 5vw, 40px)', background: 'rgba(255,255,255,0.07)', color: '#FFF', borderRadius: '50px', fontWeight: '700', fontSize: 'clamp(0.8rem, 2.5vw, 1rem)', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none', border: '1px solid rgba(37,211,102,0.5)', backdropFilter: 'blur(10px)', whiteSpace: 'nowrap' }}
            >
              <IconWhatsApp /> {t('contact.cards.whatsapp.title')}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2 — MARQUEE
      ═══════════════════════════════════════════════ */}
      <div style={{ position: 'relative', zIndex: 10, overflow: 'hidden', background: 'linear-gradient(90deg, rgba(212,175,55,0.04), rgba(139,92,246,0.08), rgba(212,175,55,0.04))', borderTop: '1px solid rgba(212,175,55,0.2)', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
        <motion.div
          animate={{ x: [0, '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 28 }}
          style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', width: '200%', padding: '16px 0' }}
        >
          <span style={{ fontSize: 'clamp(0.85rem, 2vw, 1.1rem)', fontFamily: 'var(--font-heading)', color: '#D4AF37', letterSpacing: '4px', textTransform: 'uppercase', fontStyle: 'italic' }}>
            {t('contact.marquee').repeat(6)}
          </span>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════
          LOWER CONTENT WRAPPER WITH CELESTIAL BG
      ═══════════════════════════════════════════════ */}
      <div style={{ position: 'relative', background: 'url(/images/contact_bottom_bg.png) center center / cover no-repeat fixed' }}>
        {/* Darkening overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,6,18,0.85)', zIndex: 0 }} />

        {/* ═══════════════════════════════════════════════
            SECTION 3 — DIVINE QUOTE
        ═══════════════════════════════════════════════ */}
        <section style={{ position: 'relative', padding: 'clamp(60px, 10vw, 160px) 16px', overflow: 'hidden', zIndex: 1 }}>
          <FloatOrb top="5%" left="5%" size="600px" color="radial-gradient(circle, rgba(212,175,55,0.2), transparent 70%)" duration={14} />

          <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              style={{
                background: 'rgba(255,255,255,0.01)',
                backdropFilter: 'blur(40px)',
                padding: 'clamp(32px, 6vw, 80px) clamp(20px, 5vw, 60px)',
                borderRadius: '32px',
                border: '1px solid rgba(212,175,55,0.15)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
              }}
            >
              {/* Section label */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '36px', flexWrap: 'wrap' }}>
                <div style={{ height: '1px', width: 'clamp(30px, 8vw, 80px)', background: 'linear-gradient(90deg, transparent, #D4AF37)', flexShrink: 0 }} />
                <span style={{ fontSize: 'clamp(0.65rem, 2vw, 0.85rem)', textTransform: 'uppercase', letterSpacing: 'clamp(2px, 1.5vw, 6px)', color: '#D4AF37', fontWeight: '800', whiteSpace: 'nowrap' }}>{t('contact.quote.title')}</span>
                <div style={{ height: '1px', width: 'clamp(30px, 8vw, 80px)', background: 'linear-gradient(90deg, #D4AF37, transparent)', flexShrink: 0 }} />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
                {[0,1,2,3,4].map(i => (
                  <motion.span
                    key={i}
                    animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
                    transition={{ duration: 3 + i, repeat: Infinity }}
                    style={{ color: '#FFD700', filter: 'drop-shadow(0 0 8px rgba(255,215,0,0.6))' }}
                  >
                    <IconStar />
                  </motion.span>
                ))}
              </div>

              {/* Quote text */}
              <motion.blockquote style={{ margin: 0 }}>
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.4rem, 4vw, 3.5rem)',
                  color: '#FFFFFF',
                  fontStyle: 'italic',
                  lineHeight: 1.35,
                  marginBottom: '36px',
                  textShadow: '0 10px 40px rgba(0,0,0,0.5)',
                  letterSpacing: '-0.5px',
                  wordBreak: 'break-word',
                }}>
                  "{t('contact.quote.text')}"
                </p>
              </motion.blockquote>

              {/* Divider */}
              <div style={{ width: '120px', height: '2px', background: 'linear-gradient(90deg, transparent, #D4AF37, #FFD700, #D4AF37, transparent)', margin: '0 auto 28px' }} />

              {/* Author */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 2.4rem)', color: '#FFF', fontWeight: '900', marginBottom: '8px', textShadow: '0 0 30px rgba(212,175,55,0.3)' }}>
                  {t('contact.quote.author')}
                </div>
                <div style={{ fontSize: 'clamp(0.65rem, 2vw, 0.9rem)', textTransform: 'uppercase', letterSpacing: 'clamp(2px, 1.5vw, 5px)', color: '#D4AF37', fontWeight: '700', opacity: 0.9 }}>
                  {t('contact.quote.role')}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SECTION 4 — CONTACT CARDS
        ═══════════════════════════════════════════════ */}
        <section style={{ position: 'relative', padding: '0 16px clamp(60px, 10vw, 160px)', zIndex: 1 }}>
          <FloatOrb top="20%" left="80%" size="500px" color="radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)" duration={18} />

          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 80px)' }}
            >
              <span style={{ fontSize: 'clamp(0.65rem, 2vw, 0.9rem)', textTransform: 'uppercase', letterSpacing: 'clamp(2px, 1.5vw, 6px)', color: '#8B5CF6', fontWeight: '800', display: 'block', marginBottom: '16px', opacity: 0.8 }}>Available 24/7 for Guidance</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 6vw, 4.5rem)', color: '#FFF', fontWeight: '900', margin: 0, lineHeight: 1.1, wordBreak: 'break-word' }}>
                Begin Your{' '}
                <span style={{ background: 'linear-gradient(135deg, #D4AF37, #FFD700, #FFFACD)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.3))' }}>
                  Sacred Contact
                </span>
              </h2>
            </motion.div>

            <div style={{ display: 'flex', gap: 'clamp(16px, 3vw, 32px)', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'stretch' }}>
              <ContactCard
                icon={<IconPhone />}
                label={t('contact.cards.voice.title')}
                value={t('contact.cards.voice.subtitle')}
                href="tel:+919003398732"
                color="#D4AF37"
                glowColor="rgba(212,175,55,0.4)"
                delay={0.1}
                btnText={t('contact.cards.voice.btn')}
              />
              <ContactCard
                icon={<IconWhatsApp />}
                label={t('contact.cards.whatsapp.title')}
                value={t('contact.cards.whatsapp.subtitle')}
                href="https://wa.me/919003398732"
                color="#25D366"
                glowColor="rgba(37,211,102,0.35)"
                delay={0.25}
                btnText={t('contact.cards.whatsapp.btn')}
              />
              <ContactCard
                icon={<IconMail />}
                label={t('contact.cards.mail.title')}
                value={t('contact.cards.mail.subtitle')}
                href="mailto:info@futureguideastrology.com"
                color="#8B5CF6"
                glowColor="rgba(139,92,246,0.35)"
                delay={0.4}
                btnText={t('contact.cards.mail.btn')}
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SECTION 5 — ADDRESS BANNER
        ═══════════════════════════════════════════════ */}
        <section style={{ position: 'relative', padding: '0 16px clamp(60px, 10vw, 120px)', zIndex: 1, overflowX: 'hidden' }}>
          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              style={{
                position: 'relative',
                borderRadius: '32px',
                overflow: 'hidden',
                border: '1px solid rgba(212,175,55,0.3)',
                background: 'rgba(10,6,18,0.4)',
                backdropFilter: 'blur(50px)',
                boxShadow: '0 50px 120px rgba(0,0,0,0.6)',
              }}
            >
              {/* Inner glow */}
              <motion.div
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(212,175,55,0.15), transparent 70%)' }}
              />

              <div style={{ position: 'relative', zIndex: 2, padding: 'clamp(28px, 6vw, 72px) clamp(20px, 5vw, 72px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(20px, 4vw, 40px)', textAlign: 'center' }}>

                {/* Map icon */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    width: 'clamp(72px, 14vw, 110px)', height: 'clamp(72px, 14vw, 110px)', borderRadius: '28px',
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.4), rgba(212,175,55,0.1))',
                    border: '1px solid rgba(212,175,55,0.5)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#FFF', boxShadow: '0 0 40px rgba(212,175,55,0.25)',
                    flexShrink: 0,
                  }}
                >
                  <IconMapPin />
                </motion.div>

                {/* Text block */}
                <div style={{ maxWidth: '600px', width: '100%' }}>
                  <p style={{ color: '#D4AF37', letterSpacing: 'clamp(2px, 1vw, 4px)', textTransform: 'uppercase', fontSize: 'clamp(0.65rem, 2vw, 0.8rem)', fontWeight: '800', marginBottom: '12px' }}>
                    {t('contact.address.subtitle')}
                  </p>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 5vw, 3.2rem)', color: '#FFF', marginBottom: '14px', fontWeight: '900', lineHeight: 1.2 }}>
                    {t('contact.address.title')}
                  </h3>
                  <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)', color: '#E8D5F5', lineHeight: 1.6, marginBottom: '20px', opacity: 0.9 }}>
                    {t('contact.address.text')}
                  </p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '50px', background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', fontWeight: '700', fontSize: 'clamp(0.6rem, 1.8vw, 0.75rem)', letterSpacing: 'clamp(1px, 0.5vw, 2px)', textTransform: 'uppercase' }}>
                    <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>●</motion.span>
                    {t('contact.address.badge')}
                  </div>
                </div>

                {/* CTA */}
                <motion.a
                  href="https://maps.google.com/?q=62/67,+Uppara+Street,+Coimbatore+641001"
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: '0 30px 70px rgba(212,175,55,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
                    padding: 'clamp(18px, 4vw, 30px) clamp(36px, 8vw, 60px)',
                    background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #B8860B 100%)',
                    color: '#0A0612', borderRadius: '24px', textDecoration: 'none',
                    fontWeight: '900', fontSize: 'clamp(0.85rem, 2.5vw, 1.1rem)', letterSpacing: '2px',
                    textTransform: 'uppercase', boxShadow: '0 20px 50px rgba(212,175,55,0.3)',
                  }}
                >
                  <IconMapPin />
                  <span>View Map</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
