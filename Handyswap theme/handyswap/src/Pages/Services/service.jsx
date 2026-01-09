import React from 'react'
import './service.css'

export default function Service() {
  return (
    <section className="service-page">
      <div className="service-container">
        <h1 className="service-headline">Services — Trade-in, Refurbishment & Distribution</h1>

        <div className="service-section">
          <h2>Trade‑In Options</h2>
          <p>
            Upgrade affordably with Remobie's trade‑in program. Send us your old iPhone or Samsung and
            receive competitive credit toward your next purchase. The process is fast, secure and
            available across Germany and the Netherlands.
          </p>
        </div>

        <div className="service-section">
          <h2>Professional Refurbishment</h2>
          <p>
            We professionally refurbish smartphones — including iPhone, Samsung, and select e‑mobility
            device models — using strict diagnostics, genuine or high-quality replacement parts, and
            multi-point testing so devices look and perform like new.
          </p>
        </div>

        <div className="service-section">
          <h2>100% Service & Authorized Distribution</h2>
          <p>
            Remobie stands behind every device. We offer warranty-backed servicing and act as an
            authorized distributor for selected partners—ensuring genuine parts, dependable repairs,
            and reliable customer support.
          </p>
        </div>

        <div className="service-section">
          <h2>How It Works</h2>
          <ol>
            <li>Request a free trade‑in quote or select a refurbished device.</li>
            <li>Ship your old device using our prepaid label or visit an approved drop‑off point.</li>
            <li>We inspect, refurbish, and certify the device; you receive credit or a fully tested replacement.</li>
          </ol>
        </div>

        <div className="service-cta">
          <a className="btn-primary" href="/contact">Get a Trade‑In Quote</a>
          <p className="muted">Questions? Contact our local support teams in Germany &amp; the Netherlands.</p>
        </div>
      </div>
    </section>
  )
}
