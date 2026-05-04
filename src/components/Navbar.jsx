import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  // Lock scroll
  const lockBody = useCallback(() => {
    document.body.classList.add('menu-open');
    document.body.style.top = `-${window.scrollY}px`;
  }, []);

  // Unlock scroll
  const unlockBody = useCallback(() => {
    const scrollY = document.body.style.top;
    document.body.classList.remove('menu-open');
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsLangOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      lockBody();
    } else {
      unlockBody();
    }

    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.top = '';
    };
  }, [isMenuOpen, lockBody, unlockBody]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsLangOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsLangOpen(false);
  };

  const isActive = (path) =>
    location.pathname === path ? 'active' : '';

  return (
    <header className={`navbar-luxury ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">

        {/* Logo */}
        <Link to="/" className="nav-brand">
          <div className="logo-wrapper">
            <img src="/images/astro_logo.jpeg" alt="Future Guide Logo" className="logo-img" />
            <div className="logo-glow"></div>
          </div>
          <div className="brand-text">
            <span className="brand-name">{t('brand.name')}</span>
            <span className="brand-tagline">{t('brand.tagline')}</span>
          </div>
        </Link>

        {/* Overlay */}
        <div
          className={`mobile-overlay ${isMenuOpen ? 'is-visible' : ''}`}
          onClick={closeMenu}
        />

        {/* Nav Links */}
        <nav className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
          {[
            { label: t('nav.home'), path: '/' },
            { label: t('nav.about'), path: '/about' },
            { label: t('nav.services'), path: '/services' },
            { label: t('nav.stones'), path: '/stones' },
            { label: t('nav.contact'), path: '/contact' }
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${isActive(item.path)}`}
              onClick={closeMenu}
            >
              {item.label}
              <span className="link-indicator"></span>
            </Link>
          ))}

          <Link to="/contact" className="btn-luxury-nav" onClick={closeMenu}>
            {t('nav.book_reading')}
          </Link>

          {/* Language Dropdown */}
          <div className="lang-dropdown-container">
            <button
              className="lang-btn"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              {i18n.language.toUpperCase()} ▼
            </button>

            {isLangOpen && (
              <div className="lang-dropdown-menu">
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('hi')}>हिंदी</button>
                <button onClick={() => changeLanguage('ta')}>தமிழ்</button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </header>
  );
};

export default Navbar;