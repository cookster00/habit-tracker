import React from 'react';

const Header = ({ toggleDarkMode }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Habit Tracker</h1>
      <button
        onClick={toggleDarkMode}
        className="bg-gray-200 dark:bg-gray-700 p-2 rounded"
      >
        Toggle Dark Mode
      </button>
    </header>
  );
};

export default Header;