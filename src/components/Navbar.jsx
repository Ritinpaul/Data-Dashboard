import { Link } from 'react-router-dom';
import { FaHome, FaHeart, FaSearch } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';  // Import the ThemeToggle component

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Movie Dashboard</h1>
        <div className="flex space-x-4 items-center">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white flex items-center space-x-1">
                <FaHome /> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="text-white flex items-center space-x-1">
                <FaHeart /> <span>Favorites</span>
              </Link>
            </li>
            <li>
              <Link to="/search" className="text-white flex items-center space-x-1">
                <FaSearch /> <span>Search</span>
              </Link>
            </li>
          </ul>
          <ThemeToggle />  {/* Add the theme toggle button */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
