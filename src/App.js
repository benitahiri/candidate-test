// src/App.js

import React from 'react';
import './App.css';
import BarChart from './components/BarChart'; // Importing the BarChart component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Bar Chart</h1>
        <BarChart apiUrl="https://django-dev.aakscience.com/candidate_test/fronted" /> 
        {/* Passing the API URL as a prop to the BarChart component */}
      </header>
    </div>
  );
}

export default App;
