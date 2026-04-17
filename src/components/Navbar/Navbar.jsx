import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { navigationLinks, portfolioData } from "../../data/portfolioData";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // 🌙 Dark Mode Toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // ✅ FIXED smooth scroll with offset
  const handleScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);

    if (el) {
      const offset = 70;
      const top = el.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ top: 0, marginTop: 0 }}
      className="fixed inset-x-0 top-0 w-full z-[9999] glass-effect backdrop-blur-xl border-b border-gray-200 dark:border-white/10"
    > 
      <div ref={menuRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            whileHover={{ scale: 1.05 }}
            className="gradient-text font-bold text-xl md:text-2xl"
          >
            {portfolioData.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 ">
            {navigationLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-700 dark:text-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all"></span>
              </motion.a>
            ))}

            {/* CTA */}
            <motion.a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              whileHover={{ scale: 1.05 }}
              className="btn-primary"
            >
              Let's Connect
            </motion.a>
          </div>

          {/* Mobile Right Icons */}
          <div className="flex items-center gap-2 md:hidden">
            {/* 🌙 Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"></div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-40 md:hidden mt-2 pb-4 border-t border-gray-200 dark:border-white/10"
          >
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="block w-full mt-2 btn-primary text-center"
            >
              Let's Connect
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
