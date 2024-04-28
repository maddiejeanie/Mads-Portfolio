import React from 'react';
import Mode from './Mode';

function Nav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-around py-4 bg-gray-700 h1 text-3xl uppercase text-violet-300">
      <a href="#About">About</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
      <Mode />
    </div>
  );
}

export default Nav;