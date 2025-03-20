import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HabitList from './components/HabitList.jsx';
import AddHabitInput from './components/AddHabitInput';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [habits, setHabits] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Load habits and dark mode state from localStorage on initial render
  useEffect(() => {
    const savedHabits = JSON.parse(localStorage.getItem('habits')) || [];
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    setHabits(savedHabits);
    setDarkMode(savedDarkMode);
  }, []);

  // Save habits and dark mode state to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const addHabit = (name) => {
    setHabits([...habits, { name, completed: false, streak: 0 }]);
  };

  const toggleHabit = (index) => {
    const updatedHabits = habits.map((habit, i) => {
      if (i === index) {
        const updatedStreak = habit.completed ? habit.streak - 1 : habit.streak + 1;
        return { ...habit, completed: !habit.completed, streak: Math.max(updatedStreak, 0) };
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  const removeHabit = (index) => {
    setHabits(habits.filter((_, i) => i !== index));
  };

  const editHabit = (index, newName) => {
    const updatedHabits = habits.map((habit, i) =>
      i === index ? { ...habit, name: newName } : habit
    );
    setHabits(updatedHabits);
  };

  const sortHabits = (criteria) => {
    const sortedHabits = [...habits].sort((a, b) => {
      if (criteria === 'streak') return b.streak - a.streak;
      if (criteria === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
    setHabits(sortedHabits);
  };

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 pt-16 max-w-4xl">
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className="mt-12">
          <AddHabitInput addHabit={addHabit} />
        </div>
        <div className="flex space-x-4 mb-4 mt-6">
          <button onClick={() => sortHabits('streak')} className="px-4 py-2 bg-blue-500 text-white rounded">
            Sort by Streak
          </button>
          <button onClick={() => sortHabits('name')} className="px-4 py-2 bg-blue-500 text-white rounded">
            Sort Alphabetically
          </button>
        </div>
        <HabitList
          habits={habits}
          toggleHabit={toggleHabit}
          removeHabit={removeHabit}
          editHabit={editHabit}
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;
