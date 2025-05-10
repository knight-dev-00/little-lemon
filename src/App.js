import React from 'react';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';

import Header from './comp/Header';
import Homepage from './comp/Main';
import Footer from './comp/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route exact path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
