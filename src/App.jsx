import React from 'react';
import { About, Projects, Contact, Spotify, Map, GitHub, Nav, Tech } from '/src/components';

function App() {

  return (
    <div >  
      <div className="flex flex-col bg-gray-800">
      <Nav />
        <About  />
        <Tech/> 
        <Map  />
        <GitHub  />
        <Projects  />
        <Contact  />
        <Spotify  />
      </div>
    </div>
  );
}

export default App;
