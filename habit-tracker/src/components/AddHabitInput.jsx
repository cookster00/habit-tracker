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
    <div className="p-4">
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Add a new habit"
        className="p-2 border rounded w-full"
      />
      <button
        onClick={handleAddHabit}
        className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
      >
        Add Habit
      </button>
    </div>
  );
};

export default AddHabitInput;