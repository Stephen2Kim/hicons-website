import React from 'react';
import { useNavigate } from 'react-router-dom';
import Excecution from '../assets/images/execution.jpeg';
import InnovativeDesign from '../assets/images/innovativedesign.jpeg';
import QualityConstruction from '../assets/images/qualityconstruction.jpg';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Container 1: Hero Section with Background Image & Navbar */}
      <section className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to HICONS Services Limited</h1>
          <p className="hero-subtitle">Your trusted construction company since 2016</p>
        </div>
      </section>

      {/* Container 2: About Section (Words) */}
      <section className="container about-container">
        <div className="content-wrapper">
          <h2>About Us</h2>
          <p>
            HICONS Services Limited has a proud tradition of service as a General Contractor since 2016.
            Headquartered in Nairobi, we deliver construction projects with excellence, on schedule, and on budget.
            Over the years, we have consistently served clients and building owners with dedication and expertise.
          </p>
          <p>
            Our approach to every project is rooted in understanding the Owner's needs and expectations, then exceeding them —
            a commitment that has been the cornerstone of our success since incorporation.
          </p>
        </div>
      </section>

      {/* Container 3: Images Section */}
      <section className="container images-container">
        <div className="content-wrapper">
          <h2>Our Projects</h2>
          <div className="images-grid">
            <div className="image-card">
              <img src={QualityConstruction} alt="Project 1" />
              <p>Quality Construction</p>
            </div>
            <div className="image-card">
              <img src={InnovativeDesign} alt="Project 2" />
              <p>Innovative Design</p>
            </div>
            <div className="image-card">
              <img src={Excecution} alt="Project 3" />
              <p>Expert Execution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Container 4: Services Section (Words) */}
      <section className="container services-container">
        <div className="content-wrapper">
          <h2>Our Services</h2>
          <p>
            HICONS Services Limited continues to expand its footprint with innovative projects,
            delivering high-quality construction services across various sectors while maintaining strong client relationships.
          </p>
          <p>
            We specialize in comprehensive construction solutions, from initial planning and design
            to final execution and delivery, ensuring every project meets the highest standards of quality and safety.
          </p>
        </div>
      </section>

      {/* Container 5: Enhanced Call-to-Action Section */}
      <section className="container home-cta-container">
        <div className="content-wrapper">
          <div className="cta-content-box">
            <h2 className="cta-main-title">Ready to Build Your Vision?</h2>
            <p className="cta-description">
              Partner with HICONS Services Limited for exceptional construction solutions. 
              Whether you need water infrastructure, road construction, building projects, or drainage systems, 
              our experienced team is ready to bring your project to life.
            </p>
            
            <div className="cta-stats-grid">
              <div className="stat-box">
                <div className="stat-number">8+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">30+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">50+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>

            <div className="cta-buttons">
              <button 
                className="cta-primary-btn"
                onClick={() => navigate('/contact')}
              >
                Get a Quote
              </button>
              <button 
                className="cta-secondary-btn"
                onClick={() => navigate('/projects')}
              >
                View Our Work
              </button>
            </div>

            <div className="cta-contact-methods">
              <div className="contact-method">
                <span className="method-icon">📞</span>
                <div className="method-details">
                  <span className="method-label">Call Us</span>
                  <a href="tel:+254712345678" className="method-value">+254 720 xxx xxx</a>
                </div>
              </div>
              <div className="contact-method">
                <span className="method-icon">✉️</span>
                <div className="method-details">
                  <span className="method-label">Email Us</span>
                  <a href="mailto:info@hiconsservices.com" className="method-value">info@hiconsservices.com</a>
                </div>
              </div>
              <div className="contact-method">
                <span className="method-icon">📍</span>
                <div className="method-details">
                  <span className="method-label">Visit Us</span>
                  <span className="method-value">Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;