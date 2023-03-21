import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import Hello from './components/Hello'
// import MouseTracker from './components/MouseTracker';
import LikeButton from './components/LikeButton';
import useMousePosition from './hooks/useMousePosition';
import useURLLoader from './hooks/useURLLoader';
import './App.css';

interface IShowResult {
message:string,
status:string
}

const App: React.FC = () => {
  const [show, setShow] = useState(true)
  const positions = useMousePosition()
  const [ data , loading ] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  const dogResult = data as IShowResult
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <button onClick={() => {setShow(!show)}}>Toggle Tracker</button>
        </p>
        <Hello />
        <p>X: {positions.x}, Y: {positions.y}</p>
        {loading ? <p>🐕 读取中</p> : <img src={dogResult && dogResult.message} alt=""/>}
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
