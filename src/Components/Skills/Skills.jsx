import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Database,
  Zap,
  Monitor,
  TrendingUp,
  Users,
  Target,
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="w-8 h-8" />,
      skills: [
        { name: "React", level: 95, color: "#61DAFB" },
        { name: "JavaScript", level: 90, color: "#F7DF1E" },
        { name: "TypeScript", level: 85, color: "#3178C6" },
        { name: "HTML/CSS", level: 95, color: "#E34F26" },
        { name: "Tailwind CSS", level: 80, color: "#06B6D4" },
        { name: "Next.js", level: 95, color: "#000000" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 78, color: "#339933" },
        { name: "Python", level: 15, color: "#3776AB" },
        { name: "Express.js", level: 45, color: "#000000" },
        { name: "MongoDB", level: 75, color: "#47A248" },
        { name: "PostgreSQL", level: 70, color: "#336791" },
        { name: "GraphQL", level: 70, color: "#E10098" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Zap className="w-8 h-8" />,
      skills: [
        { name: "Git", level: 92, color: "#F05032" },
        { name: "AWS", level: 75, color: "#FF9900" },
        { name: "Linux", level: 88, color: "#FCC624" },
        { name: "Vite", level: 90, color: "#646CFF" }
      ]
    }
  ];

  const experienceData = [
    {
      year: "2023 - Present",
      title: "Frontend Developer",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
      achievements: ["Reduced load times by 60%", "Reduced the times spent on developers by 73% by creating maintainable reusable components", "Worked with UX/UI design teams to improve existing web applications and increase conversion rates by 15%"]
    },
    {
      year: "2024 - Present",
      title: "Backend Developer",
      description: "I am a well-established Backend Developer with solid experience in building scalable, secure, and high-performance server-side applications.",
      achievements: [
        "Designed and implemented RESTful APIs using Node.js and Express.js",
        "Developed and managed efficient database schemas and optimized queries",
        "Built and maintained backend services with a focus on performance, security, and reliability"
      ]

    },
    {
      year: "2025 - Present",
      title: "Full Stack Developer",
      description: "I am a well-established Full-Stack Developer with experience building end-to-end web applications, delivering robust frontend interfaces and scalable backend systems.",
      achievements: [
        "Developed responsive and interactive user interfaces using modern frontend frameworks such as React",
        "Built and maintained backend services and APIs using Node.js and Express.js",
        "Designed and managed databases with a focus on performance and data integrity",
        "Implemented and consumed RESTful APIs to support full-stack application workflows",
        "Handled full-stack application architecture, deployment, and ongoing optimization"
      ]

    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  return (
    <div ref={containerRef} className="skills-container" id="skills">
      <motion.div
        className="skills-hero"
        style={{ y, opacity }}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            className="skill-category"
            variants={cardVariants}
          >
            <div className="category-header">
              <div className="category-icon">
                {category.icon}
              </div>
              <h3 className="category-title">{category.title}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  variants={itemVariants}
                  custom={skillIndex}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="progress-container">
                    <motion.div
                      className="progress-bar"
                      style={{ backgroundColor: skill.color }}
                      variants={progressVariants}
                      custom={skill.level}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="experience-section"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-year">{experience.year}</span>
                  <h3 className="timeline-title">{experience.title}</h3>
                  <span className="timeline-company">{experience.company}</span>
                </div>
                <p className="timeline-description">{experience.description}</p>
                <ul className="timeline-achievements">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1 + index * 0.2 + achievementIndex * 0.1 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="stats-section"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="stats-grid">
          <motion.div
            className="stat-card"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <TrendingUp className="stat-icon" />
            <div className="stat-content">
              <h3 className="stat-number">4+</h3>
              <p className="stat-label">Frontend Projects Completed</p>
            </div>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Users className="stat-icon" />
            <div className="stat-content">
              <h3 className="stat-number">4+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Target className="stat-icon" />
            <div className="stat-content">
              <h3 className="stat-number">3+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
