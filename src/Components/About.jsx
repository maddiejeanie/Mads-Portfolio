import React from 'react';
import {Github} from './Github';
function About() {
  return (
    <div id="About" className="flex flex-col justify-between p-8">
         <p className="h3 text-2xl text-center">
ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM<br></br>
COPYRIGHT 2075-2077 ROBCO INDUSTRIES
</p>
        <div className="md:w-1/2 md:mb-0">
          
          <div className="relative">
            <div className="h-64 w-64 rounded-full mx-auto bg-violet-100"></div>
            <img
              className="absolute top-0 left-0 right-0 bottom-0 mx-auto rounded-full w-60 h-60 object-cover drop-shadow-2xl shadow-2xl  shadow-violet-100	  transparent"
              src="/images/vault-m.png"
              alt="yes, it's fallout themed"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col md:items-start">
       
          <p className="text-7xl h1 font-bold text-purple-200 mb-4 uppercase tracking-wide 	">
          &gt;Hi! I'm Maddie<span className="animate-ping font-black tracking-tighter">|</span>
          </p>
          <p className="text-4xl leading-relaxed mb-2">
            I'm a React Developer, passionate about building helpful, functional tech that makes life easier.
          </p>
          <p className="text-gray-100 font-mono mb-2">email me at madeleinejnovak@gmail.com</p>
          <p className="italic text-center md:text-left">
            I like coffee, futurology, gaming, live music, my two cats - Billy & BonBon, memes, learning new things. Learn more:
          </p>
        </div>
      
      <div className="flex self-center mb-8 text-center gap-10 pt-8">
        <a href="https://github.com/maddiejeanie" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 mr-4">
          <i className="fab fa-github fa-2x"></i>
          <p>github</p>
        </a>
        <a href="https://linkedin.com/madeleinenovak" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
          <i className="fab fa-linkedin fa-2x"></i>
          <p>linkedin</p>
        </a>
        <a href="/src/assets/data/maddie-novak-2024-resume.pdf" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
          <i className="fa fa-file-pdf-o fa-2x"></i>
          <p>resume pdf</p>
        </a>
      </div>
    </div>
    
  );
}

export default About;
