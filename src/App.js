import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey!
        </p>
        <a
          className="App-link"
          href="https://sfeug.connpass.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sendai Frontend User Group
        </a>
      </header>
    </div>
  );
}

export default App;
