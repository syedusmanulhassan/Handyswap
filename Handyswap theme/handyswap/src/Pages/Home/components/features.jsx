import React from 'react';
import './features.css';

const features = [
  { id: 1, title: 'Quality Assurance', text: 'Rigorous testing for every device.', icon: '🏆' },
  { id: 2, title: 'Reliability', text: 'Devices you can trust, every time.', icon: '🛡️' },
  { id: 3, title: 'Global Reach', text: 'Serving clients across the globe.', icon: '🌍' },
  { id: 4, title: 'Support', text: '24/7 dedicated customer support.', icon: '📞' }
];

const Features = () => {
  return (
    <section className="features-area">
      <div className="features-container">
        {features.map(item => (
          <div key={item.id} className="feature-card">
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;