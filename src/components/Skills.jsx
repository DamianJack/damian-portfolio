import { useMemo, useState } from 'react';
import { skillNodes, skillEdges } from '../data/siteData';

const Skills = () => {
  const defaultSkill = useMemo(
    () => skillNodes.find((node) => node.id === 'python-root') || skillNodes[0],
    []
  );
  const [activeSkill, setActiveSkill] = useState(defaultSkill);

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="skills-layout">
          <div className="skills-title-wrap">
            <h2>Skills</h2>
          </div>
          <div className="skills-graph">
            <div className="skills-highlight-card">
              <p className="skills-highlight-title">Skill : {activeSkill.label}</p>
              <p className="skills-highlight-level">Level : {activeSkill.level}%</p>
              <p className="skills-highlight-info">{activeSkill.description}</p>
              <p className="skills-highlight-details">{activeSkill.details}</p>
              <div className="skills-progress-track">
                <span
                  className="skills-progress-fill"
                  style={{ width: `${activeSkill.level}%` }}
                  aria-hidden="true"
                />
              </div>
            </div>

            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="skills-graph-svg">
              {skillEdges.map((edge) => {
                const fromNode = skillNodes.find((n) => n.id === edge.from);
                const toNode = skillNodes.find((n) => n.id === edge.to);
                if (!fromNode || !toNode) return null;
                const x1 = parseFloat(fromNode.x);
                const y1 = parseFloat(fromNode.y);
                const x2 = parseFloat(toNode.x);
                const y2 = parseFloat(toNode.y);
                return (
                  <line
                    key={`${edge.from}-${edge.to}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    className="skills-line"
                  />
                );
              })}
            </svg>

            {skillNodes.map((node) => {
              const SkillIcon = node.icon;
              return (
                <div
                  key={node.id}
                  className={`node ${node.id === 'python-root' ? 'center' : 'sub-node'}`}
                  style={{ left: node.x, top: node.y }}
                  tabIndex={0}
                  onMouseEnter={() => setActiveSkill(node)}
                  onFocus={() => setActiveSkill(node)}
                  role="button"
                  aria-label={`Show ${node.label} skill details`}
                >
                  <div className="node-content">
                    <span className="node-icon">
                      <SkillIcon />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
