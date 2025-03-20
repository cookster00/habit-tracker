import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HabitList from './components/HabitList';
import AddHabitInput from './components/AddHabitInput';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [habits, setHabits] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedHabits = JSON.parse(localStorage.getItem('habits')) || [];
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    setHabits(savedHabits);
    setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [habits, darkMode]);

  const addHabit = (name) => {
    setHabits([...habits, { name, completed: false, streak: 0 }]);
  };

  const toggleHabit = (index) => {
    const updatedHabits = habits.map((habit, i) => {
      if (i === index) {
        const updatedStreak = habit.completed ? habit.streak : habit.streak + 1;
        return { ...habit, completed: !habit.completed, streak: updatedStreak };
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  const removeHabit = (index) => {
    setHabits(habits.filter((_, i) => i !== index));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header toggleDarkMode={toggleDarkMode} />
      <AddHabitInput addHabit={addHabit} />
      <HabitList habits={habits} toggleHabit={toggleHabit} removeHabit={removeHabit} />
      <Footer />
    </div>
  );
};

export default App;
