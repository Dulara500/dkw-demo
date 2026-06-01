import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const product = {
  name: 'HDPE Carry Bags',
  category: 'Polythene Bags',
  badge: 'INSTOCK',
  description: 'High-quality HDPE carry bags suitable for retail stores, supermarkets, and general packaging needs. Made from premium virgin material for superior strength and durability.',
  images: ['/cat_polythene.png'],
  specs: {
    Material: 'HDPE (High-Density Polyethylene)',
    Size: '12 × 18 inches',
    Thickness: '50 microns',
    Colors: 'White, Blue, Red, Green',
    Printable: 'Yes — up to 4 color',
    'Min. Order': '100 units',
  },
  pricingTiers: [
    { minQty: 100,  maxQty: 499,  price: 3.50 },
    { minQty: 500,  maxQty: 999,  price: 3.00 },
    { minQty: 1000, maxQty: 4999, price: 2.50 },
    { minQty: 5000, maxQty: null, price: 2.00 },
  ],
  stock: 'In Stock',
}

const ProductDetailPage = () => {
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(100)

  const currentTier = product.pricingTiers.find(t =>
    quantity >= t.minQty && (t.maxQty === null || quantity <= t.maxQty)
  ) || product.pricingTiers[0]

  return (
    <div className="bg-surface min-h-screen">
      {/* Breadcrumb band */}
      <div className="bg-primary">
        <div className="max-w-container mx-auto px-4 md:px-8 py-4">
          <nav className="text-label-sm font-mono text-white/50 flex items-center gap-2">
            <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => navigate('/products')} className="hover:text-white transition-colors">Products</button>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4 md:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Images */}
          <div>
            <div className="aspect-square bg-surface-container-low border border-outline-variant rounded-md overflow-hidden mb-3">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="aspect-square bg-surface-container border border-outline-variant rounded cursor-pointer hover:border-primary transition-colors" />
              ))}
            </div>
          </div>

          {/* Right — Info */}
          <div>
            {/* Category + Badge */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-label-sm font-mono text-secondary border border-secondary px-2 py-0.5 rounded uppercase tracking-wider">
                {product.category}
              </span>
              <span className="text-label-sm font-mono bg-secondary text-on-secondary px-2 py-0.5 rounded uppercase">
                {product.badge}
              </span>
            </div>

            <h1 className="text-headline-lg text-on-surface mb-3">{product.name}</h1>
            <p className="text-body-lg text-on-surface-variant mb-6">{product.description}</p>

            {/* Specs — key/value table */}
            <div className="bg-white border border-outline-variant rounded-md mb-6 overflow-hidden">
              <div className="px-5 py-3 bg-primary">
                <h3 className="text-label-md font-mono font-bold uppercase tracking-wider text-white">Specifications</h3>
              </div>
              <div className="divide-y divide-outline-variant">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between px-5 py-2.5">
                    <span className="text-label-md font-mono text-on-surface-variant">{key}</span>
                    <span className="text-label-md font-sans font-bold text-on-surface text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bulk Pricing */}
            <div className="bg-white border border-outline-variant rounded-md mb-6 overflow-hidden">
              <div className="px-5 py-3 bg-surface-container-low border-b border-outline-variant">
                <h3 className="text-label-md font-mono font-bold uppercase tracking-wider text-on-surface-variant">Bulk Pricing</h3>
              </div>
              <div className="divide-y divide-outline-variant">
                {product.pricingTiers.map((tier, i) => {
                  const active = quantity >= tier.minQty && (tier.maxQty === null || quantity <= tier.maxQty)
                  return (
                    <div key={i} className={`flex justify-between px-5 py-2.5 ${active ? 'bg-primary/5 border-l-2 border-l-primary' : ''}`}>
                      <span className="text-label-md font-mono text-on-surface">
                        {tier.minQty.toLocaleString()} – {tier.maxQty ? tier.maxQty.toLocaleString() : '∞'} units
                      </span>
                      <span className={`text-label-md font-mono font-bold ${active ? 'text-primary' : 'text-on-surface-variant'}`}>
                        ₹{tier.price.toFixed(2)}/unit
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Quantity & Order */}
            <div className="bg-white border border-outline-variant rounded-md p-5 mb-5">
              <label className="block text-label-sm font-mono uppercase tracking-wider text-on-surface-variant mb-2">
                Quantity (Min: {product.pricingTiers[0].minQty})
              </label>
              <input
                type="number"
                min={product.pricingTiers[0].minQty}
                value={quantity}
                onChange={e => setQuantity(Math.max(product.pricingTiers[0].minQty, parseInt(e.target.value) || product.pricingTiers[0].minQty))}
                className="w-full px-4 py-3 border border-outline rounded bg-surface text-on-surface font-mono text-body-md focus:border-primary focus:outline-none mb-4"
              />

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-label-md font-mono text-on-surface-variant">Total:</span>
                <span className="text-headline-lg text-primary font-mono">
                  ₹{(currentTier.price * quantity).toFixed(2)}
                </span>
                <span className="text-label-md font-mono text-on-surface-variant">(₹{currentTier.price.toFixed(2)}/unit)</span>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-[#e55100] text-white font-bold text-body-md rounded border border-[#bf3c00] shadow-[0px_2px_0px_#7a2400] hover:-translate-y-0.5 hover:bg-[#bf3c00] transition-all">
                  Add to Cart
                </button>
                <button
                  onClick={() => navigate('/custom-order')}
                  className="px-5 py-3 bg-primary text-white font-bold text-body-md rounded border border-primary-container shadow-[0px_2px_0px_#001040] hover:-translate-y-0.5 hover:bg-primary-container transition-all"
                >
                  Customize
                </button>
              </div>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-secondary rounded-full" />
              <span className="text-label-md font-mono text-secondary">{product.stock}</span>
            </div>
          </div>
        </div>

        {/* Value Props */}
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {[
            { icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4', label: 'Custom Printing', sub: 'Add your logo and branding' },
            { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Fast Delivery', sub: '7–10 business days' },
            { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'Quality Assured', sub: 'ISO 9001 certified' },
          ].map(({ icon, label, sub }) => (
            <div key={label} className="bg-white border border-outline-variant rounded-md p-5 flex gap-4 items-start">
              <div className="w-10 h-10 bg-secondary/10 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                </svg>
              </div>
              <div>
                <h3 className="text-body-md font-bold text-on-surface">{label}</h3>
                <p className="text-label-md font-mono text-on-surface-variant mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage