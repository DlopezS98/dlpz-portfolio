import logo from './logo.svg';
import './App.css';
import HelloWorld from './hello-world/hello-world';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <HelloWorld />
      </header>
    </div>
  );
}

export default App;
