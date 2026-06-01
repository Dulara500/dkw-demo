import { useState } from 'react'
import ProductCard from '../components/ProductCard'

const categories = ['All', 'Polythene Bags', 'Garbage Bags', 'Ziplock Bags', 'Stretch Film', 'Bubble Wrap']

const products = [
  { id: 1, slug: 'hdpe-carry-bag',       name: 'HDPE Carry Bags',        badge: 'INSTOCK',    price: 2.50,  image: '/cat_polythene.png', specs: { material: 'HDPE',  size: '12×18 in',    thickness: '50 µm' } },
  { id: 2, slug: 'heavy-duty-garbage',    name: 'Heavy Duty Garbage Bags', badge: 'BESTSELLER', price: 5.00,  image: '/cat_garbage.png',   specs: { material: 'LDPE',  size: '24×36 in',    thickness: '80 µm' } },
  { id: 3, slug: 'ziplock-pouch',         name: 'Ziplock Pouches',         badge: 'INSTOCK',    price: 1.50,  image: '/prod_ziplock.png',  specs: { material: 'LDPE',  size: '6×8 in',      thickness: '40 µm' } },
  { id: 4, slug: 'stretch-film-roll',     name: 'Stretch Film Rolls',      badge: 'INSTOCK',    price: 450.0, image: '/prod_stretch.png',  specs: { material: 'LLDPE', size: '500mm×300m',  thickness: '23 µm' } },
  { id: 5, slug: 'bubble-wrap-sheet',     name: 'Bubble Wrap Sheets',      badge: null,         price: 15.00, image: null,                 specs: { material: 'LDPE',  size: '1m×50m',      thickness: '60 µm' } },
  { id: 6, slug: 'ldpe-shopping-bag',     name: 'LDPE Shopping Bags',      badge: 'INSTOCK',    price: 3.20,  image: null,                 specs: { material: 'LDPE',  size: '14×20 in',    thickness: '60 µm' } },
]

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sort, setSort] = useState('featured')
  const [priceRange, setPriceRange] = useState('all')
  const [thickness, setThickness] = useState('all')

  const filtered = products.filter(p =>
    activeCategory === 'All' || p.name.toLowerCase().includes(activeCategory.toLowerCase().split(' ')[0])
  )

  return (
    <div className="bg-surface min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-white py-10">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <p className="text-label-md font-mono text-white/50 mb-2">DKW / Products</p>
          <h1 className="text-headline-lg text-white">Our Products</h1>
          <p className="text-body-md text-white/70 mt-2">
            Browse our complete catalogue of industrial packaging solutions
          </p>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4 md:px-8 py-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded border text-label-md font-mono transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-on-surface-variant border-outline-variant hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-white border border-outline-variant rounded-md p-5 sticky top-20">
              <h3 className="text-body-md font-bold text-on-surface mb-4 border-b border-outline-variant pb-3">
                Filters
              </h3>

              {/* Price Range */}
              <div className="mb-5">
                <label className="block text-label-sm font-mono uppercase tracking-wider text-on-surface-variant mb-2">
                  Price Range
                </label>
                <select
                  value={priceRange}
                  onChange={e => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-outline rounded bg-surface text-on-surface font-mono text-label-md focus:border-primary focus:outline-none"
                >
                  <option value="all">All Prices</option>
                  <option value="0-5">₹0 – ₹5</option>
                  <option value="5-20">₹5 – ₹20</option>
                  <option value="20-100">₹20 – ₹100</option>
                  <option value="100+">₹100+</option>
                </select>
              </div>

              {/* Thickness */}
              <div className="mb-5">
                <label className="block text-label-sm font-mono uppercase tracking-wider text-on-surface-variant mb-2">
                  Thickness
                </label>
                <select
                  value={thickness}
                  onChange={e => setThickness(e.target.value)}
                  className="w-full px-3 py-2 border border-outline rounded bg-surface text-on-surface font-mono text-label-md focus:border-primary focus:outline-none"
                >
                  <option value="all">All Thickness</option>
                  <option value="20-40">20–40 µm</option>
                  <option value="40-60">40–60 µm</option>
                  <option value="60-80">60–80 µm</option>
                  <option value="80+">80+ µm</option>
                </select>
              </div>

              <button
                onClick={() => { setPriceRange('all'); setThickness('all'); setActiveCategory('All') }}
                className="w-full py-2 border border-outline text-on-surface-variant font-mono text-label-md hover:border-primary hover:text-primary rounded transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-5">
              <p className="text-label-md font-mono text-on-surface-variant">
                {filtered.length} products found
              </p>
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="px-3 py-2 border border-outline rounded bg-surface text-on-surface text-label-md font-mono focus:border-primary focus:outline-none"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A–Z</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage