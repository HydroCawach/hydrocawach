import React from 'react';
import { motion } from 'framer-motion';

const Technology = () => {
  return (
    <section id="technology" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technology
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        {/* Row 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Left Column - No background */}
          <div className="flex items-center justify-center">
            <video
              controls
              src="vid.mp4"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Right Column - Blue background */}
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">
              Advanced Water Disinfection
            </h3>
            <p className="text-lg leading-relaxed">
              Our technology harnesses cutting-edge disinfection methods to ensure water safety and purity at all times.
            </p>
          </div>
        </motion.div>

        {/* Row 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Left Column - Blue background */}
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">
              Smart Cooling System Monitoring
            </h3>
            <p className="text-lg leading-relaxed">
              Real-time monitoring and automation of cooling water treatments to maintain operational efficiency and reduce costs.
            </p>
          </div>

          {/* Right Column - No background */}
          <div className="flex items-center justify-center">
            <img
              src="/cooling_treatment.jpg"
              alt="Cooling Treatment"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
