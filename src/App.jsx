import React, { useContext } from 'react';
import {  About, Projects, Contact, Nav, Tech, ModeProvider, DarkModeContext } from './Components/Index.jsx';

function App() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={` ${isDarkMode ? 'bg-stripes bg-gray-800' : 'bg-violet-100'} `}>
      <Nav isDarkMode={isDarkMode} />
      <div className={`sm:w-3/4 lg:w-1/2 mx-auto flex flex-col p-4 scroll-snap-align-center pt-16 space-y-16 ${isDarkMode ? 'text-purple-200' : 'text-purple-800'}`}>
        <About isDarkMode={isDarkMode} />
        <Tech isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default () => (
  <ModeProvider>
    <App />
  </ModeProvider>
);
