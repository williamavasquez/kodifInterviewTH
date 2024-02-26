import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [appData, setAppData] = useState({});

  return (
    <DataContext.Provider value={{ x, setx }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
