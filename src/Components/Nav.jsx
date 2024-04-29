import React from 'react';
import Mode from './Mode';

function Nav() {
  return (
    <div className="fixed bg-opacity-90 top-0 left-0 right-0 z-50 flex justify-around py-4 bg-gray-800 h1 text-3xl uppercase text-violet-300 drop-shadow-2xl">
      <a href="#About">Status</a>
      <a href="#Tech">Tech</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Comms</a>
      <Mode />
    </div>
  );
}

export default Nav;