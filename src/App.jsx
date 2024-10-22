import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Components/About';
import Contact from './Components/Contact';
import Main from './Components/Main';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Main />
        <Footer />
      </div>
    </Router>
  )
}

export default App