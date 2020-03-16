import React from 'react';
import './App.css';
import Card from './Card/Card';
import Header from './Header/Header';

function App() {

  return (
    <div className="App">
      <h1>Kapitus Code Exercise</h1>
      <h2>by Zack Kramer</h2>
      <div className="Profile Card">
        <Header />
      </div>
    </div>
  );
}

export default App;