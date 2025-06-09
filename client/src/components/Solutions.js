import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const solutions = [
  {
    title: 'Handpump Water Disinfection',
    description: 'Clean, safe drinking water for rural communities through innovative disinfection technology.',
    image: '/bg1.jpg',
    color: 'bg-blue-600',
  },
  {
    title: 'Lake and Pond Rejuvenation',
    description: 'Restore water bodies to their natural state with our eco-friendly treatment solutions.',
    image: '/bg2.webp',
    color: 'bg-green-600',
  },
  {
    title: 'Industrial Effluent Pre-Treatment',
    description: 'Efficient pre-treatment of industrial wastewater before discharge.',
    image: '/bg3.jpg',
    color: 'bg-yellow-600',
  },
  {
    title: 'Cooling Tower Treatment',
    description: 'Optimize cooling tower performance with our advanced water treatment.',
    image: '/bg3.jpg',
    color: 'bg-purple-600',
  },
  {
    title: 'Sewage Water Treatment',
    description: 'Transform sewage water into reusable water through our innovative process.',
    image: '/bg1.jpg',
    color: 'bg-teal-600',
  },
  {
    title: 'Swimming Pool Water Treatment',
    description: 'Maintain crystal clear pool water with minimal chemical usage.',
    image: '/bg2.webp',
    color: 'bg-pink-600',
  },
];

const Solutions = () => {
  const formatUrl = (title) => {
    return `/solutions/${title.toLowerCase().replace(/\s+/g, '-')}`;
  };

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
            <Link to={formatUrl(solution.title)} key={solution.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative rounded-xl shadow-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 flex flex-col justify-center items-center text-center px-4 transition-all duration-500 ${solution.color} bg-opacity-90 opacity-0 group-hover:opacity-100`}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-white mb-4">{solution.description}</p>
                  <span className="text-sm font-medium text-white underline">
                    Know more
                  </span>
                </div>
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 text-white text-xl font-bold transition-all duration-500 group-hover:opacity-0">
                  {solution.title}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
