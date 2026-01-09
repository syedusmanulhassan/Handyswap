import React from 'react';
import './hero.css';
import { FaPlus } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Side Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Your Partner for <br />
            <span>Reliable Smartphones</span>
          </h1>
          <p className="hero-description">
            From individual buyers to resellers, we provide refurbished and new 
            smartphones backed by warranty, support, and competitive pricing.
          </p>
          
          {/* Animated Green Line */}
          <div className="scroll-line-box">
            <div className="moving-bar"></div>
          </div>

          <button
            className="work-together-btn"
            onClick={() => window.dispatchEvent(new Event('open-quote-bubble'))}
          >
            Work Together <span className="plus-icon-circle"><FaPlus size={10} /></span>
          </button>
        </div>

        {/* Right Side Image */}
        <div className="hero-visual">
          <div className="phone-mockup-frame">
            <div className="phone-screen">
              {/* Apni Image yahan lagayein */}
              <img src="https://via.placeholder.com/300x600" alt="Team Work" />
            </div>
          </div>
          <div className="hero-bg-shape"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;