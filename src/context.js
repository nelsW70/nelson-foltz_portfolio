import React, { useContext } from 'react';

const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        links: [
          { id: 1, text: 'Eat breakfast', complete: false },
          { id: 2, text: 'Do laundry', complete: false },
          { id: 3, text: 'Finish project', complete: true }
        ],
        cards: [
          { id: 1, text: 'morning', complete: false },
          { id: 2, text: 'balls', complete: false },
          { id: 3, text: 'dogs', complete: true }
        ]
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
