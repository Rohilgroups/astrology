import React, { useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import AboutPhilosophy from '../components/about/AboutPhilosophy';
import AboutCommitment from '../components/about/AboutCommitment';
import './AboutPage.css';

const AboutPage = () => {
  const { scrollY } = useScroll();
  const yVideo = useTransform(scrollY, [0, 500], [0, 200]);
  const yContent = useTransform(scrollY, [0, 500], [0, -150]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <AboutHero 
        yVideo={yVideo} 
        yContent={yContent} 
        contentOpacity={contentOpacity} 
      />
      
      <AboutStory />
      
      <AboutPhilosophy />
      
      <AboutCommitment />
    </div>
  );
};

export default AboutPage;
