
function About({ isDarkMode }) {
  return (

        <div className={`Card About ${isDarkMode ? "Dark" : null}`} id='About'>
      <h2>Hi! I'm Mads</h2>
    <p>I'm a React Developer, passionate about building cool things that help people.</p>
    <p>email me at madeleine.vercoe at gmail.com</p>

    <p>I enjoy gaming, live music & my two cats - Billy & BonBon.</p>

    <div>
    <a href="https://github.com"><i className="fab fa-github"></i></a>
    <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
    <a href="https://discord.com"><i className="fab fa-discord"></i></a>
</div>
</div>

    );
}

export default About;
