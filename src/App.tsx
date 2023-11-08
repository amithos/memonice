import React from 'react';
import logo from './memonice_3.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {"MEMONICE".split("").map((letter) => <span className='titler'>{letter}</span>)}
        </p>
      </header>
    </div>
  );
}

export default App;
