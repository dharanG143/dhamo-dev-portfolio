import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-dark via-darker to-dark py-20 overflow-hidden relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl top-40 left-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                {portfolioData.aboutText}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-700">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center p-4 rounded-lg glass-effect"
                >
                  <div className="text-3xl font-bold text-blue-400">10+</div>
                  <div className="text-sm text-gray-400 mt-2">Projects</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center p-4 rounded-lg glass-effect"
                >
                  <div className="text-3xl font-bold text-purple-400">2+</div>
                  <div className="text-sm text-gray-400 mt-2">Years</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center p-4 rounded-lg glass-effect"
                >
                  <div className="text-3xl font-bold text-pink-400">∞</div>
                  <div className="text-sm text-gray-400 mt-2">Learning</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Visual Card */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  icon: '🎯',
                  title: 'Mission',
                  desc: 'Creating user-centric digital experiences that solve real problems',
                },
                {
                  icon: '⚡',
                  title: 'Performance',
                  desc: 'Building fast, responsive, and optimized applications',
                },
                {
                  icon: '🚀',
                  title: 'Innovation',
                  desc: 'Exploring new technologies and frameworks',
                },
                {
                  icon: '🤝',
                  title: 'Collaboration',
                  desc: 'Working effectively with diverse teams',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="p-6 rounded-xl glass-effect border border-white/10 hover:border-blue-400/30 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-blue-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
