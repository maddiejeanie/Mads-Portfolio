import React, { useContext } from 'react';
import { DarkModeContext } from './ModeContext.jsx';

function ModeToggle() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="mode-toggle"
        className="hidden"
        onChange={toggleDarkMode}
        checked={isDarkMode}
      />
      <label
        htmlFor="mode-toggle"
        className="cursor-pointer transition-all duration-300 hover:scale-110"
      >
        <i
          className={`fas ${
            isDarkMode ? "fa-moon text-violet-300" : "fa-sun text-violet-600"
          } text-2xl`}
        ></i>
   
      </label>
    </div>
  );
}

export default ModeToggle;