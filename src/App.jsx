import React from 'react';
import { About, Mode, Projects, Contact, Spotify, Map } from '/src/components';
import { useTheme } from './Components/ThemeContext'; // Import the custom useTheme hook

function App() {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Access the theme context

  return (
    <div>
      <div className='nav'>
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </div>
      <div className="container">
        <About isDarkMode={isDarkMode} />
        <Map isDarkMode={isDarkMode} />
        <Mode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <Spotify isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;
