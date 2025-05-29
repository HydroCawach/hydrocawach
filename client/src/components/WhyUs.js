import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Patented Technology',
    description: 'Our innovative hydrodynamic cavitation technology is protected by multiple patents.',
    icon: '🔬',
  },
  {
    title: 'Sustainable & Green',
    description: 'Environmentally conscious solutions that minimize chemical usage and energy consumption.',
    icon: '🌱',
  },
  {
    title: 'Made in India',
    description: 'Proudly developed and manufactured in India, supporting local innovation.',
    icon: '🇮🇳',
  },
  {
    title: 'Proven Impact',
    description: 'Demonstrated success in improving water quality across diverse applications.',
    icon: '📈',
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Hydrocawach
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 