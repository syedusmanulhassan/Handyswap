import React from 'react';
import { Link } from 'react-router-dom';

const Mission = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <span className="text-green-600 font-semibold tracking-wider">OUR MISSION</span>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">Excellence in Refurbished Technology</h2>

        <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          At Remobile, our mission is to redefine the smartphone experience. We are dedicated to providing
          high-quality refurbished Apple iPhones and Samsung devices with rigorous testing, transparent grading,
          and reliable support so customers can buy with confidence.
        </p>

        <div className="mt-8">
          <Link to="/services" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow transition-colors">
            Read More
          </Link>
        </div>

        <div className="mb-12" />
      </div>
    </section>
  );
};

export default Mission;