import React from 'react';
import './About.css';
// Import director images - replace with actual image paths
// TODO: Uncomment these lines when you add the actual director photos
// import DirectorImage1 from '../assets/images/director1.jpg';
// import DirectorImage2 from '../assets/images/director2.jpg';
// import DirectorImage3 from '../assets/images/director3.jpg';

// Temporary placeholder - using a data URL for a gray circle
const DirectorImage1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Ccircle cx='125' cy='125' r='125' fill='%23ddd'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%23666' text-anchor='middle' dy='.3em'%3EPhoto%3C/text%3E%3C/svg%3E";
const DirectorImage2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Ccircle cx='125' cy='125' r='125' fill='%23ddd'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%23666' text-anchor='middle' dy='.3em'%3EPhoto%3C/text%3E%3C/svg%3E";
const DirectorImage3 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Ccircle cx='125' cy='125' r='125' fill='%23ddd'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%23666' text-anchor='middle' dy='.3em'%3EPhoto%3C/text%3E%3C/svg%3E";

const About = () => {
  // Scroll to section on load if hash exists in URL
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <section className="container about-hero-container">
        <div className="about-hero-content">
          <h1 className="about-hero-title">About HICONS Services Limited</h1>
          <p className="about-hero-subtitle">Building Excellence Since 2016</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="container mission-vision-container">
        <div className="content-wrapper">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>
                To deliver top-quality construction projects with excellence, integrity, and innovation.
                We are committed to exceeding client expectations through professional execution,
                sustainable practices, and unwavering dedication to safety and quality standards.
              </p>
            </div>
            <div className="vision-card" id="vision">
              <div className="card-icon">🏆</div>
              <h2>Our Vision</h2>
              <p>
                To be the leading construction company in Kenya, recognized for quality, reliability,
                and innovation in civil engineering works. We strive to set industry benchmarks
                in water infrastructure, road construction, building projects, and drainage systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section id="profile" className="container profile-container">
        <div className="content-wrapper">
          <h2>Company Profile</h2>
          <p>
            HICONS Services Limited was incorporated in 2016 as a dynamic construction firm
            specializing in comprehensive civil engineering works across all sectors. With our
            headquarters in Nairobi, we have established ourselves as a trusted partner for
            clients seeking excellence in construction services.
          </p>
          <p>
            Our expertise spans multiple disciplines, with particular strength in water infrastructure
            projects, road construction and rehabilitation, building construction (both residential and
            commercial), and advanced drainage systems. Over the years, we have successfully delivered
            projects that stand as testaments to our commitment to quality, timeliness, and budget adherence.
          </p>
          <p>
            At HICONS, we combine technical expertise with innovative solutions to tackle complex
            construction challenges. Our team of experienced professionals, state-of-the-art equipment,
            and rigorous quality control processes ensure that every project meets the highest standards
            of excellence and durability.
          </p>
        </div>
      </section>

      {/* Directors Section */}
      <section id="directors" className="container directors-container">
        <div className="content-wrapper">
          <h2 className="directors-main-title">Our Leadership Team</h2>
          <p className="directors-intro">
            HICONS Services Limited is guided by a team of experienced directors who bring
            decades of combined expertise in construction and civil engineering.
          </p>

          {/* Director 1 */}
          <div className="director-card">
            <div className="director-image-container">
              <img src={DirectorImage1} alt="Eng. Salviseus Kimani Muniu" className="director-image" />
            </div>
            <div className="director-info">
              <h3>Eng. Salviseus Kimani Muniu</h3>
              <p className="director-title">Director & Chief Engineer</p>
              <p className="director-bio">
                Eng. Salviseus Kimani Muniu is a highly accomplished Civil Engineer with over 25 years of experience in the construction industry. He began his career in 1999 and is a Registered Professional Engineer with the Engineers Board of Kenya (EBK). He holds a Bachelor’s Degree in Civil Engineering and currently serves as the Managing Director of HICONS Services Limited, where his visionary leadership has propelled the company into a reputable and trusted construction firm in the region.

                He possesses deep expertise in structural design, project management, quality assurance, and infrastructure development, with extensive experience in both consultancy and contracting. Eng. Muniu has successfully delivered numerous complex and high-profile projects as a designer, consultant, and resident engineer in Kenya and Rwanda. Notable projects include the Domestic Wing of Jomo Kenyatta International Airport (JKIA), Nairobi Gate Industrial Park, Soweto Link Roads, Olkaria Geothermal Power Stations, and Kipevu Power Plants, among others.

                His technical acumen, innovation-driven mindset, and exceptional leadership have been instrumental in driving the successful completion of major water systems, road networks, and energy infrastructure projects. Eng. Muniu is widely respected for his commitment to excellence, mentorship, and the advancement of engineering practice in the region.
              </p>
            </div>
          </div>

          {/* Director 2 */}
          <div className="director-card director-card-reverse">
            <div className="director-image-container">
              <img src={DirectorImage2} alt="James Alphonsus Karago" className="director-image" />
            </div>
            <div className="director-info">
              <h3>James Alphonsus Karago</h3>
              <p className="director-title">Director & Operations Manager</p>
              <p className="director-bio">
                James Alphonsus Karago XXXXXXXXXXXXXXXXXXX.
              </p>
            </div>
          </div>

          {/* Director 3 */}
          <div className="director-card">
            <div className="director-image-container">
              <img src={DirectorImage3} alt="Gabriel Mwaura" className="director-image" />
            </div>
            <div className="director-info">
              <h3>Gabriel Mwaura</h3>
              <p className="director-title">Director & Financial Controller</p>
              <p className="director-bio">
                Gabriel Mwaura serves as the XXXXXXXXXXXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container services-detail-container">
        <div className="content-wrapper">
          <h2>Our Services</h2>
          <p className="services-intro">
            HICONS Services Limited offers comprehensive construction and civil engineering solutions
            tailored to meet the diverse needs of our clients across various sectors.
          </p>

          <div className="services-grid">
            {/* Water Infrastructure */}
            <div className="service-card">
              <div className="service-icon">💧</div>
              <h3>Water Infrastructure</h3>
              <ul>
                <li>Water supply systems design and installation</li>
                <li>Borehole drilling and development</li>
                <li>Water treatment plant construction</li>
                <li>Pipeline laying and distribution networks</li>
                <li>Water storage facilities (tanks and reservoirs)</li>
                <li>Irrigation system installation</li>
                <li>Water quality testing and monitoring systems</li>
              </ul>
            </div>

            {/* Road Construction */}
            <div className="service-card">
              <div className="service-icon">🛣️</div>
              <h3>Road Construction & Rehabilitation</h3>
              <ul>
                <li>Highway and arterial road construction</li>
                <li>Urban and rural road development</li>
                <li>Road rehabilitation and maintenance</li>
                <li>Asphalt and concrete paving</li>
                <li>Bridge construction and repair</li>
                <li>Traffic management systems</li>
                <li>Road marking and signage installation</li>
              </ul>
            </div>

            {/* Building Construction */}
            <div className="service-card">
              <div className="service-icon">🏗️</div>
              <h3>Building Construction</h3>
              <ul>
                <li>Residential building construction</li>
                <li>Commercial and office complexes</li>
                <li>Industrial facility construction</li>
                <li>Institutional buildings (schools, hospitals)</li>
                <li>Renovations and remodeling</li>
                <li>Interior fit-outs and finishing</li>
                <li>Structural repairs and strengthening</li>
              </ul>
            </div>

            {/* Drainage Systems */}
            <div className="service-card">
              <div className="service-icon">🌊</div>
              <h3>Drainage & Sewerage Systems</h3>
              <ul>
                <li>Storm water drainage systems</li>
                <li>Sewerage network installation</li>
                <li>Wastewater treatment facilities</li>
                <li>Culvert construction</li>
                <li>Flood control systems</li>
                <li>Septic tank installation and maintenance</li>
                <li>Underground drainage rehabilitation</li>
              </ul>
            </div>

            {/* Project Management */}
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Project Management</h3>
              <ul>
                <li>Comprehensive project planning and scheduling</li>
                <li>Cost estimation and budget management</li>
                <li>Quality control and assurance</li>
                <li>Site supervision and coordination</li>
                <li>Procurement and contract management</li>
                <li>Health and safety management</li>
                <li>Project monitoring and reporting</li>
              </ul>
            </div>

            {/* Consultancy Services */}
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Consultancy & Design</h3>
              <ul>
                <li>Structural and civil engineering design</li>
                <li>Feasibility studies and assessments</li>
                <li>Technical site investigations</li>
                <li>Environmental impact assessments</li>
                <li>Bill of quantities preparation</li>
                <li>Tender documentation</li>
                <li>Construction supervision</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container why-choose-container">
        <div className="content-wrapper">
          <h2>Why Choose HICONS?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <h3>Experienced Team</h3>
              <p>Our skilled professionals bring years of expertise to every project</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">02</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous quality control ensures excellence in every aspect</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">03</div>
              <h3>Timely Delivery</h3>
              <p>We pride ourselves on completing projects on schedule</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">04</div>
              <h3>Budget Adherence</h3>
              <p>Transparent pricing and efficient resource management</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">05</div>
              <h3>Safety First</h3>
              <p>Uncompromising commitment to workplace and site safety</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">06</div>
              <h3>Client Satisfaction</h3>
              <p>Building lasting relationships through exceptional service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;