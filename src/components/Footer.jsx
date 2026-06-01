import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center border border-white/20">
                <span className="text-white font-mono font-bold text-sm">DK</span>
              </div>
              <span className="font-bold text-headline-md">DKW</span>
            </div>
            <p className="text-body-md text-white/60 leading-relaxed mb-5">
              Leading industrial polythene manufacturer supplying global logistics and retail sectors with high-reliability packaging.
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="#" aria-label="Facebook"
                className="w-8 h-8 rounded border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" aria-label="Twitter"
                className="w-8 h-8 rounded border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn"
                className="w-8 h-8 rounded border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-label-md font-mono font-bold uppercase tracking-widest text-white/40 mb-4">
              Products
            </h3>
            <ul className="space-y-2.5">
              {['Categories', 'Industrial Rolls', 'Safety Bags', 'Eco-Range'].map(item => (
                <li key={item}>
                  <Link to="/products" className="text-body-md text-white/70 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-label-md font-mono font-bold uppercase tracking-widest text-white/40 mb-4">
              Support
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Contact', to: '/custom-order' },
                { label: 'Terms of Service', to: '/' },
                { label: 'Privacy Policy', to: '/' },
                { label: 'Returns', to: '/orders' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-body-md text-white/70 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations Center */}
          <div>
            <h3 className="text-label-md font-mono font-bold uppercase tracking-widest text-white/40 mb-4">
              Operations Center
            </h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-label-md font-mono leading-relaxed">
                  722 Industrial Way, Manufacturing<br />
                  District TX 75101
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-label-md font-mono">+1 (800) POLY-PACK</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-label-md font-mono">Mon – Fri  08:00 – 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-label-sm font-mono text-white/40">
            © 2024 DKW Manufacturing. Industrial Strength Packaging.
          </p>
          <p className="text-label-sm font-mono text-white/40">
            ISO 9001:2015 Certified
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer