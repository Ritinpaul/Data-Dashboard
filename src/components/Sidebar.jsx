import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaHeart, FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-blue-600 p-4 fixed top-0 left-0 w-full flex justify-between items-center z-10 md:hidden">
        <h1 className="text-white text-2xl font-bold">Movie Dashboard</h1>
        <button onClick={toggleSidebar}>
          {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-blue-600 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <ul className="flex flex-col space-y-6 mt-20 text-white">
          <li>
            <Link to="/" className="flex items-center space-x-2" onClick={toggleSidebar}>
              <FaHome /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="flex items-center space-x-2" onClick={toggleSidebar}>
              <FaHeart /> <span>Favorites</span>
            </Link>
          </li>
          <li>
            <Link to="/search" className="flex items-center space-x-2" onClick={toggleSidebar}>
              <FaSearch /> <span>Search</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
