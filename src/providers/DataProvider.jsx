import React, { createContext, useContext } from 'react';
import * as db from '../lib/data/firebase/firestore';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const value = {
    // Pass all functions from our firestore module through the context
    ...db,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
