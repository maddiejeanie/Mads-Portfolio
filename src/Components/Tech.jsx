import React from 'react';
import { FaReact, FaGit } from 'react-icons/fa';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiVite,
  SiFirebase,
  SiWordpress,
  SiKentico,
  SiAzuredevops,
  SiBabel,
  SiNodeDotJs, 
  SiJasmine,
  SiVercel,
  SiSanity,
  SiMui,
  SiNetlify,
  SiFigma,
  SiAdobexd,
} from 'react-icons/si';



function Tech({ isDarkMode }) {

  const IconLabel = ({ Icon, label }) => (
    <div className={`flex items-center space-x-2 mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
  
      <Icon className="text-2xl " />
      <span className=''>{label}</span>
    </div>
  );

  return (
    <div id="Tech" className="p-4 scroll-mt-20">
          <h2 className={`text-5xl h2 font-bold  ${isDarkMode ? 'text-purple-200' : 'text-purple-800'} mb-4 uppercase tracking-wide text-shadow-lg text-shadow-pink-400`}>
          Tech </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Programming Languages</h2>
          <IconLabel Icon={SiHtml5} label="HTML" />
          <IconLabel Icon={SiCss3} label="CSS" />
          <IconLabel Icon={SiJavascript} label="JavaScript" />
          <IconLabel Icon={SiTypescript} label="TypeScript" />
          <IconLabel Icon={SiPython} label="Python" />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Front / Back End Development</h2>
          <IconLabel Icon={FaReact} label="React.js" />
          <IconLabel Icon={SiTailwindcss} label="Tailwind CSS" />
          <IconLabel Icon={SiMui} label="Material UI Framework" />
          <IconLabel Icon={SiVite} label="Vite" />
          <IconLabel Icon={SiNodeDotJs} label="Node.js" />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Content Management Systems</h2>
          <IconLabel Icon={SiSanity} label="Sanity CMS" />
          <IconLabel Icon={SiWordpress} label="WordPress" />
          <IconLabel Icon={SiKentico} label="Kentico" />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Databases</h2>
          <IconLabel Icon={SiFirebase} label="Firebase Realtime" />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Version Control and Collaboration</h2>
          <IconLabel Icon={FaGit} label="Git" />
          <IconLabel Icon={SiAzuredevops} label="Azure DevOps" />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Build Tools and Testing</h2>
          <IconLabel Icon={SiBabel} label="Babel" />
          <IconLabel Icon={SiJasmine} label="Jasmine" />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Deployment and Hosting</h2>
          <IconLabel Icon={SiVercel} label="Vercel" />
          <IconLabel Icon={SiNetlify} label="Netlify" />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Design and Graphics</h2>
          <IconLabel Icon={SiFigma} label="Figma" />
          <IconLabel Icon={SiAdobexd} label="Adobe XD" />
        </div>
      </div>
    </div>
  );
}

export default Tech;