import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <h1 className="about-headline">Renewed Phones. Real Value — Remobie</h1>

        <div className="about-section">
          <h2>Our Origin Story</h2>
          <p>
            Remobie began when a small team noticed great phones were being discarded while
            many people wanted reliable, affordable devices. We started professionally refurbishing
            iPhones and Samsungs, focusing on careful testing, honest grading, and excellent service
            for customers across Germany and the Netherlands.
          </p>
        </div>

        <div className="about-section">
          <div className="mission-card bg-gradient-to-r from-green-50 to-white p-6 md:p-12 rounded-xl shadow-md text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">Our Mission</h2>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              Make high-quality refurbished iPhones and Samsungs accessible, sustainable, and simple—so
              everyone can enjoy premium devices without premium waste or markup. We provide a professional
              space for diagnostics and refurbishment, staffed by trained technicians using transparent processes
              to ensure devices meet strict performance and cosmetic standards.
            </p>

            <div className="mt-8">
              <Link to="/services" className="inline-block bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-300 text-white font-semibold px-6 py-3 rounded-full shadow-sm transition-colors">
                Read More
              </Link>
            </div>

            <div className="mb-12" />
          </div>
        </div>

        <div className="about-section">
          <h2>Three Core Values</h2>
          <ul className="values-list">
            <li><strong>Trust &amp; Transparency:</strong> Clear grading, full diagnostics, and honest descriptions so customers buy with confidence.</li>
            <li><strong>Sustainability:</strong> Extending device life reduces e-waste and supports a greener future.</li>
            <li><strong>Customer Care:</strong> Fast support, reliable warranties, and easy returns designed for peace of mind.</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Why Choose Us</h2>
          <ul className="why-list">
            <li>Professionally refurbished iPhones &amp; Samsungs tested to strict standards.</li>
            <li>Warranty and local-friendly support for Germany and the Netherlands.</li>
            <li>Competitive pricing, clear condition grades, and fast European shipping.</li>
            <li>Responsible sourcing and eco-conscious packaging.</li>
          </ul>
        </div>

        <div className="about-cta">
          <a className="cta-btn" href="/">Browse Certified Refurbished Phones</a>
          <p className="cta-sub">Sign up for updates and get a welcome discount on your first order.</p>
        </div>
      </div>
    </section>
  );
}

export default About;




