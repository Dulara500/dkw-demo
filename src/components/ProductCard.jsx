import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/products/${product.slug}`)}
      className="bg-white border border-outline-variant rounded-md overflow-hidden cursor-pointer group hover:border-primary transition-all hover:shadow-md"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-surface-container overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-surface-container-low">
            <svg className="w-16 h-16 text-outline-variant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        )}
        {/* Status badge */}
        {product.badge && (
          <span className={`absolute top-2 left-2 text-label-sm font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
            product.badge === 'BESTSELLER'
              ? 'bg-secondary text-on-secondary'
              : 'bg-primary text-on-primary'
          }`}>
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-body-md font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Specs — key/value table */}
        {product.specs && (
          <div className="mb-3 border-t border-outline-variant pt-3 space-y-1.5">
            {product.specs.material && (
              <div className="flex justify-between gap-2">
                <span className="text-label-sm font-mono text-on-surface-variant uppercase">Material</span>
                <span className="text-label-sm font-sans font-semibold text-on-surface text-right">{product.specs.material}</span>
              </div>
            )}
            {product.specs.size && (
              <div className="flex justify-between gap-2">
                <span className="text-label-sm font-mono text-on-surface-variant uppercase">Size</span>
                <span className="text-label-sm font-sans font-semibold text-on-surface text-right">{product.specs.size}</span>
              </div>
            )}
            {product.specs.thickness && (
              <div className="flex justify-between gap-2">
                <span className="text-label-sm font-mono text-on-surface-variant uppercase">Thickness</span>
                <span className="text-label-sm font-sans font-semibold text-on-surface text-right">{product.specs.thickness}</span>
              </div>
            )}
            <div className="flex justify-between gap-2 pt-1 border-t border-outline-variant">
              <span className="text-label-sm font-mono text-on-surface-variant uppercase">Pricing</span>
              <span className="text-label-sm font-mono font-bold text-primary">
                From ₹{product.price.toFixed(2)} / unit
              </span>
            </div>
          </div>
        )}

        {/* CTA */}
        <button
          onClick={(e) => { e.stopPropagation(); navigate(`/products/${product.slug}`) }}
          className="w-full py-2 bg-primary text-white text-label-md font-sans font-semibold rounded border border-primary-container shadow-[0px_2px_0px_#001040] hover:-translate-y-0.5 hover:bg-primary-container transition-all"
        >
          BULK ORDER SPECS
        </button>
      </div>
    </div>
  )
}

export default ProductCard