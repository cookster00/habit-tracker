import React from 'react';

const Footer = () => {
  return (
    <footer className="p-6 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 rounded-lg shadow-md mt-12">
      <p>Made with ❤️ using React and Tailwind CSS</p>
      <a
        href="https://github.com/cookster00/habit-tracker"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View on GitHub
      </a>
    </footer>
  );
};

export default Footer;