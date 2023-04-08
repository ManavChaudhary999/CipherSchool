import React from 'react'

import Header from "./components/Header";
import ProfileContainer from './components/ProfileContainer';
import {ThemeContext} from './components/ThemeProvider';

const App = () => {
  const {colorMode} = React.useContext(ThemeContext);

  React.useEffect(()=> {
    console.log(colorMode);
    document.body.className = colorMode;
  }, [colorMode]);

  return (
    <>
        <Header />
        <ProfileContainer />
    </>
  )
};

export default App;
