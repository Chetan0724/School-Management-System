import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">School Management System</h3>
          <p className="text-sm">Empowering education through efficient management</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
          <ul className="text-sm space-y-1">
            <li><a href="https://facebook.com/schoolmanagementsystem" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">Facebook</a></li>
            <li><a href="https://twitter.com/schoolmgmtsys" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">Twitter</a></li>
            <li><a href="https://instagram.com/schoolmgmtsys" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">Instagram</a></li>
            <li><a href="https://linkedin.com/company/schoolmanagementsystem" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">LinkedIn</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <ul className="text-sm space-y-1">
            <li>123 Education Street, Learning City</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@schoolmanagementsystem.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4 text-sm">
        &copy; {new Date().getFullYear()} School Management System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
