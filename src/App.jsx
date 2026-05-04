import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import StonesPage from './pages/StonesPage';
import ContactPage from './pages/ContactPage';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.className = `lang-${i18n.language}`;
  }, [i18n.language]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/stones" element={<StonesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
