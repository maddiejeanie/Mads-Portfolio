import React from 'react';
import Mode from './Mode';

function Nav({ isDarkMode }) {
  const navClasses = `scroll-mt-20 border-transparent border-x-4 hover:border-violet-300 hover:border-solid p-4 -mb-1
  ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`;
  return (
    <div
      className={`pt-2 fixed top-0 left-0 right-0 z-50 h1 text-lg lg:text-3xl uppercase border-b-4 drop-shadow-2xl bg-opacity-90 ${
        isDarkMode ? 'text-violet-300 bg-gray-800' : 'text-violet-900 bg-gray-200'
      } border-violet-300`}
    >
      <div className='sm:w-2/3 mx-auto flex justify-around items-baseline'>
        <a className={`${navClasses}`} href="#About">
          Status
        </a>
        <a className={`${navClasses}`} href="#Tech">
          Tech
        </a>
        <a className={`${navClasses}`} href="#Projects">
          Projects
        </a>
        <a className={`${navClasses}`} href="#Contact">
          Comms
        </a>
        <Mode />
      </div>
    </div>
  );
}

export default Nav;