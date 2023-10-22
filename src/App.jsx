import { About, Mode, Projects, Contact, Spotify, Map } from '/src/components';


function App() {

  return (
    <>
    <div className='nav'>
      <a href="#About">About</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
    </div>
    <div className="container">
      <About />
      <Map />
      <Mode />
      <Projects />
      <Contact />
      <Spotify />
      </div>
    </>
  )
}

export default App
