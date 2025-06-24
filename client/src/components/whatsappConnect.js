import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppConnect = () => (
  <div className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
        Connect With Us
      </motion.h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
      >
        Have questions or want to learn more? Connect with us directly on WhatsApp — we’re happy to chat!
      </motion.p>

      <motion.a
        href="https://wa.me/919322949621"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, rotate: '-1deg' }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 text-lg font-semibold"
      >
        <img
          src="/whatsapp-logo.png"
          alt="WhatsApp"
          className="w-6 h-6"
        />
        Message us on WhatsApp
      </motion.a>
    </div>
  </div>
);

export default WhatsAppConnect;
