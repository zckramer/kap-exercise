import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import Profile from './Profile/Profile';
const BASE_URL = "https://financialmodelingprep.com/api/v3/company/profile/AAPL"

function App() {

  // let data;
  // function getCompanyData () {
  //   fetch(`${BASE_URL}`)
  //   .then(res => res.json())
  //   .then(recipe => {
  //     data = recipe
  //   })
  //   return data
  // }
  return (
    <div className="App">
      <h1>Kapitus Code Exercise</h1>
      <h2>by Zack Kramer</h2>
      <div className="Profile Card">
        <Profile></Profile>
      </div>
    </div>
  );
}

export default App;