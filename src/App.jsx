import React from 'react';
import { About, Projects, Contact, Spotify, Map, GitHub, Nav, Tech } from '/src/components';
import { useTheme } from './Components/ThemeContext'; // Import the custom useTheme hook

function App() {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Access the theme context

  return (
    <div >  
      <div className="container">
      <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Tech isDarkMode = {isDarkMode} /> 
        <Map isDarkMode={isDarkMode} />
        <GitHub isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <Spotify isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;
