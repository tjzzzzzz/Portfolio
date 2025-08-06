import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

interface Project {
  id: string;
  title: string;
  description: string;
  details: string;
  links?: { text: string; url: string }[];
  status: 'current' | 'completed' | 'learning';
  image?: string;        // Single project image
  category?: string;     // Optional category
}

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  // Simplified project data - matches ProjectsSection
  const projects: { [key: string]: Project } = {
    'pvpland': {
      id: 'pvpland',
      title: 'PvPLand',
      description: 'Minecraft Server development with 2FA system and cosmetics',
      details: 'Developed 2FA system for staff, new cosmetics (outfits, auras, kill effects), fixed bugs in their Discord bot, and worked on events.',
      links: [
        { text: 'Land 2FA Video', url: '#' },
        { text: 'Tornado KillEffect', url: '#' },
        { text: 'Thimble Event Demo', url: '#' }
      ],
      status: 'current',
      category: 'Minecraft'
    },
    'lagscope': {
      id: 'lagscope',
      title: 'LagScope',
      description: 'Advanced Server Performance Monitoring & Optimization',
      details: 'Transform your server\'s performance with intelligent lag detection and automated mitigation. Advanced monitoring system that helps identify and resolve performance bottlenecks in real-time.',
      links: [{ text: 'BuiltByBit Resource', url: 'https://builtbybit.com/resources/lagscope-performance-monitoring.73513/' }],
      status: 'completed',
      image: '/images/projects/logos/lagscope-logo.png',
      category: 'Minecraft'
    },
    'elitebans': {
      id: 'elitebans',
      title: 'EliteBans',
      description: 'Full-featured punishment system',
      details: 'A powerful and customizable punishment system for Minecraft servers. Features ban system, mute system, warning system, and comprehensive punishment history management with GUI support.',
      links: [{ text: 'GitHub', url: 'https://github.com/tjzzzzzz/EliteBans' }],
      status: 'completed',
      category: 'Minecraft'
    },
    'quantumac': {
      id: 'quantumac',
      title: 'QuantumAC',
      description: 'Modular Anti-Cheat system',
      details: 'Modular Anti-Cheat system with component-based checks.',
      links: [{ text: 'GitHub', url: 'https://github.com/tjzzzzzz/QuantumAC' }],
      status: 'completed',
      category: 'Minecraft'
    },
    'survivalgames': {
      id: 'survivalgames',
      title: 'Survival Games',
      description: 'Hobby project for me and my buddies',
      details: 'A fun hobby project created for me and my buddies. Simple but enjoyable survival games implementation.',
      links: [{ text: 'Showcase Video', url: '#' }],
      status: 'completed',
      category: 'Minecraft'
    },
    'elitixfishing': {
      id: 'elitixfishing',
      title: 'ElitixFishing',
      description: 'MMO-inspired Fishing plugin',
      details: 'MMO-inspired Fishing plugin with depth and progression.',
      links: [{ text: 'Early Features Video', url: '#' }],
      status: 'completed',
      category: 'Minecraft'
    },
    'kymirp': {
      id: 'kymirp',
      title: 'KymiRP',
      description: 'Finnish FiveM server - #1 on leaderboards',
      details: 'Built from scratch over 10 months. #1 on Finnish FiveM leaderboards. Peaked at 140 concurrent players and generated €700/month. Sold due to military service. Still owns YouTube channel. Tebex account closed but logs are available on request.',
      status: 'completed',
      category: 'Game Development'
    },
    'paulihvh': {
      id: 'paulihvh',
      title: 'PauliHvH',
      description: 'CS:GO HvH Server',
      details: 'Created in 2023, gained modest popularity in HvH scene.',
      status: 'completed',
      category: 'Game Development'
    },
    'flappybird': {
      id: 'flappybird',
      title: 'Flappy Bird',
      description: 'Fun remake of the classic',
      details: 'Fun remake of the classic.',
      status: 'learning',
      category: 'Game Development'
    }
  };

  const project = projectId ? projects[projectId] : null;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

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

  const handleBackToProjects = () => {
    navigate('/', { replace: true });
    // Scroll to projects section after navigation
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: 'var(--bg-secondary)', 
        padding: '2rem 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ 
          maxWidth: '600px', 
          textAlign: 'center',
          backgroundColor: 'var(--bg-primary)',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border-color)'
        }}>
          <h1 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Project Not Found</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>The project you're looking for doesn't exist.</p>
                      <button 
              onClick={handleBackToProjects} 
              className="btn btn-primary"
            >
              ← Back to Projects
            </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'var(--bg-secondary)', 
      padding: '2rem 0'
    }}>
      <div className="container">
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          backgroundColor: 'var(--bg-primary)',
          borderRadius: '1rem',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border-color)',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{ 
            padding: '2rem',
            borderBottom: '1px solid var(--border-color)',
            background: 'var(--purple-gradient)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              pointerEvents: 'none'
            }} />
            <button 
              onClick={handleBackToProjects} 
              className="btn btn-secondary"
              style={{ marginBottom: '1.5rem' }}
            >
              ← Back to Projects
            </button>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.5rem',
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 1
            }}>
              {project.image && (
                <img 
                  src={project.image} 
                  alt={`${project.title} logo`}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '1rem',
                    objectFit: 'cover',
                    boxShadow: 'var(--shadow)'
                  }}
                />
              )}
              
              <div style={{ flex: '1', minWidth: '0' }}>
                <h1 style={{ 
                  fontSize: '2.5rem', 
                  color: 'white', 
                  margin: '0 0 0.5rem 0',
                  lineHeight: '1.2',
                  fontWeight: '700',
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                  {project.title}
                </h1>
                <p style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: '1.2rem', 
                  margin: '0 0 1rem 0',
                  fontWeight: '500'
                }}>
                  {project.description}
                </p>
                <span style={{ 
                  backgroundColor: 'rgba(255,255,255,0.2)', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '1rem', 
                  fontSize: '0.875rem', 
                  fontWeight: '700', 
                  color: 'white', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.5px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}>
                  {getStatusText(project.status)}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ 
            padding: '2rem',
            background: 'var(--bg-primary)',
            position: 'relative'
          }}>
            {/* Subtle background pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 80% 20%, var(--primary-purple-light) 0%, transparent 50%)',
              opacity: 0.03,
              pointerEvents: 'none'
            }} />
            <div style={{ 
              marginBottom: '2rem',
              position: 'relative',
              zIndex: 1
            }}>
              <h2 style={{ 
                color: 'var(--text-primary)', 
                fontSize: '1.75rem', 
                margin: '0 0 1rem 0',
                fontWeight: '700'
              }}>
                About this Project
              </h2>
              <p style={{ 
                color: 'var(--text-secondary)', 
                lineHeight: '1.8', 
                fontSize: '1.1rem', 
                margin: '0',
                fontWeight: '500'
              }}>
                {project.details}
              </p>
            </div>

            {/* Links */}
            {project.links && project.links.length > 0 && (
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ 
                  color: 'var(--text-primary)', 
                  fontSize: '1.75rem', 
                  margin: '0 0 1rem 0',
                  fontWeight: '700'
                }}>
                  Links & Resources
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animation: 'fadeInUp 0.6s ease forwards'
                      }}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 