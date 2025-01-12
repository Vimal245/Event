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
    </div>
  );
};

export default Home;