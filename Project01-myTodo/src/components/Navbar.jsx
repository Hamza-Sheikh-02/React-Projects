import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className={`flex justify-between items-center py-3 px-6 shadow-md ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-indigo-900 text-white'}`}>
      <div className="logo">
        <span className='font-bold text-2xl'>myTodo</span>
      </div>
      <ul className="flex gap-8 items-center">
        <li className='cursor-pointer hover:font-bold transition-all duration-200'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-200'>Your Tasks</li>
        <li>
          <button
            onClick={toggleTheme}
            className={`relative inline-flex items-center h-6 w-14 rounded-full transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-yellow-400'
            }`}
          >
            <span
              className={`transform transition-transform duration-300 ease-in-out ${
                theme === 'dark' ? 'translate-x-8' : 'translate-x-1'
              } inline-block w-5 h-5 p-1 rounded-full bg-white`}
            >
              {theme === 'dark' ? <FaMoon className="text-gray-900" /> : <FaSun className="text-yellow-500" />}
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
