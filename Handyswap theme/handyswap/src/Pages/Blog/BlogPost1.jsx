import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogPost1() {
  return (
    <section style={{ padding: '50px 5%' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ marginBottom: 8 }}>Remobile Refurbishes Apple iPhones in...</h1>
        <div style={{ color: '#666', marginBottom: 20 }}>February 12, 2023</div>
        <article style={{ lineHeight: 1.8, color: '#222' }}>
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop" alt="Refurbished iPhone" style={{ width: '100%', borderRadius: 10, marginBottom: 18 }} />
          <p>At Remobie we take refurbishment seriously. Each iPhone we receive goes through a comprehensive intake process where we document its condition, verify serial numbers, and run an initial diagnostics suite to identify faults. This first step ensures transparent grading and sets the scope for the work required.</p>

          <p>Next, certified technicians perform targeted repairs using either genuine or carefully vetted high-quality replacement parts. Common repairs include battery replacement, screen and glass repair, camera servicing, and port cleaning. All work is completed in a controlled environment to minimise contamination and ensure repeatable quality.</p>

          <p>Battery health and performance are key to the user experience, so each device undergoes a battery cycle test and capacity verification. We also run software diagnostics to check sensors, connectivity, cameras, and storage integrity. Any device that doesn't meet our standards is repaired again or set aside for parts.</p>

          <p>Cosmetic restoration is handled with the same attention: housings are cleaned, small dents and scratches are corrected where possible, and screens are polished or replaced. Our goal is to return devices that not only perform like new but also look presentable and ready for daily use.</p>

          <p>Quality assurance follows with a multi-point final inspection: performance benchmarks, network tests, camera checks, and a final visual review. Devices are then factory-reset, reimaged if necessary, and prepared for secure packaging. Each unit receives a certification sticker and a short warranty to provide customer confidence.</p>

          <p>Beyond product quality, we prioritise responsible sourcing and recycling. Extending device life reduces electronic waste and contributes to a more sustainable electronics lifecycle. Customers in Germany and the Netherlands benefit from local support and reliable shipping tailored to European standards.</p>

          <p>If you'd like to trade in or buy a certified refurbished iPhone, our trade-in and warranty policies make the process simple and transparent. Reach out to our support team for a quote or visit our listings to view current inventory.</p>
        </article>

        <div style={{ marginTop: 24 }}>
          <Link to="/blog" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: 24 }} className="btn-primary">Back to Blog</Link>
        </div>
      </div>
    </section>
  )
}
