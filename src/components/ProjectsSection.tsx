import React, { useState } from 'react';
import './ProjectsSection.css';

interface Project {
  id: string;
  title: string;
  description: string;
  details: string;
  links?: { text: string; url: string }[];
  status: 'current' | 'completed' | 'learning';
  image?: string; // Optional 512x512 project thumbnail
}

interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  projects: Project[];
}

const ProjectsSection: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projectCategories: ProjectCategory[] = [
    {
      id: 'minecraft',
      title: 'Minecraft Development',
      description: 'Server plugins, anti-cheat systems, and game mechanics',
      projects: [
                 {
           id: 'pvpland',
           title: 'PvPLand (Current)',
           description: 'Minecraft Server development with 2FA system and cosmetics',
           details: 'Developed 2FA system for staff, new cosmetics (outfits, auras, kill effects), fixed bugs in their Discord bot, and worked on events.',
           links: [
             { text: 'Land 2FA Video', url: '#' },
             { text: 'Tornado KillEffect', url: '#' },
             { text: 'Thimble Event Demo', url: '#' }
           ],
           status: 'current'
         },
                 {
           id: 'elitebans',
           title: 'EliteBans',
           description: 'Full-featured punishment system',
           details: 'A powerful and customizable punishment system for Minecraft servers. Features ban system, mute system, warning system, and comprehensive punishment history management with GUI support.',
           links: [{ text: 'GitHub', url: 'https://github.com/tjzzzzzz/EliteBans' }],
           status: 'completed',
           image: '/images/EliteBans_512x512.png'
         },
                 {
           id: 'quantumac',
           title: 'QuantumAC',
           description: 'Modular Anti-Cheat system',
           details: 'Modular Anti-Cheat system with component-based checks.',
           links: [{ text: 'GitHub', url: 'https://github.com/tjzzzzzz/QuantumAC' }],
           status: 'completed'
         },
        
                 {
           id: 'survivalgames',
           title: 'Survival Games (SG)',
           description: 'Hobby project for me and my buddies',
           details: 'A fun hobby project created for me and my buddies. Simple but enjoyable survival games implementation.',
           links: [{ text: 'Showcase Video', url: '#' }],
           status: 'completed'
         },
                 {
           id: 'elitixfishing',
           title: 'ElitixFishing',
           description: 'MMO-inspired Fishing plugin',
           details: 'MMO-inspired Fishing plugin with depth and progression.',
           links: [{ text: 'Early Features Video', url: '#' }],
           status: 'completed'
         },
                   {
            id: 'lagscope',
            title: 'LagScope',
            description: 'Advanced Server Performance Monitoring & Optimization',
            details: 'Transform your server\'s performance with intelligent lag detection and automated mitigation. Advanced monitoring system that helps identify and resolve performance bottlenecks in real-time.',
            links: [{ text: 'BuiltByBit Resource', url: 'https://builtbybit.com/resources/lagscope-performance-monitoring.73513/' }],
            status: 'completed',
            image: '/images/LagScope_512x512.png'
          }
      ]
    },
    {
      id: 'gamedev',
      title: 'Game Development',
      description: 'FiveM servers, CS:GO modifications, and game remakes',
      projects: [
        {
          id: 'kymirp',
          title: 'KymiRP (FiveM)',
          description: 'Finnish FiveM server - #1 on leaderboards',
          details: 'Built from scratch over 10 months. #1 on Finnish FiveM leaderboards. Peaked at 140 concurrent players and generated €700/month. Sold due to military service. Still owns YouTube channel. Tebex account closed but logs are available on request.',
          status: 'completed'
        },
        {
          id: 'paulihvh',
          title: 'PauliHvH (CS:GO Server)',
          description: 'CS:GO HvH Server',
          details: 'Created in 2023, gained modest popularity in HvH scene.',
          status: 'completed'
        },
        {
          id: 'flappybird',
          title: 'Flappy Bird (C# Remake)',
          description: 'Fun remake of the classic',
          details: 'Fun remake of the classic.',
          status: 'learning'
        }
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'var(--primary-purple)';
      case 'completed': return '#10b981';
      case 'learning': return '#f59e0b';
      default: return 'var(--dark-gray)';
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

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-content fade-in">
          <h2 className="section-title">Projects</h2>
          <div className="project-categories">
            {projectCategories.map((category) => (
              <div key={category.id} className="project-category">
                                 <div 
                   className="category-header"
                   onClick={() => toggleCategory(category.id)}
                 >
                   <div className="category-title-section">
                     <h3 className="category-title">{category.title}</h3>
                     <span className="project-count">{category.projects.length} projects</span>
                   </div>
                   <p className="category-description">{category.description}</p>
                 </div>
                
                {expandedCategory === category.id && (
                  <div className="category-projects">
                    <div className="projects-grid">
                                             {category.projects.map((project) => (
                         <div key={project.id} className="project-card">
                           {project.image && (
                             <div className="project-image">
                               <img src={project.image} alt={project.title} />
                             </div>
                           )}
                           <div 
                             className="project-header"
                             onClick={() => toggleProject(project.id)}
                           >
                             <div className="project-title-section">
                               <h4 className="project-title">{project.title}</h4>
                               <span 
                                 className="project-status"
                                 style={{ backgroundColor: getStatusColor(project.status) }}
                               >
                                 {getStatusText(project.status)}
                               </span>
                             </div>
                             <p className="project-description">{project.description}</p>
                             <div className="project-toggle">
                               {expandedProject === project.id ? '−' : '+'}
                             </div>
                           </div>
                          
                          {expandedProject === project.id && (
                            <div className="project-details">
                              <p className="project-details-text">{project.details}</p>
                              {project.links && project.links.length > 0 && (
                                <div className="project-links">
                                  {project.links.map((link, index) => (
                                    <a
                                      key={index}
                                      href={link.url}
                                      className="project-link"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {link.text}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="projects-note fade-in">
            <p>
              Some projects aren't available due to data loss or privacy. I'm actively building new things!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 