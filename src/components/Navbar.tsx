
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSectionIndex = Math.round(scrollPosition / windowHeight);
      
      const sections = ['hero', 'promise', 'experience', 'ai', 'invitation'];
      const newSection = sections[currentSectionIndex] || 'hero';
      setCurrentSection(newSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavbarStyles = () => {
    switch (currentSection) {
      case 'hero':
      case 'experience':
      case 'invitation':
        return {
          bg: 'bg-reflective-navy/95 backdrop-blur-sm',
          text: 'text-reflective-cream',
          hover: 'hover:text-white'
        };
      case 'promise':
      case 'ai':
        return {
          bg: 'bg-reflective-beige/95 backdrop-blur-sm',
          text: 'text-reflective-burgundy',
          hover: 'hover:text-reflective-crimson'
        };
      default:
        return {
          bg: 'bg-transparent',
          text: 'text-reflective-cream',
          hover: 'hover:text-white'
        };
    }
  };

  const navStyles = getNavbarStyles();

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${navStyles.bg}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <motion.div
            className={`font-playfair text-2xl font-bold transition-colors duration-300 ${navStyles.text}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            SignBridge
          </motion.div>
          
          <motion.a
            href="#"
            className={`text-link font-inter font-light transition-colors duration-300 ${navStyles.text} ${navStyles.hover}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Sign In
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};
