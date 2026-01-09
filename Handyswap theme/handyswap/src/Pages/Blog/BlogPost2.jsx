import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogPost2() {
  return (
    <section style={{ padding: '50px 5%' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h1>Your Trusted Source for Refurbished...</h1>
        <div style={{ color: '#666', marginBottom: 20 }}>February 12, 2023</div>
        <article style={{ lineHeight: 1.8, color: '#222' }}>
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop" alt="Refurbished smartphone" style={{ width: '100%', borderRadius: 10, marginBottom: 18 }} />
          <p>Customers choose Remobie because we combine technical expertise with transparent service. From the first inspection to the after-sales warranty, our processes are designed to build trust: clear condition grading, visible diagnostics, and open communication at every step.</p>

          <p>Our refurbishment standards are documented and consistent, so buyers receive predictable results. Each device is tested against defined benchmarks and returned only when it meets performance and cosmetic standards. This consistency is what creates long-term customer satisfaction.</p>

          <p>Support and warranty are central to our offering. Every certified device comes with a short-term warranty and access to customer support in Germany and the Netherlands. If an issue arises, our local support teams guide customers through repairs, replacements, or returns.</p>

          <p>We also maintain strong relationships with suppliers and distribution partners. As an authorised distributor for selected parts and services, Remobie can source genuine components and fulfil larger orders for retailers and business customers.</p>

          <p>Affordability is not at odds with quality. By focusing on efficient refurbishment workflows and responsible sourcing, we keep prices competitive while maintaining high standards. This creates an attractive value proposition for customers who want premium devices without premium costs.</p>

          <p>Sustainability remains a core concern: extending the usable life of devices reduces e-waste and the need for new raw materials. We document our repair and recycling efforts and encourage customers to participate in trade-in programs to keep devices in circulation longer.</p>

          <p>To explore our current selection or request a business partnership, visit our blog listings or contact our team. We welcome enquiries from individual buyers and distributors alike.</p>
        </article>

        <div style={{ marginTop: 24 }}>
          <Link to="/blog" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: 24 }} className="btn-primary">Back to Blog</Link>
        </div>
      </div>
    </section>
  )
}
