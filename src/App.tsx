import React from 'react';
import AddOns from './AddOns/AddOns';
import './App.css';
import { Homepage } from './Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Homepage/>
      <AddOns/>
    </div>
  );
}

export default App;
