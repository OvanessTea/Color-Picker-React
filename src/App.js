import './App.css';
import React, {useState, useEffect} from 'react';
import {DataTableList} from "./components/DataTableList";
import {ColorPickerFrame} from "./components/ColorPickerFrame";
import { ContextProvider } from "./context";

function App() {
  const [ showColorPickerFrame, setShowColorPickerFrame ] = useState(false);

  const showColorPicker = () => {
    setShowColorPickerFrame(true);
  }
  const hideColorPicker = () => {
    setShowColorPickerFrame(false);
  }

  useEffect(() => {

  }, [showColorPickerFrame])
  

  return (
    <div className="app">
      <ContextProvider>
        <DataTableList showColorPicker={showColorPicker}/>
        {showColorPickerFrame ? <ColorPickerFrame hideColorPicker={hideColorPicker}/> : null}
      </ContextProvider>
    </div>
  );
}

export default App;
