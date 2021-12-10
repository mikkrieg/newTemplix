import React, { useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [onHome, setOnHome] = useState(false);
    const [onProject, setOnProject] = useState(false);
    const [onLayout, setOnLayout] = useState(false);
    
  return (
    <AppContext.Provider value=
    {{
      onHome, 
      setOnHome,
      onProject,
      setOnProject,
      onLayout,
      setOnLayout
      }}
    >
      {children}
    </AppContext.Provider>
  );
}