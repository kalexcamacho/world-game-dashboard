import logo from './logo.svg';
import './App.scss';
import { ContextApp } from './context/ContextApp';
import { useContext } from 'react';

function App() {
  const {games} = useContext(ContextApp)
  console.log(games);
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
      </header>
    </div>
  );
}

export default App;
