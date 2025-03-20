import React from 'react';

const HabitList = ({ habits, toggleHabit, removeHabit }) => {
  return (
    <ul className="p-4">
      {habits.map((habit, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-800 rounded mb-2"
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={habit.completed}
              onChange={() => toggleHabit(index)}
              className="mr-2"
            />
            <span className="text-gray-800 dark:text-gray-200">{habit.name}</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              🔥 {habit.streak}-day streak
            </span>
            <button
              onClick={() => removeHabit(index)}
              className="ml-4 text-red-500"
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HabitList;