function Projects({ isDarkMode }) {
  return (
<div className={`Card Projects ${isDarkMode ? "Dark": null}`} id='Projects'>
      <h2>Projects</h2>

      <h3>Title of Project</h3>

      <img src="/images/map.png"></img>

      <button>link 1</button><button>link 2</button>
      </div>

  );
}

export default Projects;
