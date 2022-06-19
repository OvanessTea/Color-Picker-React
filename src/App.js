import './App.css';
import React, {useState, useEffect} from 'react';
import {DataTableList} from "./components/DataTableList";
import {ColorPickerFrame} from "./components/ColorPickerFrame";
import { ContextProvider } from "./context";

function App() {
  const [ showColorPickerFrame, setShowColorPickerFrame ] = useState(false);

  const showColoPicker = () => {
    setShowColorPickerFrame(true);
  }
  const hideColoPicker = () => {
    setShowColorPickerFrame(false);
  }

  useEffect(() => {

  }, [showColorPickerFrame])
  

  return (
    <div className="app">
      <ContextProvider>
        <DataTableList showColoPicker={showColoPicker}/>
        {showColorPickerFrame ? <ColorPickerFrame hideColoPicker={hideColoPicker}/> : null}
      </ContextProvider>
    </div>
  );
}

export default App;
