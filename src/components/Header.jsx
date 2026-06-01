import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const cartCount = 3

  return (
    <header className="bg-surface-container-lowest border-b border-outline-variant sticky top-0 z-50 shadow-sm">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-mono font-bold text-sm">DKW</span>
            </div>
            <span className="text-body-md font-bold text-on-surface tracking-tight">
              DKW Plastic Industries
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { to: '/', label: 'Home' },
              { to: '/products', label: 'Products' },
              { to: '/custom-order', label: 'Custom Quote' },
              { to: '/orders', label: 'Track Order' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-label-md font-sans font-medium text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-label-md font-sans text-on-surface-variant">
                  Hi, {user.name}
                </span>
                <button
                  onClick={() => {
                    logout()
                    navigate('/login')
                  }}
                  className="text-label-md font-sans text-error hover:underline transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-label-md font-sans text-on-surface-variant hover:text-primary transition-colors"
              >
                Login
              </Link>
            )}

            {/* Cart */}
            <Link to="/cart" className="relative p-2 text-on-surface-variant hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#e55100] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* CTA */}
            <button
              onClick={() => navigate('/custom-order')}
              className="px-4 py-1.5 bg-[#e55100] text-white text-label-md font-sans font-semibold rounded border border-[#bf3c00] shadow-[0px_2px_0px_#7a2400] hover:-translate-y-0.5 hover:bg-[#bf3c00] transition-all"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-on-surface"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-outline-variant">
            <nav className="flex flex-col gap-4">
              {[
                { to: '/', label: 'Home' },
                { to: '/products', label: 'Products' },
                { to: '/custom-order', label: 'Custom Quote' },
                { to: '/orders', label: 'Track Order' },
                { to: '/login', label: 'Login' },
              ].map(({ to, label }) => (
                <Link key={to} to={to}
                  className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link to="/cart"
                className="text-body-md text-on-surface-variant flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cart {cartCount > 0 && <span className="bg-[#e55100] text-white text-label-sm px-1.5 rounded-full">{cartCount}</span>}
              </Link>
              <button
                onClick={() => { navigate('/custom-order'); setMobileMenuOpen(false) }}
                className="w-full py-2 bg-[#e55100] text-white font-semibold rounded border border-[#bf3c00] text-center"
              >
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header