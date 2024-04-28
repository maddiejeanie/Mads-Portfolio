import React from 'react';
import { About, Projects, Contact, GitHub, Nav, Tech } from '/src/components';

function App() {

  return (
    <div >  
       <svg class="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light" width="100%" height="100%"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch"></feTurbulence></filter><rect width="100%" height="100%" filter="url(#noise)"></rect></svg>
      <Nav />
      <div className="flex flex-col bg-gray-800 text-purple-200 p-4 my-16 ">
      
        <About  />
        <Tech/> 
        <Projects  />
        <Contact  />
        <GitHub  />
      </div>
    </div>
  );
}

export default App;
