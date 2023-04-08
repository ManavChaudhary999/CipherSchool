import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, setRawColorMode] = React.useState(()=> {
    const theme = window.localStorage.getItem('colorMode');
    if(!theme) return 'light';
    return theme;
  });

  function setColorMode(){
    if(colorMode === 'light'){
      setRawColorMode('dark');
      window.localStorage.setItem('colorMode', 'dark');
    }
    else {
      setRawColorMode('light');
      window.localStorage.setItem('colorMode', 'light');
    }
  }
  
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
