import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">About Our School Management System</h1>
      <div className="max-w-3xl mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <p className="text-gray-700 mb-6">
          Welcome to our School Management System, a comprehensive platform designed to streamline educational processes and enhance communication between students, parents, and teachers.
        </p>
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          Our mission is to provide an efficient and user-friendly system that simplifies administrative tasks, facilitates learning, and fosters a collaborative educational environment.
        </p>
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Secure login for students, parents, and teachers</li>
          <li>Easy-to-use dashboard for each user type</li>
          <li>Real-time grade tracking and reporting</li>
          <li>Attendance management</li>
          <li>Communication tools for parents and teachers</li>
          <li>Resource sharing and assignment submission</li>
        </ul>
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Team</h2>
        <p className="text-gray-700 mb-6">
          Our dedicated team of educators, administrators, and software developers work tirelessly to ensure that our School Management System meets the evolving needs of modern education.
        </p>
        <div className="text-center">
          <a href="/contact" className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
