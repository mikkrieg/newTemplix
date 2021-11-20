import React, { useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [onHome, setOnHome] = useState(false);
    const [onProject, setOnProject] = useState(false);


  return (
    <AppContext.Provider value=
    {{
      onHome, 
      setOnHome,
      onProject,
      setOnProject
      }}
    >
      {children}
    </AppContext.Provider>
  );
}