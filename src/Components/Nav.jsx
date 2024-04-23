import React from 'react';
import Mode from './Mode'; // Import the Mode component

function Nav() {
  return (
    <div className="sticky flex justify-around py-4 bg-gray-300">
      <a href="#About">About</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
      <Mode />
    </div>
  );
}

export default Nav;
