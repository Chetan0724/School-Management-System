import React from 'react';
import schoolImage from '../assets/school.jpg';

const Main = () => {
  return (
    <main className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Welcome to Our School Management System</h1>
        
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={schoolImage} alt="Our School" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Empowering Education Through Efficient Management</h2>
            <p className="mb-4">Our School Management System is designed to streamline administrative tasks, enhance communication, and improve the overall educational experience for students, teachers, and parents alike.</p>
            <p>With our user-friendly interface and comprehensive features, we aim to create a more connected and efficient learning environment.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">For Students</h3>
            <ul className="list-disc list-inside">
              <li>Access to course materials</li>
              <li>View grades and progress reports</li>
              <li>Communicate with teachers</li>
              <li>Manage assignments and deadlines</li>
            </ul>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">For Teachers</h3>
            <ul className="list-disc list-inside">
              <li>Manage class schedules</li>
              <li>Record and analyze student performance</li>
              <li>Create and distribute assignments</li>
              <li>Communicate with students and parents</li>
            </ul>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">For Parents</h3>
            <ul className="list-disc list-inside">
              <li>Track child&apos;s academic progress</li>
              <li>View attendance records</li>
              <li>Communicate with teachers</li>
              <li>Access school announcements</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
