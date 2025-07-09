
import React from 'react';
import { motion } from 'framer-motion';

const promises = [
  {
    title: "Understanding",
    description: "Bridge communication gaps with precision AI recognition"
  },
  {
    title: "Empowering",
    description: "Learn at your own pace with adaptive technology"
  },
  {
    title: "Inclusive",
    description: "Design that welcomes every voice and gesture"
  }
];

export const PromiseSection = () => {
  return (
    <section className="min-h-screen bg-reflective-navy flex items-center justify-center scroll-section">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-reflective-cream">
                {promise.title}
              </h2>
              <p className="font-inter text-lg text-reflective-cream/70 font-light leading-relaxed max-w-sm mx-auto">
                {promise.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
