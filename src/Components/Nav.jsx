import React from 'react';
import Mode from './Mode'; // Import the Mode component

function Nav({ isDarkMode, toggleDarkMode }) {
  return (
    <div className="Nav">
      <a href="#About">About</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
      <Mode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default Nav;
