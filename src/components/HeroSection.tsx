
import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-reflective-beige flex items-center justify-center scroll-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-reflective-beige via-reflective-beige to-amber-100 opacity-50"></div>
      
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        <motion.h1
          className="font-playfair text-6xl md:text-8xl font-bold text-reflective-burgundy mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Connect Beyond Words
        </motion.h1>
        
        <motion.p
          className="font-inter text-xl md:text-2xl text-reflective-burgundy/80 mb-12 font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          AI-powered sign language recognition and learning
        </motion.p>
        
        <motion.a
          href="#experience"
          className="text-link font-inter text-lg text-reflective-burgundy hover:text-reflective-crimson transition-colors duration-300 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          Try Now
        </motion.a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          className="w-px h-16 bg-reflective-burgundy/30"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        />
      </div>
    </section>
  );
};
