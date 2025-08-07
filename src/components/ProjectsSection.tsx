import React from 'react';
import { useNavigate } from 'react-router-dom';
import TiltCard from './TiltCard';
import './ProjectsSection.css';
interface Project {
  id: string;
  title: string;
  description: string;
  details: string;
  links?: { text: string; url: string }[];
  status: 'current' | 'completed' | 'learning';
  image?: string;
  category?: string;
}
const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();
  const projects: Project[] = [
    {
      id: 'lagscope',
      title: 'LagScope',
      description: 'Advanced Server Performance Monitoring & Optimization',
      details: 'Transform your server\'s performance with intelligent lag detection and automated mitigation. Advanced monitoring system that helps identify and resolve performance bottlenecks in real-time.',
      links: [{ text: 'BuiltByBit Resource', url: 'https://builtbybit.com/resources/lagscope-performance-monitoring.73513/' }],
      status: 'completed',
      image: './images/projects/logos/lagscope-logo.png',
      category: 'Minecraft'
    }
  ];
  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'var(--current)';
      case 'completed': return 'var(--success)';
      case 'learning': return 'var(--warning)';
      default: return 'var(--text-muted)';
    }
  };
  const getStatusText = (status: string) => {
    switch (status) {
      case 'current': return 'Current';
      case 'completed': return 'Completed';
      case 'learning': return 'Learning';
      default: return 'Unknown';
    }
  };
  const groupedProjects = projects.reduce((acc, project) => {
    const category = project.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {} as Record<string, Project[]>);
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-content fade-in">
          <div className="section-title-wrapper">
            <h2 className="section-title">Projects</h2>
          </div>
          <p className="section-subtitle">
            A collection of my work across different technologies and platforms
          </p>
          <div className="projects-grid">
            {Object.entries(groupedProjects).map(([category, categoryProjects], categoryIndex) => (
              <div key={category} className="category-section">
                <h3 className="category-title">{category}</h3>
                <div className="projects-row">
                  {categoryProjects.map((project, projectIndex) => (
                    <TiltCard 
                      key={project.id}
                      maxTilt={12}
                      scale={1.03}
                      speed={600}
                    >
                      <div 
                        className="project-card"
                        data-project-id={project.id}
                        onClick={() => handleProjectClick(project.id)}
                        style={{
                          animationDelay: `${(categoryIndex * 0.2) + (projectIndex * 0.1)}s`
                        }}
                      >
                        <div className="project-header-section">
                          <div className="project-header-pattern" />
                          <div className="project-header-pattern" />
                          <div className="project-header-content">
                            <div className="project-header-main">
                              {project.image && (
                                <img 
                                  src={project.image} 
                                  alt={`${project.title} logo`}
                                  className="project-logo"
                                  loading="lazy"
                                />
                              )}
                              <div className="project-header-text">
                                <h4 className="project-title">{project.title}</h4>
                                <p className="project-description">{project.description}</p>
                                <span 
                                  className="project-status"
                                  style={{ backgroundColor: getStatusColor(project.status) }}
                                >
                                  {getStatusText(project.status)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="project-content-section">
                          <div className="project-content-pattern" />
                          <div className="project-content-pattern" />
                          <div className="project-content-main">
                            <p className="project-details">{project.details}</p>
                            {project.links && project.links.length > 0 && (
                              <div className="project-links">
                                {project.links.slice(0, 2).map((link, index) => (
                                  <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <span>{link.text}</span>
                                    <svg 
                                      width="12" 
                                      height="12" 
                                      viewBox="0 0 24 24" 
                                      fill="none" 
                                      stroke="currentColor" 
                                      strokeWidth="2"
                                      strokeLinecap="round" 
                                      strokeLinejoin="round"
                                    >
                                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                      <polyline points="15,3 21,3 21,9"/>
                                      <line x1="10" y1="14" x2="21" y2="3"/>
                                    </svg>
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection; 