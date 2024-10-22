import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Contact Us</h1>
      <div className="max-w-3xl mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <p className="text-gray-700 mb-6">
          We would love to hear from you! If you have any questions, feedback, or inquiries about our School Management System, please feel free to reach out to us.
        </p>
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Get in Touch</h2>
        <ul className="text-gray-700 mb-6">
          <li><strong>Address:</strong> 123 Education Street, Learning City</li>
          <li><strong>Phone:</strong> (123) 456-7890</li>
          <li><strong>Email:</strong> <a href="mailto:info@schoolmanagementsystem.com" className="text-blue-600 hover:underline">info@schoolmanagementsystem.com</a></li>
        </ul>
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Follow Us</h2>
        <p className="text-gray-700 mb-6">
          Stay connected with us on social media for the latest updates and news:
        </p>
        <ul className="text-sm space-y-1">
          <li><a href="https://facebook.com/schoolmanagementsystem" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a></li>
          <li><a href="https://twitter.com/schoolmgmtsys" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Twitter</a></li>
          <li><a href="https://instagram.com/schoolmgmtsys" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Instagram</a></li>
          <li><a href="https://linkedin.com/company/schoolmanagementsystem" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;

