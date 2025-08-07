import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import GlobalBackground from './components/GlobalBackground';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
function AppContent() {
  const location = useLocation();
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-up, .scale-in, .stagger-item');
    fadeElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);
  return (
    <div className="App">
      <GlobalBackground />
      <ScrollToTop />
      <ThemeToggle />
      <Routes>
        <Route path="/" element={
          <div key="home-page">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </div>
        } />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="*" element={
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <button onClick={() => window.location.href = '/'} style={{ 
              padding: '0.5rem 1rem', 
              background: 'var(--primary-purple)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}>
              Go Home
            </button>
          </div>
        } />
      </Routes>
    </div>
  );
}
function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
export default App; 