import React from 'react';
import './App.css';
import ProfilesList from './components/ProfilesList';

function App() {

  return (
    <div className="App">
      <h1>Kapitus Code Exercise</h1>
      <h2>by Zack Kramer</h2>
      <div className="Profiles">
        <ProfilesList />
      </div>
    </div>
  );
}

export default App;