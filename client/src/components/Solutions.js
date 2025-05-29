import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'Handpump Water Disinfection',
    description: 'Clean, safe drinking water for rural communities through innovative disinfection technology.',
    icon: '💧',
  },
  {
    title: 'Lake and Pond Rejuvenation',
    description: 'Restore water bodies to their natural state with our eco-friendly treatment solutions.',
    icon: '🌊',
  },
  {
    title: 'Industrial Effluent Pre-Treatment',
    description: 'Efficient pre-treatment of industrial wastewater before discharge.',
    icon: '🏭',
  },
  {
    title: 'Cooling Tower Treatment',
    description: 'Optimize cooling tower performance with our advanced water treatment.',
    icon: '❄️',
  },
  {
    title: 'Sewage Water Treatment',
    description: 'Transform sewage water into reusable water through our innovative process.',
    icon: '♻️',
  },
  {
    title: 'Swimming Pool Water Treatment',
    description: 'Maintain crystal clear pool water with minimal chemical usage.',
    icon: '🏊',
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions; 