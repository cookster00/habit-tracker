import React, { useState } from 'react';

const AddHabitInput = ({ addHabit }) => {
  const [habitName, setHabitName] = useState('');

  const handleAddHabit = () => {
    if (habitName.trim()) {
      addHabit(habitName);
      setHabitName('');
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Add a new habit"
        className="p-2 border rounded w-full mb-2"
      />
      <button
        onClick={handleAddHabit}
        className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-500 transition"
      >
        Add Habit
      </button>
    </div>
  );
};

export default AddHabitInput;