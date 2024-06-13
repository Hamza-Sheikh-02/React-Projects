import React from 'react';
import { FaExternalLinkAlt, FaLinkedin, FaNpm, FaGithub } from 'react-icons/fa';

const Footer = ({ theme }) => {
  return (
    <footer className={`py-2 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-indigo-900 text-white'} text-center`}>
      <div className="container mx-auto">
        <h2 className="text-lg font-bold mb-2">Connect with me</h2>
        <div className="flex justify-center gap-4 mb-2">
          <a href="https://www.linkedin.com/in/hamza-sheikh-351766298/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-gray-400 transition-colors duration-300" />
          </a>
          <a href="https://www.npmjs.com/~hamzasheikh02" target="_blank" rel="noopener noreferrer">
            <FaNpm className="text-2xl hover:text-gray-400 transition-colors duration-300" />
          </a>
          <a href="https://github.com/Hamza-Sheikh-02" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400 transition-colors duration-300" />
          </a>
        </div>
        <p className="text-sm">&copy; 2024 Hamza Sheikh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
