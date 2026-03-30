import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-dark via-darker to-dark pt-20 overflow-hidden relative"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-blue-400 font-semibold text-lg">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text">{portfolioData.name}</span>
            </motion.h1>

            {/* Role */}
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-gray-400 mb-6">
              {portfolioData.role}
            </motion.h2>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg"
            >
              {portfolioData.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                View My Work
              </motion.a>
              <motion.a
                href={portfolioData.resumeLink}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <FaDownload /> Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6">
              {[
                { icon: FaGithub, url: 'https://github.com' },
                { icon: FaLinkedin, url: 'https://linkedin.com' },
                { icon: FaEnvelope, url: 'mailto:dhamodharan@example.com' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="text-2xl text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex justify-center items-center"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative w-80 h-80"
            >
              {/* Animated Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-400 border-r-purple-400"
              ></motion.div>

              {/* Inner Circle with Gradient */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 glass-effect flex items-center justify-center">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="text-6xl"
                >
                  💻
                </motion.div>
              </div>

              {/* Orbit Elements */}
              {['React', 'JS', 'CSS'].map((tech, index) => (
                <motion.div
                  key={index}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10 + index,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0"
                >
                  <div
                    className="absolute w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center text-sm font-bold text-blue-300"
                    style={{
                      top: '0%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    {tech}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <div className="border-2 border-blue-400 rounded-full p-2">
            <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
