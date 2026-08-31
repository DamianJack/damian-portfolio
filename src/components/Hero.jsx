import { hero } from '../data/siteData';
import profilePortrait from '../data/damian-profile.jpeg';

const Hero = () => (
  <section id="home" className="section hero">
    <div className="container hero-grid">
      <div className="hero-text">
        <p className="pretitle">{hero.pretitle}</p>
        <h1>{hero.title}</h1>
        {hero.description ? <p>{hero.description}</p> : null}
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            {hero.primaryLabel}
          </a>
          <a className="btn btn-secondary" href="#contact">
            {hero.secondaryLabel}
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <figure className="hero-portrait">
          <img src={profilePortrait} alt="Damian" className="hero-portrait-img" />
          <figcaption className="hero-portrait-name">Damian</figcaption>
        </figure>
      </div>
    </div>
  </section>
);

export default Hero;
