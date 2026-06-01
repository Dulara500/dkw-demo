import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', businessName: '', password: '', confirmPassword: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    navigate('/login')
  }

  const field = (label, key, type = 'text', required = true, placeholder = '') => (
    <div>
      <label className="block text-label-sm font-mono uppercase tracking-wider text-on-surface-variant mb-2">
        {label}{required && ' *'}
      </label>
      <input
        type={type}
        value={formData[key]}
        onChange={e => setFormData({ ...formData, [key]: e.target.value })}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-outline rounded bg-white text-on-surface font-mono text-body-md focus:border-primary focus:outline-none"
      />
    </div>
  )

  return (
    <div className="min-h-screen flex">
      {/* Left — dark navy */}
      <div className="hidden md:flex md:w-2/5 bg-primary flex-col justify-between p-12">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-white/10 rounded border border-white/20 flex items-center justify-center">
              <span className="text-white font-mono font-bold text-sm">DK</span>
            </div>
            <span className="text-white font-bold text-headline-md">DKW</span>
          </div>
          <h2 className="text-headline-lg text-white leading-tight mb-4">
            Join 500+ Industrial Clients
          </h2>
          <p className="text-body-lg text-white/60">
            Register a business account for bulk pricing, custom quotes, and order tracking.
          </p>
        </div>
        <div className="space-y-3">
          {[
            'Bulk order discounts from day one',
            'Dedicated account manager',
            'Priority manufacturing slots',
            'Custom spec configurator',
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

      {/* Right — form */}
      <div className="flex-1 flex items-center justify-center py-10 px-6 bg-surface overflow-y-auto">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-headline-lg text-on-surface">Create Account</h1>
            <p className="text-body-md text-on-surface-variant mt-1">Register for a business account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {field('Full Name', 'name', 'text', true, 'John Smith')}
            {field('Business Name', 'businessName', 'text', false, 'Acme Packaging Ltd.')}
            {field('Email', 'email', 'email', true, 'you@company.com')}
            {field('Phone', 'phone', 'tel', true, '+91 98765 43210')}
            {field('Password', 'password', 'password', true, '••••••••')}
            {field('Confirm Password', 'confirmPassword', 'password', true, '••••••••')}

            <button
              type="submit"
              className="w-full py-3 bg-[#e55100] text-white font-bold text-body-md rounded border border-[#bf3c00] shadow-[0px_2px_0px_#7a2400] hover:-translate-y-0.5 hover:bg-[#bf3c00] transition-all mt-2"
            >
              CREATE ACCOUNT
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-outline-variant text-center">
            <p className="text-body-md text-on-surface-variant">
              Already have an account?{' '}
              <button onClick={() => navigate('/login')} className="text-primary hover:underline font-semibold">
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage