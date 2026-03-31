import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, url: `mailto:${portfolioData.email}`, label: 'Email' },
  ];

  return (
    <footer className="bg-darker border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600/5 rounded-full blur-3xl top-0 left-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <motion.div variants={itemVariants}>
              <h3 className="gradient-text font-bold text-2xl mb-4">
                {portfolioData.name.charAt(0)}D
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building beautiful and functional web experiences with modern technologies.
              </p>
            </motion.div>

            {/* Navigation Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4">Navigation</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Resume', link: portfolioData.resumeLink },
                  { label: 'GitHub', link: 'https://github.com' },
                  { label: 'LinkedIn', link: 'https://linkedin.com' },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4">Let's Connect</h4>
              <p className="text-gray-400 text-sm mb-4">
                Ready to start your next project? Let's talk!
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left - Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center md:justify-start gap-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-gray-400 hover:text-blue-400 border border-white/10 hover:border-blue-400 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>

              {/* Right - Copyright */}
              <motion.div
                variants={itemVariants}
                className="text-center md:text-right text-sm text-gray-400"
              >
                <p>
                  © {currentYear} {portfolioData.name}. Made with{' '}
                  <motion.span
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block"
                  >
                    <FaHeart className="text-red-500 mx-1 inline" size={14} />
                  </motion.span>
                  using React & Tailwind.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center shadow-lg hover:shadow-blue-500/50 transition-all opacity-0 hover:opacity-100 pointer-events-none hover:pointer-events-auto z-40"
        id="scrollToTop"
      >
        ↑
      </motion.button>
    </footer>
  );
};

// Script to show/hide scroll to top button
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollToTop');
    if (btn) {
      btn.classList.toggle('opacity-100', window.scrollY > 500);
      btn.classList.toggle('opacity-0', window.scrollY <= 500);
    }
  });
}
