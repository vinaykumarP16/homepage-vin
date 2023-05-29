import React from 'react';
import './App.css';
import { Homepage } from './Homepage/Homepage';
import { Deadlines } from './Deadlines/Deadlines';

function App() {
  return (
    <div className="App">
      <Homepage/>
      <h1 style={{color:'red'}}>You Can</h1>
      <h4>Achievements / Goals to be done by September</h4>
      <Deadlines/>
      <h1 style={{color:'red'}}>Believe</h1>
    </div>
  );
}

export default App;
