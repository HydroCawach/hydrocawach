import React from 'react';
import { motion } from 'framer-motion';

const SupportedBy = () => (
  <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
        Supported By
      </motion.h2>

      <div className="w-24 h-1 bg-blue-600 mx-auto mb-10"></div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-center max-w-4xl mx-auto">
        {['sipport1.jpg', 'sipport2.jpg', 'support3.jpg'].map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="flex justify-center items-center"
          >
            <img
              src={`/${src}`}
              alt={`Supporter ${index + 1}`}
              className="h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default SupportedBy;
