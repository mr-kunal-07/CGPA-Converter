// src/App.jsx
import React from 'react';
import MarksToCGPAConverter from './MarksToCGPAConverter';
import './App.css';
import { FaSquareInstagram } from "react-icons/fa6";

const App = () => {
  return (
    <div className="App">
      <h5>This is made by student for the students of CSMU for converting their marks to CGPA</h5>
      <MarksToCGPAConverter />
      <div className="fot">
      <h5>Made by Kunal Jadhav <a className='link' href="https://www.instagram.com/_._kunaljadhav_._23/"><FaSquareInstagram className='icon'/>
      </a></h5>
      </div>
    </div>

  );
};

export default App;
