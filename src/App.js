import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { Resume } from './components/Resume/Resume';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { DarkModeToggle } from './components/common/DarkModeToggle';

function App() {
  // Initialize dark mode hook (loads preference from localStorage)
  useDarkMode();

  return (
    <div className="bg-dark text-white overflow-hidden">
      <DarkModeToggle />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
