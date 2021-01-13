import './App.css';
import Header from "./components/Header";
import ToolHeader from './components/ToolHeader';
import CornTool from './components/CornTool';

function App() {
  return (
    <div className="App">
      <Header />
      <ToolHeader title="Calculate the cost of a trip to market"/>

     <CornTool />

      <header className="App-header">
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
