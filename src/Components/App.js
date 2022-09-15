import React, {useState} from 'react';
import './App.css';
import PersianDate from './PersianDate';
import Weather from './Weather';
import { BgModeContext } from '../Context/BgModeContext';


function App() {
const [bgMode, setBgMode] = useState();

  return (
    <div className="App">
    <BgModeContext.Provider value={{bgMode,setBgMode}}>
     <PersianDate/>
     <Weather/>
    </BgModeContext.Provider>
    </div>
  );
}

export default App;
