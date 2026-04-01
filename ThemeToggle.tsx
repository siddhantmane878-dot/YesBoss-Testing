import React, { useState, useEffect } from 'react';

/**
 * Task: Create a Theme Toggle component that persists to localStorage.
 */
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      if (typeof document !== 'undefined') {
        document.body.classList.add('dark-mode');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    }
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded border transition-colors duration-200">
      {isDark ? '🌙 Switch to Light' : '☀️ Switch to Dark'}
    </button>
  );
};

export default ThemeToggle;
