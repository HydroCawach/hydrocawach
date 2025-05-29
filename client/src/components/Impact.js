import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Impact = () => {
  const [counts, setCounts] = useState({
    handpumps: 0,
    villages: 0,
    lakes: 0,
  });

  useEffect(() => {
    const targetCounts = {
      handpumps: 160,
      villages: 30,
      lakes: 5,
    };

    const duration = 2000; // 2 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increments = {
      handpumps: targetCounts.handpumps / steps,
      villages: targetCounts.villages / steps,
      lakes: targetCounts.lakes / steps,
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        handpumps: Math.min(Math.floor(increments.handpumps * currentStep), targetCounts.handpumps),
        villages: Math.min(Math.floor(increments.villages * currentStep), targetCounts.villages),
        lakes: Math.min(Math.floor(increments.lakes * currentStep), targetCounts.lakes),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const impactItems = [
    {
      title: 'Handpumps Installed',
      count: counts.handpumps,
      suffix: '+',
      icon: '💧',
    },
    {
      title: 'Villages Reached',
      count: counts.villages,
      suffix: '+',
      icon: '🏘️',
    },
    {
      title: 'Lakes Rejuvenated',
      count: counts.lakes,
      suffix: '+',
      icon: '🌊',
    },
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {item.count}
                {item.suffix}
              </div>
              <h3 className="text-xl text-gray-900">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact; 