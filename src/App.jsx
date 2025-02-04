// src/App.jsx


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './Home'; 
import AddBook from './components/AddBook';
import './App.css'; // Import global styles

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
