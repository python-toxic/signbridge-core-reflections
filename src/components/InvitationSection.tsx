
import React from 'react';
import { motion } from 'framer-motion';

export const InvitationSection = () => {
  return (
    <section className="min-h-screen bg-reflective-navy flex items-center justify-center scroll-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-reflective-navy/90 via-slate-800/50 to-reflective-navy"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-playfair text-6xl md:text-7xl font-bold text-reflective-cream leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Connect?
          </motion.h2>
          
          <motion.p
            className="font-inter text-xl text-reflective-cream/80 font-light leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join thousands who are already breaking down communication barriers 
            with SignBridge's revolutionary AI technology.
          </motion.p>
          
          <motion.a
            href="#"
            className="text-link font-inter text-xl text-reflective-cream hover:text-white transition-colors duration-300 font-light inline-block mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
