import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Hydrocawach
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              At Hydrocawach Technologies, we harness the power of hydrodynamic cavitation
              to revolutionize water treatment. Our patented technology combines cutting-edge
              science with sustainable practices to deliver scalable solutions for clean water
              access.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              As a research-driven Indian startup, we're committed to bridging the gap between
              innovative engineering and social good, making clean water accessible to all.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/water-treatment.jpg"
                alt="Water Treatment Process"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 