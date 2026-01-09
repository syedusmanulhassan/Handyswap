import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const posts = [
  {
    title: 'Remobile Refurbishes Apple iPhones in...',
    date: 'February 12, 2023',
    slug: 'blog-1',
    desc: 'Discover how Remobie performs professional refurbishment on Apple iPhones — a step-by-step look at testing, parts, and certification.'
  },
  {
    title: 'Your Trusted Source for Refurbished...',
    date: 'February 12, 2023',
    slug: 'blog-2',
    desc: 'Why customers across Germany and the Netherlands trust Remobie for quality refurbished phones and dependable service.'
  }
]

export default function Blog() {
  return (
    <section className="blog-page">
      <div className="blog-container">
        <h1 className="blog-title">Blog</h1>

        <div className="blog-grid">
          {posts.map(post => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card" aria-label={post.title}>
              <div className="card-inner">
                <h3 className="card-title">{post.title}</h3>
                <div className="card-date">{post.date}</div>
                <p className="card-desc">{post.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
