import './About.css'

const About = () => {
  const logos = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  ];

  return (
    <div className='abt-container' id='about'>
      <div className='logo-carousel left-carousel'>
        <div className='carousel-track'>
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className='logo-item'>
              <img src={logo} alt="Technology Logo" />
            </div>
          ))}
        </div>
      </div>

      <div className='abt-content'>
        <div className='abt-desc'>
          <h1>Web Developer</h1>
          <p>
              I'm a passionate creative developer who believes in pushing
              the boundaries of what possible on the web. With a keen
              eye for design and a deep understanding of modern web technologies, I
              create digital experiences that are both beautiful and functional.<br></br> <br></br>
              My approach combines technical expertise with creative vision, resulting
              in projects that not only perform exceptionally but also engage users on a emotional level.
              I'm constantly exploring new technologies and techniques to stay at the forefront of web development.<br /> <br />
              If you're looking for someone who can bring innovative ideas to life and deliver seamless user experiences, let's connect and create something amazing together.
          </p>
        </div>
      </div>
      <div className='logo-carousel right-carousel'>
        <div className='carousel-track'>
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className='logo-item'>
              <img src={logo} alt="Technology Logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
