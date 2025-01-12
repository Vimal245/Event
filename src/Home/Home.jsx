import React from 'react';
import Spline from '@splinetool/react-spline';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-brand">EventPlatform</div>
        <div className="nav-links">
          <a href="#events">Events</a>
          <a href="#communities">Communities</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="nav-auth">
          <button className="btn-secondary">Log in</button>
          <button className="btn-primary">Sign up</button>
        </div>
      </nav>

      {/* Hero Section with Spline */}
      <section className="hero">
        <div className="hero-content">
          <h1>Where Communities Come Together</h1>
          <p>Create and manage beautiful events that bring people together.</p>
          <button className="btn-primary">Create your event</button>
        </div>
        <div className="hero-spline">
          <Spline scene="https://prod.spline.design/IPOV25-qVIH5a7dg/scene.splinecode" />
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="featured-events">
        <h2>Featured Events</h2>
        <div className="event-grid">
          {[1, 2, 3].map((item) => (
            <div key={item} className="event-card">
              <div className="event-image">
                <img src={`/api/placeholder/400/200`} alt={`Event ${item}`} />
                <span className="event-category">Tech</span>
              </div>
              <div className="event-details">
                <div className="event-date">Mar {item + 14}, 2025</div>
                <h3>Tech Conference 2025</h3>
                <p>Join us for the biggest tech conference of the year.</p>
                <div className="event-meta">
                  <span>San Francisco, CA</span>
                  <span>234 attending</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">1</div>
            <h3>Create Your Event</h3>
            <p>Set up your event page with all the details in minutes.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">2</div>
            <h3>Share With Community</h3>
            <p>Reach your audience through our community networks.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">3</div>
            <h3>Manage Registrations</h3>
            <p>Handle tickets and communicate with attendees easily.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to host your event?</h2>
        <p>Join thousands of organizers who trust our platform</p>
        <button className="btn-primary">Get Started Free</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>EventPlatform</h3>
            <p>Where communities thrive</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#enterprise">Enterprise</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#careers">Careers</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <h4>Resources</h4>
              <a href="#blog">Blog</a>
              <a href="#help">Help Center</a>
              <a href="#guides">Guides</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 EventPlatform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;