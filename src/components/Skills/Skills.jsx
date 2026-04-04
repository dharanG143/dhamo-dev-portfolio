import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { AnimatePresence } from "framer-motion";

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
    0: "from-blue-400 to-blue-600",
    1: "from-purple-400 to-purple-600",
    2: "from-pink-400 to-pink-600",
    3: "from-green-400 to-green-600",
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark dark:via-darker dark:to-dark py-20 relative overflow-hidden"
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
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.div className="text-center mb-16">
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Explore my Frontend, Backend, Tools, and Soft Skills categories
              with working toggle buttons.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {portfolioData.skills.map((skill, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(index)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                animate={{
                  scale: selectedCategory === index ? 1.05 : 1,
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border ${
                  selectedCategory === index
                    ? `border-transparent bg-gradient-to-r ${skillColors[index]} text-white shadow-lg`
                    : "glass-effect border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300"
                }`}
              >
                {skill.category}
              </motion.button>
            ))}
          </div>

          <div className="text-center mb-8">
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {portfolioData.skills[selectedCategory]?.category || "Skills"}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-2">
              {portfolioData.skills[selectedCategory]?.description ||
                "Select a category to view these skills."}
            </p>
          </div>

          {/* Skills Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {portfolioData.skills[selectedCategory].items.map(
                  (skill, index) => (
                    <motion.div
                      key={`${skill.name}-${selectedCategory}`}
                      layout
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{
                        y: -10,
                        scale: 1.03,
                        boxShadow: "0 20px 25px rgba(0,0,0,0.5)",
                      }}
                      className="p-6 rounded-xl glass-effect border border-gray-200 dark:border-white/10 hover:border-blue-400/30 group relative overflow-hidden"
                    >
                      {/* Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${skillColors[selectedCategory]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      ></div>

                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                          {skill.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          {skill.description}
                        </p>

                        {/* Progress */}
                        <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            key={selectedCategory} // 🔥 reset animation
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            transition={{ duration: 1 }}
                            className={`h-full bg-gradient-to-r ${skillColors[selectedCategory]}`}
                          />
                        </div>

                        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          Proficiency: 85%
                        </div>
                      </div>
                    </motion.div>
                  ),
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 p-8 rounded-xl glass-effect border border-gray-200 dark:border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              📚 Learning & Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm constantly learning and improving my skills. Currently
              exploring advanced React patterns, TypeScript, cloud technologies
              (AWS/Firebase), and web3 development. I believe in staying updated
              with the latest industry trends and best practices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
