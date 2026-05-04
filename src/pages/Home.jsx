import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import DailyHoroscopeSection from '../components/DailyHoroscopeSection';
import FeaturesFAQ from '../components/FeaturesFAQ';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/BlogPreview';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <main>
      <div data-aos="fade-in"><HeroSection /></div>
      <div data-aos="fade-up"><AboutSection /></div>
      <div data-aos="zoom-in-up"><ServicesSection /></div>
      <div data-aos="fade-right"><DailyHoroscopeSection /></div>
      <div data-aos="fade-left"><FeaturesFAQ /></div>
      <div data-aos="zoom-in"><Testimonials /></div>
      <div data-aos="fade-up"><BlogPreview /></div>
    </main>
  );
};

export default Home;
