import './App.css';
import React, {useState, useEffect} from 'react';
import {DataTableList} from "./components/DataTableList";
import {ColorPickerFrame} from "./components/ColorPickerFrame";
import { ContextProvider } from "./context";

function App() {
  const [ showColorPickerFrame, setShowColorPickerFrame ] = useState(false);
  const [updatedColor, setUpdatedColor] = useState([{name: "", type: "main", color: "#fff"}, null]);

  const showColorPicker = () => {
    setShowColorPickerFrame(true);
    console.log(updatedColor)
  }
  const hideColorPicker = () => {
    setShowColorPickerFrame(false);
  }

  useEffect(() => {

  }, [showColorPickerFrame])
  

  return (
    <div className="app">
      <ContextProvider>
        <DataTableList showColorPicker={showColorPicker} updatedColor={updatedColor} setUpdatedColor={setUpdatedColor}/>
        {showColorPickerFrame ? <ColorPickerFrame 
          hideColorPicker={hideColorPicker} 
          updatedColor={updatedColor[0] ? updatedColor : null}
        /> : null}
      </ContextProvider>
    </div>
  );
}

export default App;
