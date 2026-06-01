import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const LoginPage = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (formData.email === 'admin@dkw.com' && formData.password === 'admin123') {
      login({ role: 'admin', name: 'Admin User', initials: 'AD' })
      navigate('/admin')
    } else if (formData.email === 'user@dkw.com' && formData.password === 'user123') {
      login({ role: 'user', name: 'John Doe', initials: 'JD' })
      navigate('/products')
    } else {
      alert('Invalid credentials. Try admin@dkw.com/admin123 or user@dkw.com/user123')
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel — dark navy */}
      <div className="hidden md:flex md:w-1/2 bg-primary flex-col justify-between p-12">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-white/10 rounded border border-white/20 flex items-center justify-center">
              <span className="text-white font-mono font-bold text-sm">DK</span>
            </div>
            <span className="text-white font-bold text-headline-md">DKW</span>
          </div>
          <h2 className="text-headline-lg text-white leading-tight mb-4">
            Industrial Strength Packaging at Scale
          </h2>
          <p className="text-body-lg text-white/60">
            Sign in to manage your bulk orders, track shipments, and access custom quotes.
          </p>
        </div>

        <div className="space-y-4">
          {[
            '500+ enterprise clients served',
            'ISO 9001:2015 certified manufacturing',
            '24hr custom quote turnaround',
          ].map(f => (
            <div key={f} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-label-md font-mono text-white/70">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel — form */}
      <div className="flex-1 flex items-center justify-center py-12 px-6 bg-surface">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <h1 className="text-headline-lg text-on-surface">Welcome Back</h1>
            <p className="text-body-md text-on-surface-variant mt-1">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-label-sm font-mono uppercase tracking-wider text-on-surface-variant mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="you@company.com"
                className="w-full px-4 py-3 border border-outline rounded bg-white text-on-surface font-mono text-body-md focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-label-sm font-mono uppercase tracking-wider text-on-surface-variant mb-2">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-outline rounded bg-white text-on-surface font-mono text-body-md focus:border-primary focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#e55100] text-white font-bold text-body-md rounded border border-[#bf3c00] shadow-[0px_2px_0px_#7a2400] hover:-translate-y-0.5 hover:bg-[#bf3c00] transition-all"
            >
              SIGN IN
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-outline-variant text-center">
            <p className="text-body-md text-on-surface-variant">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/register')}
                className="text-primary hover:underline font-semibold"
              >
                Register here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage