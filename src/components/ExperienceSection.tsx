
import React from 'react';
import { motion } from 'framer-motion';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen bg-reflective-beige flex items-center justify-center scroll-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-amber-100/50 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-playfair text-5xl md:text-6xl font-bold text-reflective-burgundy leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience the Future
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-20">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-playfair text-3xl font-bold text-reflective-burgundy">
                Real-Time Recognition
              </h3>
              <p className="font-inter text-lg text-reflective-burgundy/80 font-light leading-relaxed">
                Instant translation of sign language gestures with 99.7% accuracy. 
                Our advanced neural networks understand context, emotion, and nuance.
              </p>
            </motion.div>
            
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-playfair text-3xl font-bold text-reflective-burgundy">
                Adaptive Learning
              </h3>
              <p className="font-inter text-lg text-reflective-burgundy/80 font-light leading-relaxed">
                Personalized learning paths that evolve with your progress. 
                Master sign language through immersive, AI-guided experiences.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
