import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDarkMode } from '../../hooks/useDarkMode';

export const DarkModeToggle = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 z-50 p-2 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 md:top-6 md:right-6 group"
      aria-label="Toggle dark mode"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <FaSun className="text-yellow-400 group-hover:rotate-45 transition-transform duration-500" size={20} />
      ) : (
        <FaMoon className="text-blue-600 group-hover:rotate-45 transition-transform duration-500" size={20} />
      )}
    </button>
  );
};

