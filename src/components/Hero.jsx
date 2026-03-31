import { hero } from '../data/siteData';
import profilePortrait from '../data/damian-profile.png';

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
        <div className="hero-visual-grid">
          <div
            className="hero-visual-art"
            aria-hidden="true"
            style={{ backgroundImage: `url(${profilePortrait})` }}
          />
          <div className="card">
            <h3>{hero.featured.title}</h3>
            <p>{hero.featured.description}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
