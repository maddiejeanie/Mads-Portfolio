import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projectData } from '../assets/data/projectData.jsx';

const Projects = () => {
  const settings = {
    dots: true,
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
    <h2 className="text-5xl h2 font-bold text-purple-200 mb-4 uppercase tracking-wide text-shadow-lg text-shadow-pink-400">
    Projects </h2>
    <div id='Projects'  className="mx-auto">
      

          
      {projectData.map((project, index) => (
        <div key={index} >

          <div className="px-8 py-4">
          <h2 className="text-3xl font-bold mb-4 ">{project.name}</h2>
            <Slider {...settings}>
              {project.images.map((image, imageIndex) => (
                <div key={imageIndex} className="p-4">
                  <img
                    src={image}
                    alt={`Project ${project.name}`}
                    className="mx-auto rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          
          <p className="mt-8">{project.description}</p>
          <div className="mt-4 flex justify-center">
            <a
              className="bg-violet-500 hover:bg-violet-600 uppercase tracking-widest text-white py-2 px-4 rounded transition-colors duration-300 mr-4"
              href={project.link}
            >
              Live
            </a>
            <a
              className="bg-violet-500 hover:bg-violet-600 uppercase tracking-widest text-white py-2 px-4 rounded transition-colors duration-300"
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