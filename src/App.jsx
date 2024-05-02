import React from 'react';
import { About, Projects, Contact, Github, Nav, Tech } from './Components/Index.jsx';

function App() {

  return (
    <div className='bg-gray-800 bg-stripes'>  
    
      <Nav />
      <div className="sm:w-3/4 mx-auto flex flex-col  text-purple-200 p-4  scroll-snap-align-center pt-16 space-y-16">
      
        <About  />
        <Tech/> 
        <Projects  />
        <Contact  />

      </div>
    </div>
  );
}

export default App;
