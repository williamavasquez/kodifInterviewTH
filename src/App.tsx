import React from 'react';
import { DataProvider } from './context/dataContext'
import { renderComponents } from './utils';
import "./App.css"


// ** Import of Data sample to test application With
// import data from '../jsonData/example.json'
import data from '../jsonData/screenshot.json'

function App() {
  return (
    <div className="App">
      <DataProvider>
        {renderComponents(data.views)}
      </DataProvider>
    </div>
  );
}

export default App;
