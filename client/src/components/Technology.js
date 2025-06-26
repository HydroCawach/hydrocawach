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
            <Link to="/solutions/handpump-water-disinfection">
              <h3 className="text-2xl font-semibold mb-4 hover:underline cursor-pointer">
                Water Disinfecting HandPump
              </h3>
            </Link>
            <p className="text-lg leading-relaxed">
              HydroCawach's Handpump Water Disinfection system uses hydrodynamic cavitation to eliminate harmful microbes like E. Coli without chemicals or electricity. It easily integrates with existing rural handpumps, offering a sustainable, low-maintenance solution. Validated through government field trials, the patented technology ensures up to 99.87% clean drinking water for underserved communities.
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
            <Link to="/solutions/lake-and-pond-rejuvenation">
              <h3 className="text-2xl font-semibold mb-4 hover:underline">
                Lake and Pond Water Treatment
              </h3>
            </Link>
            <p className="text-lg leading-relaxed">
              HydroCawach’s Lake and Pond Rejuvenation solution leverages advanced Hydrodynamic Cavitation Technology to restore water quality without chemicals. By reducing BOD, COD, and halting hyacinth growth, the system eliminates foul odors and revives aquatic ecosystems. This sustainable, in-situ treatment has successfully transformed stagnant water bodies into thriving, biodiverse environments.
            </p>
          </div>


          {/* Right Column - No background */}
          <div className="flex items-center justify-center">
            <img
              src="/BinduLake.png"
              alt="Lake"
              className="rounded-lg shadow-lg w-full max-h-90 object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
