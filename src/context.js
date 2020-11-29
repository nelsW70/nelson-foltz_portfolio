import React, { useContext } from 'react';
import data from './data.json';

const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const { links, cards } = data;

  return (
    <AppContext.Provider value={{ links, cards }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
