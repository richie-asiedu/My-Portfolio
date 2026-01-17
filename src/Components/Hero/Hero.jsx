import './Hero.css'
import profile from '../../assets/profile.png'
import resume from '../../assets/Richmond_s_Resume.pdf'

const Hero = () => {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleDownload = async () => {
    const response = await fetch(resume);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Richmond_s_Resume.pdf";
    link.click();
    URL.revokeObjectURL(url);
  };
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <h1 className="hero__greeting">Hi, I'm <span className="hero__name">Richmond</span></h1>
        <h2 className="hero__title">
          <span className="hero__title-static">A </span>
          <span className="hero__title-animated">FullStack Engineer</span>
        </h2>
        <p className="hero__desc">
          I build scalable, high-performance full-stack web applications.<br />
          Passionate about clean architecture, modern interfaces, and seamless end-to-end user experiences.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="hero__cta" onClick={handleSmoothScroll}>View My Works</a>
          <button className="download-btn" onClick={handleDownload}>
            Download CV
          </button>
        </div>
      </div>
      <div className="hero__image-wrapper">
        <img src={profile} alt="Profile" className="hero__image" />
      </div>
    </section>
  )
}

export default Hero
