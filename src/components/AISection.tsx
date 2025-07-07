
import React from 'react';
import { motion } from 'framer-motion';

export const AISection = () => {
  return (
    <section className="min-h-screen bg-reflective-beige flex items-center justify-center scroll-section">
      <div className="max-w-6xl mx-auto px-8 text-center">
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
            The Intelligence Behind SignBridge
          </motion.h2>
          
          <motion.p
            className="font-inter text-xl text-reflective-burgundy/70 font-light max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            SignGemma AI
          </motion.p>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="w-2 h-2 bg-reflective-crimson mx-auto"></div>
              <h3 className="font-playfair text-2xl font-bold text-reflective-burgundy">
                Computer Vision
              </h3>
              <p className="font-inter text-reflective-burgundy/60 font-light">
                Advanced gesture recognition through deep learning models
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="w-2 h-2 bg-reflective-crimson mx-auto"></div>
              <h3 className="font-playfair text-2xl font-bold text-reflective-burgundy">
                Natural Language Processing
              </h3>
              <p className="font-inter text-reflective-burgundy/60 font-light">
                Contextual understanding for accurate translation
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="w-2 h-2 bg-reflective-crimson mx-auto"></div>
              <h3 className="font-playfair text-2xl font-bold text-reflective-burgundy">
                Adaptive Learning
              </h3>
              <p className="font-inter text-reflective-burgundy/60 font-light">
                Continuous improvement through user interaction
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
