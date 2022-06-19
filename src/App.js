import './App.css';
import {DataTableList} from "./components/DataTableList";
import {ColorPicker} from "./components/ColorPicker";

function App() {
  return (
    <div className="app">
      <DataTableList/>
      <ColorPicker/>
    </div>
  );
}

export default App;
