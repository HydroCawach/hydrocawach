import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'No Chemicals, No Filters',
    description: 'Completely chemical-free operation with no need for consumable filters — making water treatment safer and more sustainable.',
    icon: '⚡',
  },
  {
    title: 'Low Operational Costs',
    description: 'Designed for maximum efficiency with minimal power or maintenance, making it ideal for rural and industrial setups.',
    icon: '⚙️',
  },
  {
    title: 'Eco-Friendly & Sustainable',
    description: 'Harnesses natural physical forces to treat water without harming the environment or generating waste.',
    icon: '♻️',
  },
  {
    title: 'Scientifically Proven',
    description: 'Lab-tested and field-validated, delivering >99% disinfection results and trusted by government trials.',
    icon: '🔬',
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Hydrocawach?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our cavitation technology stands apart with unmatched performance, sustainability, and field-proven results.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
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
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border"
            >
              <div className="text-5xl text-blue-600 mb-4 text-center">{highlight.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{highlight.title}</h3>
              <p className="text-gray-600 text-sm text-center">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
