import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    <button
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full focus:outline-none"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <FaMoon className="text-black" />
      ) : (
        <FaSun className="text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
