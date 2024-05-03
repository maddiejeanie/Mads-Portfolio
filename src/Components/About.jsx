import React from 'react';
function About({ isDarkMode }) {


  return (
    <div id="About" className={`scroll-mt-20 flex flex-col justify-between ${isDarkMode ? 'text-purple-200' : 'text-violet-900'}  p-8 space-y-4 sm:space-y-24 `}>
       <h3 className="h3 text-lg sm:text-3xl text-center">
ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM<br></br>
COPYRIGHT 2075-2077 ROBCO INDUSTRIES<br></br>
- Display 1 -
</h3>
    
          
        <div className="flex flex-col md:flex-row-reverse items-center">
        <img
className={`mx-auto w-60 h-60 cursor-pointer rounded-full border-4 ${isDarkMode ? 'border-purple-200' : 'border-violet-900'}`}
src={isDarkMode ? '/images/vault-v-300.png' : '/images/vault-v-900.png'}
              alt="yes, it's fallout themed"
              onMouseEnter={(e) => { e.currentTarget.src = '/images/madeleine-novak.jpg'; }}

              onMouseLeave={(e) => { e.currentTarget.src = isDarkMode ? '/images/vault-v-300.png' : '/images/vault-v-900.png'; }}
              />
       <div>
       <p className={`text-7xl h1 font-bold my-8 uppercase tracking-wide`}>
          &gt;Hi! I'm Maddie<span className="animate-ping font-black tracking-tighter">|</span>
          </p>
          <p className="text-2xl lg:text-4xl leading-relaxed mb-2">
            I'm a React Developer, passionate about building helpful, functional tech that makes life easier.
          </p>
        
          </div>
          
        </div>
        <p className="italic text-center md:text-left">
            I like coffee, futurology, gaming, live music, my two cats - Billy & BonBon, memes, learning new things.
          </p>
      
      <div className="flex self-center mb-8 text-center gap-10 pt-8">
        <a href="https://github.com/maddiejeanie" className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'} hover:text-purple-400 transition-colors duration-200 mr-4`}>
          <i className="fab fa-github fa-2x"></i>
          <p>github</p>
        </a>
        <a href="https://linkedin.com/madeleinenovak" className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'} hover:text-purple-400 transition-colors duration-200 mr-4`} > <i className="fab fa-linkedin fa-2x"></i>
          <p>linkedin</p>
        </a>
        <a href="/src/assets/data/maddie-novak-2024-resume.pdf" className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'} hover:text-purple-400 transition-colors duration-200 mr-4`}>
          <i className="fa fa-file-pdf-o fa-2x"></i>
          <p>resume pdf</p>
        </a>
      </div>
          </div>
    
  );

}

export default About;
