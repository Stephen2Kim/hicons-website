import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

// Import placeholder images - replace with actual project photos
// TODO: Replace these with actual project images
const projectPlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect width='800' height='500' fill='%23e0e0e0'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='%23999' text-anchor='middle' dy='.3em'%3EProject Photo%3C/text%3E%3C/svg%3E";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  // Project data array - Generic placeholders for layout demonstration
  const projects = [
    {
      id: 1,
      title: "Water Infrastructure Project",
      category: "water",
      description: "Professional water supply and distribution systems designed and constructed to meet modern standards and client specifications.",
      image: projectPlaceholder,
      year: "2023",
      client: "Client Name",
      status: "Sample Project"
    },
    {
      id: 2,
      title: "Road Construction Project",
      category: "roads",
      description: "Quality road construction and rehabilitation services delivering durable and safe transportation infrastructure.",
      image: projectPlaceholder,
      year: "2023",
      client: "Client Name",
      status: "Sample Project"
    },
    {
      id: 3,
      title: "Commercial Building Project",
      category: "buildings",
      description: "Modern commercial building construction with attention to quality, safety, and client requirements.",
      image: projectPlaceholder,
      year: "2023",
      client: "Client Name",
      status: "Sample Project"
    },
    {
      id: 4,
      title: "Drainage System Project",
      category: "drainage",
      description: "Comprehensive drainage solutions including storm water management and sewerage systems installation.",
      image: projectPlaceholder,
      year: "2023",
      client: "Client Name",
      status: "Sample Project"
    },
    {
      id: 5,
      title: "Residential Development",
      category: "buildings",
      description: "Quality residential construction projects designed to meet modern living standards and specifications.",
      image: projectPlaceholder,
      year: "2023",
      client: "Client Name",
      status: "Sample Project"
    },
    {
      id: 6,
      title: "Water Supply Installation",
      category: "water",
      description: "Professional water supply systems including borehole drilling and pipeline installation services.",
      image: projectPlaceholder,
      year: "2023",
      client: "Client Name",
      status: "Sample Project"
    },
    {
      id: 7,
      title: "Highway Development",
      category: "roads",
      description: "Professional road construction services including paving, drainage, and safety features implementation.",
      image: projectPlaceholder,
      year: "2023",
      client: "Client Name",
      status: "Sample Project"
    },
    {
      id: 8,
      title: "Institutional Building",
      category: "buildings",
      description: "Construction of institutional facilities with modern design and quality workmanship.",
      image: projectPlaceholder,
      year: "2023",
      client: "Client Name",
      status: "Sample Project"
    },
    {
      id: 9,
      title: "Sewerage Infrastructure",
      category: "drainage",
      description: "Modern sewerage and drainage systems designed and installed to meet environmental standards.",
      image: projectPlaceholder,
      year: "2023",
      client: "Client Name",
      status: "Sample Project"
    },
    {
      id: 10,
      title: "Infrastructure Development",
      category: "roads",
      description: "Quality infrastructure development including bridges, culverts, and access roads construction.",
      image: projectPlaceholder,
      year: "2023",
      client: "Client Name",
      status: "Sample Project"
    }
  ];

  // Filter projects by category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Close modal
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="projects-page-container">
      {/* Hero Section */}
      <section className="projects-hero-container">
        <div className="projects-hero-content">
          <h1 className="projects-hero-title">Our Project Portfolio</h1>
          <p className="projects-hero-subtitle">
            Showcasing Excellence in Construction & Civil Engineering
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="projects-filter-section">
        <div className="content-wrapper">
          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={filter === 'water' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('water')}
            >
              Water Infrastructure
            </button>
            <button 
              className={filter === 'roads' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('roads')}
            >
              Roads & Bridges
            </button>
            <button 
              className={filter === 'buildings' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('buildings')}
            >
              Buildings
            </button>
            <button 
              className={filter === 'drainage' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('drainage')}
            >
              Drainage Systems
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="content-wrapper">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span className="view-details">View Details</span>
                  </div>
                  <div className="project-status-badge">
                    {project.status}
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-category">{project.category.toUpperCase()}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta">
                    <span className="project-year">📅 {project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✖</button>
            <div className="modal-grid">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-details">
                <div className="modal-category">{selectedProject.category.toUpperCase()}</div>
                <h2>{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.description}</p>
                <div className="modal-info-grid">
                  <div className="modal-info-item">
                    <strong>Year:</strong>
                    <span>{selectedProject.year}</span>
                  </div>
                  <div className="modal-info-item">
                    <strong>Client:</strong>
                    <span>{selectedProject.client}</span>
                  </div>
                  <div className="modal-info-item">
                    <strong>Status:</strong>
                    <span className={`status-${selectedProject.status.toLowerCase().replace(' ', '-')}`}>
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="projects-cta-section">
        <div className="content-wrapper">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how HICONS can bring your construction vision to life</p>
            <button 
              className="cta-button"
              onClick={() => navigate('/contact')}
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;