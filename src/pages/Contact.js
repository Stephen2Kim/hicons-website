import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with your backend/email service
    console.log('Form submitted:', formData);
    setFormStatus('success');
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: ''
      });
      setFormStatus('');
    }, 3000);
  };

  return (
    <div className="contact-page-container">
      {/* Hero Section */}
      <section className="contact-hero-container">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Get In Touch</h1>
          <p className="contact-hero-subtitle">
            Let's discuss your next construction project
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="contact-info-section">
        <div className="content-wrapper">
          <div className="contact-cards-grid">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Visit Our Office</h3>
              <p className="contact-detail">HICONS Services Limited</p>
              <p className="contact-detail">Nairobi, Kenya</p>
              <p className="contact-detail-small">Monday - Friday: 8:00 AM - 5:00 PM</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p className="contact-detail">
                <a href="tel:+254720xxxxxx">+254 720 xxx xxx</a>
              </p>
              <p className="contact-detail">
                <a href="tel:+254733xxxxxx">+254 733 xxx xxx</a>
              </p>
              <p className="contact-detail-small">Available 24/7 for emergencies</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email Us</h3>
              <p className="contact-detail">
                <a href="mailto:info@hiconsservices.com">info@hiconsservices.com</a>
              </p>
              <p className="contact-detail">
                <a href="mailto:projects@hiconsservices.com">projects@hiconsservices.com</a>
              </p>
              <p className="contact-detail-small">Response within 24 hours</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🌐</div>
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  Facebook
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  Twitter
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="content-wrapper">
          <div className="form-layout">
            {/* Left side - Form */}
            <div className="form-container">
              <h2>Send Us a Message</h2>
              <p className="form-intro">
                Have a project in mind? Fill out the form below and our team will get back to you promptly.
              </p>

              {formStatus === 'success' && (
                <div className="form-success-message">
                  ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+254 720 xxx xxx"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company/Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="projectType">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="water">Water Infrastructure</option>
                    <option value="roads">Road Construction</option>
                    <option value="buildings">Building Construction</option>
                    <option value="drainage">Drainage Systems</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project requirements, timeline, and any specific details..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Message →
                </button>
              </form>
            </div>

            {/* Right side - Additional Info */}
            <div className="additional-info">
              <div className="info-box">
                <h3>Why Choose HICONS?</h3>
                <ul className="benefits-list">
                  <li>✓ Over 8 years of industry experience</li>
                  <li>✓ Licensed and certified professionals</li>
                  <li>✓ Quality workmanship guaranteed</li>
                  <li>✓ Competitive pricing</li>
                  <li>✓ On-time project delivery</li>
                  <li>✓ Comprehensive project management</li>
                </ul>
              </div>

              <div className="info-box">
                <h3>Service Areas</h3>
                <p>We serve clients across Kenya, with a strong presence in:</p>
                <ul className="service-areas-list">
                  <li>Nairobi County</li>
                  <li>Kiambu County</li>
                  <li>Machakos County</li>
                  <li>Kajiado County</li>
                  <li>Central Kenya Region</li>
                  <li>And nationwide projects</li>
                </ul>
              </div>

              <div className="info-box urgent-projects">
                <h3>🚨 Urgent Projects?</h3>
                <p>For emergency construction services or urgent project inquiries:</p>
                <a href="tel:+254720xxxxxx" className="urgent-call-button">
                  Call +254 720 xxx xxx
                </a>
                <p className="urgent-note">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - can add Google Maps iframe) */}
      <section className="map-section">
        <div className="map-container">
          {/* TODO: Replace with your actual Google Maps embed */}
          <div className="map-placeholder">
            <div className="map-placeholder-content">
              <div className="map-icon">🗺️</div>
              <h3>Find Us on the Map</h3>
              <p>Located in Nairobi, Kenya</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-link-button"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
          {/* 
          Uncomment and add your actual Google Maps embed code:
          <iframe
            title="HICONS Location"
            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="content-wrapper">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I request a quote?</h3>
              <p>
                Simply fill out the contact form above with your project details, or call us directly. 
                We'll schedule a consultation to understand your needs and provide a detailed quote.
              </p>
            </div>

            <div className="faq-item">
              <h3>What areas do you serve?</h3>
              <p>
                We primarily serve the Nairobi metropolitan area and surrounding counties, but we 
                undertake projects nationwide depending on scope and requirements.
              </p>
            </div>

            <div className="faq-item">
              <h3>How long does a typical project take?</h3>
              <p>
                Project timelines vary based on scope and complexity. Small projects may take weeks, 
                while larger infrastructure projects can take several months. We provide detailed 
                timelines during the planning phase.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you offer maintenance services?</h3>
              <p>
                Yes! We offer ongoing maintenance and support services for all completed projects. 
                Contact us to discuss maintenance packages tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;