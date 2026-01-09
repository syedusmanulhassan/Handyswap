import React from 'react'

const cards = [
  {
    img: 'https://www.bare-cases.com/cdn/shop/products/BareArmour-MinimalistShockResistantCaseforiPhone12ProandiPhone12ProMax-Blue_ef88c360-638e-4760-808b-e86833144504.jpg?v=1607950650&width=600',
    title: 'iPhone Refurbished',
    desc: 'Professionally tested and certified iPhone models.'
  },
  {
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop',
    title: 'Samsung Refurbished',
    desc: 'High-quality Samsung devices with warranty.'
  },
  {
    img: 'https://reboxed.co/cdn/shop/files/reboxedpictures_bde865a9-1cf7-47a8-a596-4b5483a716e2_800x.jpg?v=1731689798',
    title: 'Premium Models',
    desc: 'Top-condition premium phones ready to use.'
  }
]

export default function Refurbished() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Refurbished Mobile Phones</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Browse our professionally refurbished iPhone and Samsung devices — tested, graded, and backed with warranty for peace of mind.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <article key={i} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900">{c.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
