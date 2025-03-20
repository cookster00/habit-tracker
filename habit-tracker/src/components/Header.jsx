import React from 'react';

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md p-4 z-10 h-16">
      <div className="container mx-auto flex justify-between items-center h-full">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Habit Tracker</h1>
        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-lg shadow-md transition-all bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default Header;