import logo from './logo.svg';
import './App.css';
import ReactGA from "react-ga4";
import { useEffect } from 'react';

function App() {
    useEffect(() => {
      ReactGA.initialize("UA-275881285-1");
    },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>still on testing</p>
      </header>
    </div>
  );
}

export default App;
