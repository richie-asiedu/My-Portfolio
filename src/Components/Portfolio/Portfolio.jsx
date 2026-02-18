import "./Portfolio.css"
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import fooddelImage from "../../assets/fooddel.png"


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "ElectroMart Ghana - E-commerce Platform",
      description: "electroMart Ghana is a modern e-commerce platform designed to provide customers across Ghana with a seamless online shopping experience. Users can browse a wide range of electronics and home appliances, add items to cart, securely checkout, and track their orders. The platform includes user authentication, order management, product reviews, and multiple payment options including Paystack and Mobile Money. An integrated admin dashboard allows store managers to manage products, categories, inventory, orders, and customer data efficiently.",
      image: "https://www.electromart.com.gh/wp-content/uploads/2024/09/Nene-Photgraphy7681-scaled.jpg",
      live: "https://electromart-ghana-web-app.vercel.app",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Paystack API", "Cloudinary", "Vercel"]
    },
    {
      id: 2,
      title: "Church Website",
      description: "Welcome to C.A.C.I, a place of worship, faith, and fellowship. Our website provides members and visitors with easy access to service times, upcoming events, sermons, ministries, and community outreach programs. Whether you're looking to grow spiritually, connect with others, or watch sermons online, our platform offers a welcoming and user-friendly experience for everyone.",
      image: "https://www.newhollandwood.com/wp-content/uploads/2019/10/1-Monastery-of-the-Holy-Cross-Chicago.jpg",
      live: "https://caci-project.vercel.app",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "PayStack"]
    },
    {
      id: 3,
      title: "Airbnb Apartment Booking Platform",
      description: "This Airbnb-style apartment booking platform allows users to explore available short-term rental apartments, view detailed property details, check availability through an interactive calendar, and securely book stays online. Guests can create accounts, manage bookings, leave reviews, and make secure payments via Paystack, including card and Mobile Money options. Hosts have access to a dedicated dashboard to list properties, manage pricing, availability, and track reservations. The platform ensures a smooth and secure experience for both guests and property owners.",
      image: "https://euperspectives.eu/app/uploads/2025/06/airbnb-pixabay.jpg",
      live: "https://samj-prestige-court.vercel.app",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Paystack API", "Cloudinary", "Vercel"]
    },
    {
      id: 4,
      title: "Black Clothing Store",
      description: "Welcome to BLACKOUT, your ultimate destination for bold and timeless black fashion. From sleek streetwear and elegant formal pieces to everyday essentials, we specialize in all-black collections that redefine style and confidence. With a seamless shopping experience and a focus on premium quality, BLACKOUT makes it easy to shop your favorite black fits from the comfort of your home.",
      image: "https://s3-alpha.figma.com/hub/file/5999957204/dd434a82-8a1b-45b3-a5e0-84057a10ba17-cover.png",
      live: "https://black-clothing-store.vercel.app",
      tech: ["Next.Js", "Node.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Clerk", "Inngest"]
    },
    {
      id: 5,
      title: "Home Appliances E-commerce Platform",
      description: "Welcome to QuickCart, the ultimate destination for all your shopping needs. Whether you're looking for the latest tech gadgets, stylish fashion, home essentials, or unique gifts, we’ve got it all – and more. With a user-friendly shopping experience and a commitment to quality, we bring you a seamless way to shop, compare, and purchase from the comfort of your home.",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/7926e5220268597.Y3JvcCwxMzY2LDEwNjgsMCww.png",
      live: "https://quick-cart-silk-xi.vercel.app",
      tech: ["Next.js", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB", "Clerk", "Inngest"]
    },
    {
      id: 6,
      title: "Online Learning Platform",
      description: "An interactive online learning platform designed to help students gain in-demand skills through structured courses, video lessons, quizzes, and real-world projects. The platform connects learners with expert instructors, provides personalized progress tracking, and offers certifications to showcase achievements.",
      image: "https://cdn.unicaf.org/websites/unicaf/wp-content/uploads/2025/07/online-learning.png",
      live: "https://www.privatelearn.academy",
      tech: ["Next.js", "Auth.js", "TypeScript", "Sanity", "Shadcn/ui", "Tailwind CSS"]
    },
    {
      id: 7,
      title: "FoodDel Restaurant",
      description: "Welcome to FoodDel Restaurant, your go-to destination for delicious, freshly prepared meals. Whether you're craving local favorites, international dishes, quick bites, or gourmet options, we’ve got something for every taste. With an easy ordering experience and a commitment to quality, we bring you flavorful dishes, fast service, and the comfort of enjoying great food wherever you are.",
      image: fooddelImage,
      live: "https://food-del-mu-two.vercel.app",
      tech: ["Next.js", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB", "Clerk", "Inngest"]
    },
    {
      id: 8,
      title: "YC_Directory",
      description: "The Y Combinator (YC) startup directory is a useful resource for finding startup ideas by reviewing how successful companies concisely describe their core value proposition. The descriptions are typically short, specific statements of the problem the company is solving, who they are helping, and how their solution makes life better.",
      image: "https://shaheermansoor.com/static/images/projects/yc-directory-banner.png",
      live: "https://ycdirectory-gamma.vercel.app",
      tech: ["Next.js", "Auth.js", "TypeScript", "Sanity", "Shadcn/ui", "Tailwind CSS"]
    },
    {
      id: 9,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      github: "https://github.com/yourusername/portfolio-website",
      live: "https://my-portfolio-h81x.vercel.app",
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
