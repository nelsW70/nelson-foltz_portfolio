import React, { useContext } from 'react';
import data from './data.json';

const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const {
    header,
    routerLinks,
    links,
    resumeLinks,
    cards,
    resumeAbout,
    keySkills,
    education,
    projects,
    experience
  } = data;

  return (
    <AppContext.Provider
      value={{
        header,
        routerLinks,
        links,
        resumeLinks,
        cards,
        resumeAbout,
        keySkills,
        education,
        projects,
        experience
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
