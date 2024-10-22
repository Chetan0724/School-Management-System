import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">School Management System</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
              <li><Link to="/login" className="hover:text-blue-200">Login</Link></li>
              <li><Link to="/signup" className="hover:text-blue-200">Signup</Link></li>
              <li><Link to="/about" className="hover:text-blue-200">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-200">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
