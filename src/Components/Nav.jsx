import React from 'react';
import Mode from './Mode';

function Nav() {
  return (
    <div className="sm:w-2/3 mx-auto fixed bg-opacity-90 top-0 left-0 right-0 z-50 flex justify-around pt-4 bg-gray-800 h1 text-3xl uppercase text-violet-300 drop-shadow-2xl border-b-4 border-violet-300">
      <a className="relative border-transparent border-x-4 hover:border-violet-300 hover:border-solid px-4 py-2 hover:-mb-1 bg-gray-800" href="#About">Status
        <span className="absolute left-0 bottom-0 w-full h-1 bg-gray-800 hover:bg-violet-300"></span>
      </a>
      <a className="border-transparent border-x-4 hover:border-violet-300 hover:border-solid px-4 py-2 hover:-mb-1 bg-gray-800" href="#Tech">Tech</a>
      <a className="border-transparent border-x-4 hover:border-violet-300 hover:border-solid px-4 py-2 hover:-mb-1 bg-gray-800" href="#Projects">Projects</a>
      <a className="border-transparent border-x-4 hover:border-violet-300 hover:border-solid px-4 py-2 hover:-mb-1  bg-gray-800" href="#Contact">Comms</a>
      <Mode />
    </div>
  );
}

export default Nav;
