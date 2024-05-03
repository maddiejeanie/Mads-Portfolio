import React from 'react';
import { About, Projects, Contact, Nav, Tech } from './Components/Index.jsx';
import { ModeProvider, DarkModeContext } from './Components/ModeContext.jsx';

function App() {
  return (
    <ModeProvider>
      <DarkModeContext.Consumer>
        {({ isDarkMode }) => (
          <div className={` ${isDarkMode ? 'bg-stripes bg-gray-800' : 'bg-violet-100'} `}>
            <Nav isDarkMode={isDarkMode} />
            <div className={`sm:w-2/3 mx-auto flex flex-col ${isDarkMode ? 'text-purple-200' : 'text-purple-800'} p-4 scroll-snap-align-center pt-16 space-y-16`}>
              <About isDarkMode={isDarkMode} />
              
              <Tech isDarkMode={isDarkMode} />
              <Projects isDarkMode={isDarkMode} />
              <Contact isDarkMode={isDarkMode} />
            </div>
          </div>
        )}
      </DarkModeContext.Consumer>
    </ModeProvider>
  );
}

export default App;