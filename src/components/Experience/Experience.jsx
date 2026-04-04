import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

export const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark dark:via-darker dark:to-dark py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl top-1/3 -right-20"></div>
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
            <h2 className="section-title">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              My professional journey and key milestones
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="mb-12 relative"
              >
                {/* Timeline Connection */}
                {index < portfolioData.experience.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-20 bg-gradient-to-b from-blue-500 to-purple-500 md:left-1/2 md:-translate-x-1/2"></div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Timeline Dot */}
                  <div className="flex md:justify-end">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="relative"
                    >
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-400/20 rounded-full animate-pulse"></div>
                    </motion.div>

                    {/* Left Side - Odd */}
                    {index % 2 === 0 && (
                      <div className="md:w-full md:text-right px-4 md:px-0 md:pr-12">
                        <span className="text-blue-400 font-semibold text-sm">
                          {exp.duration}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={index % 2 === 0 ? '' : 'md:order-first'}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="p-8 rounded-xl glass-effect border border-gray-200 dark:border-white/10 hover:border-blue-400/30 transition-all group"
                    >
                      {/* Right Side - Odd */}
                      {index % 2 !== 0 && (
                        <span className="text-blue-400 font-semibold text-sm">
                          {exp.duration}
                        </span>
                      )}

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-3 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-300 font-semibold mb-4">
                        {exp.company}
                      </p>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2"
                          >
                            <span className="text-blue-400 mt-1">▸</span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Looking for a dedicated Frontend Developer?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-block btn-primary"
            >
              Let's Work Together
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
