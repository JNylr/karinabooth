
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Philosophy />
      </main>
      <Footer />
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
    </div>
  );
};

export default App;
