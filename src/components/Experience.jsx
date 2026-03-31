import { FaBriefcase, FaGraduationCap } from 'react-icons/fa6';
import { experienceItems } from '../data/siteData';

const Experience = () => (
  <section id="experience" className="section experience-section">
    <div className="container">
      <h2>Experience</h2>
      <div className="timeline">
        {experienceItems.map((item, idx) => (
          <article
            key={`${item.role}-${item.period}`}
            className={`timeline-card ${idx % 2 === 0 ? 'timeline-right' : 'timeline-left'}`}
          >
            <header className="timeline-card-header">
              <span className="timeline-card-icon">
                {item.type === 'education' ? <FaGraduationCap /> : <FaBriefcase />}
              </span>
              <h3>{item.role}</h3>
            </header>
            <p className="timeline-org">{item.org}</p>
            <p className="timeline-period">{item.period}</p>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
