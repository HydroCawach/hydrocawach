import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


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

        {/* Row 1 - updated to summary only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Video */}
          <div className="flex items-center justify-center">
            <video
              controls
              src="/vid3.mp4"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Summary Text + Button */}
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">
              Hydrodynamic Cavitation Technology
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              Our cutting-edge cavitation-based treatment destroys harmful microbes,
              reduces BOD & COD, and clarifies water—without chemicals or filters.
            </p>
            <Link to="/technology/hydrodynamic-cavitation">
              <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded shadow hover:bg-blue-100">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Technology;
