import React from 'react';

function About({ isDarkMode }) {
  return (
    <div id="About" className={`scroll-mt-20 flex flex-col justify-between ${isDarkMode ? 'text-purple-200' : 'text-violet-900'} p-8 space-y-4 sm:space-y-24`}>
      <h3 className="h3 text-lg sm:text-3xl text-center">
        ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM<br></br>
        COPYRIGHT 2075-2077 ROBCO INDUSTRIES<br></br>
        - Display 1 -
      </h3>

      <div className="flex flex-col md:flex-row-reverse items-center md:items-start p-4 gap-4">
        <div className="w-3/4 lg:w-1/2 flex justify-center self-center">
          <img
            className={`cursor-pointer rounded-full border-4 object-cover ${isDarkMode ? 'border-purple-200' : 'border-purple-800'}`}
            src={isDarkMode ? '/images/vault-v-300.png' : '/images/vault-v-900.png'}
            alt="yes, it's fallout themed"
            onMouseEnter={(e) => {
              e.currentTarget.src = '/images/madeleine-novak.jpg';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.src = isDarkMode ? '/images/vault-v-300.png' : '/images/vault-v-900.png';
            }}
            onTouchStart={(e) => {
              e.currentTarget.src = '/images/madeleine-novak.jpg';
            }}
            onTouchEnd={(e) => {
              e.currentTarget.src = isDarkMode ? '/images/vault-v-300.png' : '/images/vault-v-900.png';
            }}
          />
        </div>
        <div className="w-full">
          <p className={`h1 text-3xl md:text-4xl lg:text-5xl font-bold my-4 md:my-8 uppercase tracking-wide`}>
            &gt;Hi! I'm Maddie<span className="animate-ping font-black tracking-tighter">|</span>
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-2">
            I'm a React Developer, based in Sydney, Australia. I'm passionate about
            building helpful, functional tech that makes life easier.
          </p>
          <p className="italic md:text-left">
            I like coffee, futurology, pc gaming, live music, my two cats - Billy & BonBon, memes, learning new things.
          </p>

          <div className={`${isDarkMode ? 'text-purple-200' : 'text-violet-900'} max-w-xl rounded-lg mt-8`}>
  <p className="text-2xl font-semibold mb-4">I'm Currently Working On</p>
  <ul className="space-y-3">
    <li className={`${isDarkMode ? 'bg-gray-700' : 'bg-purple-100'} p-4 rounded-lg shadow`}>
      <p className="text-lg font-medium">Interning at Cardigan Studios</p>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Creating React based websites through Next.js with SanityCSS integrations.</p>
    </li>
    <li className={`${isDarkMode ? 'bg-gray-700' : 'bg-purple-100'} p-4 rounded-lg shadow`}>
      <p className="text-lg font-medium">Converting ClientCheckin</p>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Into a iOS and Android friendly app via React Native.</p>
    </li>
    <li className={`${isDarkMode ? 'bg-gray-700' : 'bg-purple-100'} p-4 rounded-lg shadow`}>
      <p className="text-lg font-medium">Wordpress Migration to Self Hosting</p>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Re-integrating theme, plugins, backing up media and content. Completed june</p>
    </li>
    <li className={`${isDarkMode ? 'bg-gray-700' : 'bg-purple-100'} p-4 rounded-lg shadow`}>
      <p className="text-lg font-medium">React Native Course</p>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>At Codeacademy. Completed june</p>
    </li>
  </ul>
</div>

        </div>
      </div>

      <div className="flex self-center text-center gap-10 pt-4">
        <a href="https://github.com/maddiejeanie" className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'} hover:text-purple-400 transition-colors duration-200 mr-4`}>
          <i className="fab fa-github fa-2x"></i>
          <p>github</p>
        </a>
        <a href="https://linkedin.com/in/maddienovak" className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'} hover:text-purple-400 transition-colors duration-200 mr-4`}>
          <i className="fab fa-linkedin fa-2x"></i>
          <p>linkedin</p>
        </a>
        <a href="/maddie-novak-2024-resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            download className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'} hover:text-purple-400 transition-colors duration-200 mr-4`}>
          <i className="fa fa-file-pdf-o fa-2x"></i>
          <p>resume pdf</p>
        </a>
      </div>
    </div>
  );
}

export default About;
