import React, { useState } from 'react';

const Login = () => {
  const [userType, setUserType] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', { userType, id, password });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Login to School Management System</h1>
      <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userType">
              I am a:
            </label>
            <select
              id="userType"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <option value="">Select user type</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          {userType && (
            <>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                  {userType.charAt(0).toUpperCase() + userType.slice(1)} ID:
                </label>
                <input
                  type="text"
                  id="id"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
