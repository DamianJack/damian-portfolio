import { projectItems } from '../data/siteData';

const Projects = () => (
  <section id="projects" className="section section-alt">
    <div className="container">
      <h2>Projects</h2>
      <div className="cards-grid">
        {projectItems.map(({ title, description, tags }) => (
          <article key={title} className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
              {tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
