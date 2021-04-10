import React from 'react';
import Homepage from './pages/homepage/homepage.pages';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
