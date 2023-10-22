import { Chip } from '@mui/material/'

function About() {
  return (

        <div className='Card About' id='About'>
      <h2>Hi! I'm Mads</h2>
    <p>I'm a React Developer, passionate about building cool things that help people.</p>
    <p>email me at madeleine.vercoe at gmail.com</p>
        
        <div>
        <Chip label="React" variant="outlined" />
        <Chip label="Javascript" variant="outlined"/>
        <Chip label="APIs" variant="outlined"/>
        <Chip label="Github" variant="outlined"/>
        </div>
        </div>
    );
}

export default About;
