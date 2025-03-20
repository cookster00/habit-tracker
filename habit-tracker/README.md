# Habit Tracker

This is a modern, visually appealing Habit Tracker built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. The app allows users to track their daily habits, manage streaks, and toggle between light and dark modes.

## Features

### 🌟 Core Features
- **Add Habits**: Quickly add new habits using the input field.
- **Edit Habits**: Double-click on a habit name to edit it inline.
- **Remove Habits**: Delete habits with a single click.
- **Mark Habits as Completed**: Toggle habits as completed for the day, which dynamically updates the streak count.

### 📊 Streak Tracking
- **Dynamic Streak Counter**: Displays a streak badge for each habit:
  - 🔥 Orange for short streaks (less than 5 days).
  - 💪 Gold for longer streaks (5 days or more).
- **Automatic Streak Updates**: Streaks increase or decrease based on daily completion.

### 🌓 Dark Mode
- **Light and Dark Themes**: Toggle between light and dark modes using the button in the header.
- **Persistent Theme**: The app remembers your theme preference across sessions.

### 🔍 Sorting
- **Sort by Streak**: Sort habits by the longest streak.
- **Sort Alphabetically**: Sort habits in alphabetical order.

### 🎨 UI/UX Enhancements
- **Responsive Design**: Fully responsive layout for desktop and mobile devices.
- **Hover Effects**: Buttons and cards have smooth hover animations.
- **Customizable Habit Cards**:
  - Rounded corners and soft shadows for a modern look.
  - Dynamic spacing to accommodate longer habit names.

### 💾 Data Persistence
- **Local Storage**: All habits and theme preferences are saved in `localStorage` to persist across page refreshes.

### 🎥 Animations
- **Smooth Animations**: Subtle animations for adding, editing, and removing habits using **Framer Motion**.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/cookster00/habit-tracker.git
   cd habit-tracker
   Install dependencies:

Start the development server:

Open the app in your browser at http://localhost:5173.

Technologies Used
    React: For building the user interface.
    Vite: For fast development and build tooling.
    Tailwind CSS: For styling and responsive design.
    Framer Motion: For animations.
    Local Storage: For data persistence.

Future Enhancements
Add a calendar view for tracking habits over time.
Implement notifications/reminders for incomplete habits.
Add user authentication for multi-device syncing.

Contributors:
    Nathan Cook


