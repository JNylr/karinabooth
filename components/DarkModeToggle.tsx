
import React from 'react';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <button 
      onClick={onToggle}
      className="fixed bottom-10 right-10 w-14 h-14 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center shadow-2xl border border-zinc-200 dark:border-zinc-700 z-[100] transition-all duration-300 hover:scale-110 group"
      aria-label="Toggle Dark Mode"
    >
      <span className="material-symbols-outlined text-primary dark:text-white text-2xl group-hover:rotate-12 transition-transform">
        {isDarkMode ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
};

export default DarkModeToggle;
