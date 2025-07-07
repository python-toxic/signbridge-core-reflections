
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsScrolled(scrollPosition > heroHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled ? 'bg-reflective-beige/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <motion.div
            className={`font-playfair text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-reflective-burgundy' : 'text-reflective-cream'
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            SignBridge
          </motion.div>
          
          <motion.a
            href="#"
            className={`text-link font-inter font-light transition-colors duration-300 ${
              isScrolled ? 'text-reflective-burgundy hover:text-reflective-crimson' : 'text-reflective-cream hover:text-white'
            }`}
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
