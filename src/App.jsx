import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
      <Hero />
      <Title Title="About Me" />
      <About />
      <Title Title="Skills & Experience" />
      <Skills />
      <Title Title="My Works" />
      <Portfolio />
      <Title Title="Take a coffee & Let's build something amazing" />
      <Contact />
      </div>
    </>
  )
}

export default App
