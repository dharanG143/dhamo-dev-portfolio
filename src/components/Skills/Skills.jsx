import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const skillColors = {
    0: 'from-blue-400 to-blue-600',
    1: 'from-purple-400 to-purple-600',
    2: 'from-pink-400 to-pink-600',
    3: 'from-green-400 to-green-600',
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-dark via-darker to-dark py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl bottom-20 right-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div className="text-center mb-16">
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Technologies and tools I've mastered through hands-on experience
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {portfolioData.skills.map((skill, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === index
                    ? `bg-gradient-to-r ${skillColors[index]} text-white`
                    : 'glass-effect text-gray-300 hover:text-blue-400'
                }`}
              >
                {skill.category}
              </motion.button>
            ))}
          </div>

          {/* Skills Display */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.skills[selectedCategory].items.map(
                (skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      y: -10,
                      boxShadow: '0 20px 25px rgba(0,0,0,0.5)',
                    }}
                    className="p-6 rounded-xl glass-effect border border-white/10 hover:border-blue-400/30 group relative overflow-hidden"
                  >
                    {/* Gradient background on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${skillColors[selectedCategory]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-gray-100 mb-3">
                        {skill}
                      </h3>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full bg-gradient-to-r ${skillColors[selectedCategory]}`}
                        ></motion.div>
                      </div>

                      <div className="mt-2 text-sm text-gray-400">
                        Proficiency: 85%
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 p-8 rounded-xl glass-effect border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              📚 Learning & Development
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm constantly learning and improving my skills. Currently exploring advanced React patterns,
              TypeScript, cloud technologies (AWS/Firebase), and web3 development. I believe in staying
              updated with the latest industry trends and best practices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
