import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import NextImage from '../assets/images/Bold Logo for Hicons Services Limited.png';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  
  // Toggle dropdown on click
  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!isAboutDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle navigation to About page sections
  const handleAboutNavigation = (sectionId) => {
    // Close mobile menu if open
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);

    // Navigate to About page with hash
    navigate(`/about#${sectionId}`);

    // Small delay to ensure page loads before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={NextImage} alt="HICONS Services Limited Logo" />
        </Link>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>

        <div className="dropdown" ref={dropdownRef}>
          <span className="dropbtn" onClick={toggleAboutDropdown}>
            About <span className={`arrow ${isAboutDropdownOpen ? 'open' : ''}`}>▾</span>
          </span>
          {isAboutDropdownOpen && (
            <div className="dropdown-content">
              <button onClick={() => handleAboutNavigation('mission')}>Mission</button>
              <button onClick={() => handleAboutNavigation('vision')}>Vision</button>
              <button onClick={() => handleAboutNavigation('profile')}>Company Profile</button>
              <button onClick={() => handleAboutNavigation('directors')}>Leadership Team</button>
              <button onClick={() => handleAboutNavigation('services')}>Services</button>
            </div>
          )}
        </div>

        <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
      </div>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;