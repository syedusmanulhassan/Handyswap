import React, { useState, useEffect } from 'react';
import './header.css';
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';


function App() {
  const [showQuote, setShowQuote] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', device: '', details: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function submitQuote(e) {
    e.preventDefault()
    try {
      const stored = JSON.parse(localStorage.getItem('remobie_quote_requests') || '[]')
      stored.push({ ...form, date: new Date().toISOString() })
      localStorage.setItem('remobie_quote_requests', JSON.stringify(stored))
      setStatus('success')
      setForm({ name: '', email: '', device: '', details: '' })
      setTimeout(() => setShowQuote(false), 1200)
    } catch (err) {
      setStatus('error')
    }
  }

  useEffect(() => {
    function openHandler() {
      setStatus(null)
      setShowQuote(true)
    }
    window.addEventListener('open-quote-bubble', openHandler)
    return () => window.removeEventListener('open-quote-bubble', openHandler)
  }, [])

  return (
    <div className="App">
      <header className="header-wrapper">
        
        {/* Top Bar Section */}
        <div className="top-bar">
          <div className="tagline">
            Remobile — Where iPhones Begin a New Life.
          </div>
          <div className="social-icons">
            <span>Follow Us</span>
            <a href="#" className="header-social-icon" aria-label="Facebook" title="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="header-social-icon" aria-label="Instagram" title="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="header-social-icon" aria-label="YouTube" title="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Main Navigation Section */}
        <nav className="main-nav">
          <div className="logo">
            <Link to="/">
              <img src="https://remobile.ae/wp-content/uploads/2023/06/logo_gradient_scale-1.png" alt="Remobile Logo" />
            </Link>
          </div>
          
          <ul className="nav-links">
            <li> <Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="cta">
            <button className="get-quote-btn" onClick={() => { setShowQuote(true); setStatus(null) }}>Get Quote</button>
          </div>
        </nav>

      </header>

      {/* Quote Bubble (floating) */}
      {showQuote && (
        <div className="quote-bubble" role="dialog">
          <button className="quote-close" onClick={() => setShowQuote(false)}>✕</button>
          <h3>Get a Quote</h3>
          <form className="quote-form" onSubmit={submitQuote}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
            <input name="device" value={form.device} onChange={handleChange} placeholder="Device (e.g. iPhone 12)" />
            <textarea name="details" value={form.details} onChange={handleChange} placeholder="Details about condition / request" rows={4} />
            <button className="quote-submit" type="submit">Send</button>
            {status === 'success' && <div className="quote-note success">Request saved — we'll contact you.</div>}
            {status === 'error' && <div className="quote-note error">Error saving request. Try again.</div>}
          </form>
        </div>
      )}

      {/* Page Content is rendered by individual pages/components */}
    </div>
  );
}

export default App;