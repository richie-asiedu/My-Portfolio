import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  React.useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="navbar__logo"
          onSetActive={() => setActiveSection('home')}
        >
          <img src={logo} alt="Brand Logo" />
          <span className="navbar__brand-text">RICHDEV</span>
        </ScrollLink>
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--active' : ''}`}>
          {[
            { to: 'home', label: 'Home' },
            { to: 'about', label: 'About' },
            { to: 'skills', label: 'Skills' },
            { to: 'projects', label: 'Projects' },
            { to: 'contact', label: 'Contact' },
          ].map((item) => (
            <li key={item.to}>
              <ScrollLink
                to={item.to}
                spy={true}
                smooth={true}
                duration={400}
                offset={-195}
                className={
                  `navbar__link${activeSection === item.to ? ' navbar__link--active' : ''}`
                }
                activeClass="navbar__link--active"
                onSetActive={() => setActiveSection(item.to)}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`} onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
