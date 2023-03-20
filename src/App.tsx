import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import Hello from './components/Hello'
import MouseTracker from './components/MouseTracker';
import LikeButton from './components/LikeButton';

import './App.css';

const App: React.FC = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <button onClick={() => {setShow(!show)}}>Toggle Tracker</button>
        </p>
        <Hello />
        <LikeButton />
        {/* {show && <MouseTracker />} */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
