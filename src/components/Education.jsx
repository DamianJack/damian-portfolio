import { FaGraduationCap } from 'react-icons/fa6';
import { educationItems } from '../data/siteData';

const Education = () => (
  <section id="education" className="section">
    <div className="container">
      <h2>Education</h2>
      <div className="timeline">
        {educationItems.map((item, idx) => (
          <article
            key={`${item.role}-${item.period}`}
            className={`timeline-card ${idx % 2 === 0 ? 'timeline-right' : 'timeline-left'}`}
          >
            <header className="timeline-card-header">
              <span className="timeline-card-icon">
                <FaGraduationCap />
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

export default Education;
