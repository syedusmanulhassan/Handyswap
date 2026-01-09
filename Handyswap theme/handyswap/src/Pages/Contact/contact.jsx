import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', signup: true })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    try {
      const stored = JSON.parse(localStorage.getItem('remobie_contact_submissions') || '[]')
      stored.push({ ...form, date: new Date().toISOString() })
      localStorage.setItem('remobie_contact_submissions', JSON.stringify(stored))
      setStatus('success')
      setForm({ name: '', email: '', message: '', signup: true })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className="contact-page">
      <div className="contact-container">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Contact & Signup — Remobie</h1>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>

            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </label>

            <label>
              Message / Query
              <textarea name="message" value={form.message} onChange={handleChange} rows={6} required />
            </label>

            <label className="checkbox">
              <input name="signup" type="checkbox" checked={form.signup} onChange={handleChange} />
              Sign me up for updates and offers
            </label>

            <button className="btn-submit" type="submit">Submit Query</button>

            {status === 'success' && <p className="notice success">Thanks — your query was saved. We'll contact you shortly.</p>}
            {status === 'error' && <p className="notice error">Sorry, something went wrong. Try again later.</p>}
          </form>

          <aside className="contact-info">
            <h2>Our Company</h2>
            <p><strong>Remobie786 SP z o.o.</strong></p>
            <p>Address: Munich, Germany</p>
            <p>We operate across Germany and the Netherlands, offering trade-ins, refurbishment, and authorized distribution.</p>
            <p className="small">Note: form submissions are stored locally in your browser for demo purposes. Ask if you'd like server-side submission integration (email/webhook).</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
