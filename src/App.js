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
    </div>
  );
}

export default App;
