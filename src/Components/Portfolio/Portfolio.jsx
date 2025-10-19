import "./Portfolio.css"
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Welcome to SHOP.CO, the ultimate destination for all your shopping needs. Whether you're looking for the latest tech gadgets, stylish fashion, home essentials, or unique gifts, we’ve got it all – and more. With a user-friendly shopping experience and a commitment to quality, we bring you a seamless way to shop, compare, and purchase from the comfort of your home.",
      image: "https://s3-alpha.figma.com/hub/file/5999957204/dd434a82-8a1b-45b3-a5e0-84057a10ba17-cover.png",
      github: "https://github.com/yourusername/ecommerce-platform",
      live: "https://e-commerce-six-ochre-98.vercel.app/",
      tech: ["React", "Node.js", "TypeScript"]
    },
    {
      id: 2,
      title: "E-commerce Platform 2",
      description: "Welcome to QuickCart, the ultimate destination for all your shopping needs. Whether you're looking for the latest tech gadgets, stylish fashion, home essentials, or unique gifts, we’ve got it all – and more. With a user-friendly shopping experience and a commitment to quality, we bring you a seamless way to shop, compare, and purchase from the comfort of your home.",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/7926e5220268597.Y3JvcCwxMzY2LDEwNjgsMCww.png",
      github: "https://github.com/yourusername/ecommerce-platform-2",
      live: "https://e-commerce-3zs1.vercel.app/",
      tech: ["Next.js", "JavaScript", "Tailwind CSS"]
    },
    {
      id: 3,
      title: "Weather Web App",
      description: "Welcome to The Weather App, your go-to source for accurate, real-time weather updates. Whether you're planning your day, preparing for an outdoor adventure, or just want to know when to grab your umbrella, we’ve got you covered with hyper-local forecasts, detailed reports, and easy-to-read weather insights.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      github: "https://richie-asiedu.github.io/Weather-App/",
      tech: ["JavaScript", "OpenWeather API", "Tailwind CSS"]
    },
    {
      id: 4,
      title: "Car Rentals Web App",
      description: "At Evans Rentals, we make traveling hassle-free with our wide range of reliable, affordable, and top-quality rental cars. Whether you're planning a weekend getaway, a business trip, or an adventurous road trip, we have the perfect vehicle to suit your needs. Our user-friendly platform allows you to easily browse, compare, and book cars online, ensuring a seamless rental experience from start to finish.",
      image: "https://www.figma.com/community/resource/ca22310e-769e-4216-8ff3-5a511c10560c/thumbnail",
      github: "https://richie-asiedu.github.io/Car-Rentals-Web-App/",
      tech: ["React.js", "Tailwind CSS", "Node.js",]
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      github: "https://github.com/yourusername/portfolio-website",
      live: "https://my-portfolio-h81x.vercel.app/",
      tech: ["React", "Framer Motion", "Styled Components", "Vite"]
    },
  ]

  return (
    <section className="portfolio-section" id="projects">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p className="portfolio-subtitle">
            Explore My Recent Projects And Creative Work
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link live-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
