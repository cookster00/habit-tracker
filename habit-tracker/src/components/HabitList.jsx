import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HabitList = ({ habits, toggleHabit, removeHabit, editHabit }) => {
  const [editingIndex, setEditingIndex] = React.useState(null);
  const [newName, setNewName] = React.useState('');

  const handleEdit = (index, name) => {
    setEditingIndex(index);
    setNewName(name);
  };

  const saveEdit = (index) => {
    editHabit(index, newName);
    setEditingIndex(null);
  };

  return (
    <ul className="mt-20 p-4 space-y-4">
      <AnimatePresence>
        {habits.map((habit, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full max-w-3xl mx-auto"
          >
            {editingIndex === index ? (
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="p-2 border rounded w-full"
              />
            ) : (
              <div className="flex-1 text-left pr-4"> {/* Added pr-4 for spacing */}
                <span
                  className={`text-gray-800 dark:text-gray-200 ${
                    habit.completed ? 'line-through opacity-50' : ''
                  }`}
                  onDoubleClick={() => handleEdit(index, habit.name)}
                >
                  {habit.name}
                </span>
              </div>
            )}
            <div className="flex items-center space-x-4">
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  habit.streak < 5
                    ? 'bg-orange-600 text-white'
                    : 'bg-yellow-500 text-white'
                }`}
              >
                {habit.streak < 5 ? '🔥' : '💪'} {habit.streak}-day streak
              </span>
              {editingIndex === index ? (
                <button
                  onClick={() => saveEdit(index)}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(index, habit.name)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => removeHabit(index)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
              >
                Remove
              </button>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default HabitList;