import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Automatically detects project types from data
 const projectTypes = [
  'All',
  ...new Set(portfolioData.projects.map(p => p.type.trim())),
];
  const filteredProjects =
  filter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(
        p => p.type.trim() === filter.trim()
      );

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark dark:via-darker dark:to-dark py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl top-40 -left-20"></div>
        <div className="absolute w-96 h-96 bg-pink-600/10 rounded-full blur-3xl bottom-0 right-0"></div>
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
            <h2 className="section-title">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Showcasing my best work and real-world applications
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {projectTypes.map((type, index) => (
              <motion.button
                key={type}
                onClick={() => setFilter(type)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  backgroundColor: filter === type ? "#4f46e5" : "transparent",
                }}
                transition={{ duration: 0.3 }}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  filter === type
                    ? 'text-white shadow-lg shadow-blue-500/50 border-blue-500/50'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border-gray-300 dark:border-white/20'
                }`}
              >
                {type}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            transition={{
              layout: { duration: 0.5 },
            }}
          >
            <AnimatePresence mode="sync">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -40 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group rounded-xl overflow-hidden glass-effect border border-gray-200 dark:border-white/10 hover:border-blue-400/30 transition-all duration-300 cursor-pointer card-hover"
                >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500/80 dark:bg-blue-500/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-400/30">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg glass-effect hover:bg-white/10 transition-colors"
                    >
                      <FaGithub size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    {project.liveLink !== '#' && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                      >
                        <FaExternalLinkAlt size={16} />
                        <span className="text-sm">Live</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All Text */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">Want to see more? Check out all projects on GitHub</p>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-block btn-primary"
            >
              View All Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
