import './Hero.css'
import profile from '../../assets/profile.png'

const Hero = () => {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <h1 className="hero__greeting">Hi, I'm <span className="hero__name">Richmond</span></h1>
        <h2 className="hero__title">
          <span className="hero__title-static">A </span>
          <span className="hero__title-animated">Frontend Developer</span>
        </h2>
        <p className="hero__desc">
          I craft beautiful, interactive, and high-performance web experiences.<br/>
          Passionate about modern UI, animations, and seamless user journeys.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="hero__cta" onClick={handleSmoothScroll}>View My Works</a>
        </div>
      </div>
      <div className="hero__image-wrapper">
        <img src={profile} alt="Profile" className="hero__image" />
      </div>
    </section>
  )
}

export default Hero
