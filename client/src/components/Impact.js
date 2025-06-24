import React from 'react';
import { motion } from 'framer-motion';

const impactItems = [
  {
    title: 'Deployments Across Maharashtra & Gujarat',
    value: '20+',
    sdg: 'SDG 6 – Clean Water & Sanitation',
    sdgLogo: '/sdg.png',
  },
  {
    title: 'Operational Cost Savings',
    value: '75%+',
    sdg: 'SDG 9 – Industry, Innovation & Infrastructure',
    sdgLogo: '/sdg9.png',
  },
  {
    title: 'Rural Beneficiaries with Safe Water Access',
    value: '50,000+',
    sdg: 'SDG 6 – Clean Water & Sanitation',
    sdgLogo: '/sdg.png',
  },
  {
    title: 'Strategic Partnerships',
    value: 'Indian Oil, Cummins, Govt. Depts',
    sdg: 'SDG 17 – Partnerships for the Goals',
    sdgLogo: '/sdg17.png',
  },
];

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Impact & Success Stories
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {impactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative p-6 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* SDG Logo on top-right */}
              <img
                src={item.sdgLogo}
                alt={item.sdg}
                className="absolute top-4 right-4 w-10 h-10 object-contain"
              />

              {/* Value */}
              <div className="text-3xl font-bold text-blue-700 mb-2">
                {item.value}
              </div>

              {/* Title */}
              <h3 className="text-xl text-gray-900 font-semibold mb-1">
                {item.title}
              </h3>

              {/* SDG text */}
              <p className="text-sm text-gray-600 italic">{item.sdg}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
