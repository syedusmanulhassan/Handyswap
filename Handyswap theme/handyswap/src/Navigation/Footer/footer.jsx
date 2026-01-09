import React, { useState } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
// Icons ke liye (npm install react-icons)
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState('')

  function validateEmail(value) {
    // simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  function handleSubscribe(e) {
    e.preventDefault()
    const value = (email || '').trim()
    if (!validateEmail(value)) {
      setMessage('Please enter a valid email address')
      setMessageType('error')
      return
    }

    try {
      const key = 'subscribedEmails'
      const stored = JSON.parse(localStorage.getItem(key) || '[]')
      const normalized = value.toLowerCase()
      const exists = stored.some(item => (item || '').toLowerCase() === normalized)
      if (exists) {
        setMessage('This email is already subscribed')
        setMessageType('error')
        return
      }
      stored.push(value)
      localStorage.setItem(key, JSON.stringify(stored))
      setMessage('Thanks — your email is saved')
      setMessageType('success')
      setEmail('')
    } catch (err) {
      setMessage('Unable to save email — try again')
      setMessageType('error')
    }
  }

  return (
    <footer className="footer-area">
      {/* 1. Newsletter Box (Overlap Section) */}
      <div className="newsletter-wrapper">
        <div className="newsletter-box">
          <div className="newsletter-text">
            <h2>Subscribe to our Newsletter</h2>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter Your Email..."
              value={email}
              onChange={e => setEmail(e.target.value)}
              aria-label="Email"
              required
            />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
          {message && (
            <div className={`subscribe-message ${messageType}`}>{message}</div>
          )}
        </div>
      </div>

      {/* 2. Main Footer Content */}
      <div className="footer-main-content">
        <div className="footer-container">
          
          {/* Column 1: About Us */}
          <div className="footer-column">
            <h3 className="footer-title">About Us</h3>
            <p className="footer-about-text">
              Refurbished Apple iPhones, expertly restored at our dedicated center in Dubai, brought to you by Remobile.
            </p>
            <div className="footer-social-icons">
              <a href="#" className="social-icon fb"><FaFacebookF /></a>
              <a href="#" className="social-icon ig"><FaInstagram /></a>
              <a href="#" className="social-icon tw"><FaTwitter /></a>
              <a href="#" className="social-icon yt"><FaYoutube /></a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="footer-column">
            <h3 className="footer-title">Useful Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Service</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: More Useful Links */}
          <div className="footer-column">
            <h3 className="footer-title">Useful Links</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Popular Posts */}
          <div className="footer-column">
            <h3 className="footer-title">Blog</h3>
            <div className="footer-post">
              <img src="https://remobile.ae/wp-content/uploads/2023/02/blog-80x80.jpg" alt="Remobile Refurbished Apple iPhones" />
              <div className="post-info">
                <Link to="/blog/blog-1">Remobile Refurbishes Apple iPhones in...</Link>
                <span>February 12, 2023</span>
              </div>
            </div>
            <div className="footer-post">
              <img src="https://remobile.ae/wp-content/uploads/2023/02/Trusted-80x80.png" alt="Your Trusted Source for Refurbished" />
              <div className="post-info">
                <Link to="/blog/blog-2">Your Trusted Source for Refurbished...</Link>
                <span>February 12, 2023</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;