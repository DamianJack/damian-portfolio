import { about } from '../data/siteData';

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <h2>{about.heading}</h2>
      <div className="about-console">
        <div className="console-header">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="console-title">about.js</span>
        </div>
        <div className="console-body">
          <p>{about.description}</p>
          <p>{about.quickFacts}</p>
          <ul>
            {about.strengths.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
