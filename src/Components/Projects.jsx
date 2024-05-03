import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projectData } from '../assets/data/projectData.jsx';

function Projects({ isDarkMode }) {
  const settings = {
    dots: isDarkMode ? false : true,
    arrows: isDarkMode ? true : false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    accessibility:true,
    fade:true,

  };

  return (
    <div>
    <h2 className={`text-5xl h2 font-bold ${isDarkMode ? 'text-purple-200' : 'text-purple-800'} mb-4 uppercase tracking-wide text-shadow-lg text-shadow-pink-400`}>
    Projects </h2>
    <div id='Projects'  className="mx-auto">
      

          
      {projectData.map((project, index) => (
        <div key={index} >

          <div className="px-8 py-4 md:w-3/4 mx-auto">
          <h2 className="text-3xl font-bold mb-4 ">{project.name}</h2>
            <Slider {...settings}>
              {project.images.map((image, imageIndex) => (
                <div key={imageIndex} className="p-4">
                  <img
                    src={image}
                    alt={`Project ${project.name}`}
                    className="touch-auto mx-auto rounded-lg shadow-lg "
                  />
                </div>
              ))}
            </Slider>
          <p className="mt-8">{project.description}</p>
          <div className='flex flex-wrap my-2'>
  {project.tech.map((tag, techIndex) => (
    <span
      className="inline-block bg-gray-300 text-gray-800 my-2 py-1 px-4 rounded-full mx-2 font-mono align-middle"
      key={techIndex}
    >
      <i className="fa fa-tag pr-1" aria-hidden="true"></i>
      {tag}
    </span>
  ))}
</div>
          <div className="mt-4 flex justify-center text-center">
            <a
              className=" w-full bg-violet-500 hover:bg-violet-500/70 uppercase tracking-widest text-white py-2 px-4 rounded transition-colors duration-300 mr-4"
              href={project.link}
            >
              Live
            </a>
            <a
              className=" w-full bg-violet-500 hover:bg-violet-500/70 uppercase tracking-widest text-white py-2 px-4 rounded transition-colors duration-300"
              href={project.gitLink}
            >
              Code
            </a>
          </div>
          </div>

        </div>
      ))}
    </div>
    </div>
  );
};

export default Projects;