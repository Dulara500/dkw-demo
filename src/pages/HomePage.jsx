import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'

const trustFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Bulk Pricing',
    sub: 'Slab discounts available',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Global Shipping',
    sub: 'U.S. & E.U. logistics support',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'High Durability',
    sub: 'ASTM D882 compliant',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Precision Specs',
    sub: 'Custom micron thickness',
  },
]

const categories = [
  { name: 'Polythene Bags', image: '/cat_polythene.png', to: '/products' },
  { name: 'Garbage Bags',   image: '/cat_garbage.png',   to: '/products' },
  { name: 'Industrial Rolls', image: '/cat_rolls.png',   to: '/products' },
  { name: 'Custom Packaging', image: '/cat_custom.png',  to: '/custom-order' },
]

const featuredProducts = [
  {
    id: 1,
    slug: 'stretch-film-roll',
    name: 'Ultra-Strong Pallet Wrap',
    badge: 'INSTOCK',
    price: 12.50,
    image: '/prod_stretch.png',
    specs: { material: 'LLDPE', size: '500mm', thickness: '23 Micron', pricing: '500m / Roll' },
  },
  {
    id: 2,
    slug: 'heavy-ldpe-ziplock',
    name: 'Heavy LDPE Zip-Lock',
    badge: 'BESTSELLER',
    price: 0.05,
    image: '/prod_ziplock.png',
    specs: { material: '400 Gauge', size: 'Various', thickness: null, pricing: 'Various' },
  },
  {
    id: 3,
    slug: 'polyolefin-shrink-film',
    name: 'Polyolefin Shrink Film',
    badge: 'INSTOCK',
    price: 85.00,
    image: '/prod_shrink.png',
    specs: { material: 'POF', size: 'B400', thickness: '50/50 Shrink', pricing: null },
  },
]

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div className="space-y-6">
              {/* ISO badge */}
              <span className="inline-block text-label-sm font-mono uppercase tracking-widest border border-secondary text-secondary px-3 py-1 rounded-sm">
                ISO 9001 Certified
              </span>

              <h1 className="text-display-lg text-on-surface leading-tight">
                Industrial Strength Packaging,{' '}
                <span className="text-primary">Tailored to You.</span>
              </h1>

              <p className="text-body-lg text-on-surface-variant max-w-md">
                High-performance polythene solutions for logistics, manufacturing, and retail. Precision-engineered for maximum durability and environmental compliance.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate('/custom-order')}
                  className="px-6 py-3 bg-[#e55100] text-white font-semibold text-body-md rounded border border-[#bf3c00] shadow-[0px_2px_0px_#7a2400] hover:-translate-y-0.5 hover:bg-[#bf3c00] transition-all"
                >
                  GET CUSTOM QUOTE
                </button>
                <Button variant="primary" size="lg" onClick={() => navigate('/products')}>
                  VIEW CATALOG
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-outline-variant">
                {[
                  { val: '500+', label: 'Happy Clients' },
                  { val: '50+',  label: 'Product Types' },
                  { val: '24hr', label: 'Quick Response' },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <p className="text-headline-md text-primary font-mono">{val}</p>
                    <p className="text-label-md text-on-surface-variant">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — hero image */}
            <div className="relative">
              <img
                src="/hero_rolls.png"
                alt="Industrial packaging rolls"
                className="w-full rounded-md object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-3 -left-3 bg-[#e55100] text-white px-5 py-2.5 rounded border border-[#bf3c00] shadow-[0px_2px_0px_#7a2400]">
                <p className="text-label-md font-mono font-bold">ISO 9001 Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ─────────────────────────────────── */}
      <section className="bg-primary">
        <div className="max-w-container mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustFeatures.map(({ icon, title, sub }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="text-white/60 mt-0.5 flex-shrink-0">{icon}</div>
                <div>
                  <p className="text-label-md font-sans font-semibold text-white">{title}</p>
                  <p className="text-label-sm font-mono text-white/50 mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manufacturing Categories ───────────────────── */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-headline-lg text-on-surface">Manufacturing Categories</h2>
              <p className="text-body-md text-on-surface-variant mt-1">
                Browse our core specialised polythene production lines.
              </p>
            </div>
            <button
              onClick={() => navigate('/products')}
              className="text-label-md font-mono text-primary hover:text-primary-container flex items-center gap-1 transition-colors whitespace-nowrap"
            >
              View All Categories →
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map(({ name, image, to }) => (
              <div
                key={name}
                onClick={() => navigate(to)}
                className="relative aspect-square rounded-md overflow-hidden cursor-pointer group"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-body-md font-bold text-white mb-2">{name}</h3>
                  <span className="text-label-sm font-mono text-white/70 flex items-center gap-1 group-hover:text-white transition-colors">
                    EXPLORE →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bestselling Products ───────────────────────── */}
      <section className="py-16 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-headline-lg text-on-surface">Bestselling Industrial Solutions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" onClick={() => navigate('/products')}>
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────── */}
      <section className="bg-primary py-14">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-headline-lg text-white mb-3">
                Need a custom manufacturing run?
              </h2>
              <p className="text-body-lg text-white/70">
                From specific micron thickness to branded color printing, our engineers will work with you to create the exact packaging solution your business requires.
              </p>
            </div>
            <button
              onClick={() => navigate('/custom-order')}
              className="flex-shrink-0 px-8 py-4 bg-[#e55100] text-white font-bold text-body-md rounded border border-[#bf3c00] shadow-[0px_2px_0px_#7a2400] hover:-translate-y-0.5 hover:bg-[#bf3c00] transition-all uppercase tracking-wide"
            >
              REQUEST CUSTOM QUOTE
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage