import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const inputCls = 'w-full px-4 py-3 border border-outline rounded bg-white text-on-surface font-mono text-body-md focus:border-primary focus:outline-none'
const labelCls = 'block text-label-sm font-mono uppercase tracking-wider text-on-surface-variant mb-2'

const productTypes = [
  { value: '', label: 'Select product type' },
  { value: 'polythene-bags', label: 'Polythene Bags' },
  { value: 'garbage-bags',   label: 'Garbage Bags' },
  { value: 'ziplock-bags',   label: 'Ziplock Bags' },
  { value: 'stretch-film',   label: 'Stretch Film' },
  { value: 'custom-packaging', label: 'Custom Packaging' },
  { value: 'other',          label: 'Other' },
]

const materials = [
  { value: '', label: 'Select material' },
  { value: 'hdpe', label: 'HDPE (High-Density Polyethylene)' },
  { value: 'ldpe', label: 'LDPE (Low-Density Polyethylene)' },
  { value: 'pp',   label: 'PP (Polypropylene)' },
  { value: 'bio',  label: 'Biodegradable' },
]

const CustomOrderPage = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    productType: '', material: '', width: '', height: '', thickness: '',
    quantity: '', color: '', printing: false, designFile: null, notes: ''
  })

  const onChange = e => {
    const { name, value, type, checked, files } = e.target
    setForm(p => ({ ...p, [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value }))
  }

  const estimate = () => {
    const { width, height, thickness, quantity } = form
    if (!width || !height || !thickness || !quantity) return null
    return (parseFloat(width) * parseFloat(height) * parseFloat(thickness) * 0.001 * parseInt(quantity)).toFixed(2)
  }

  const user = useAuth()
  return (
    <div className="bg-surface min-h-screen">
      {/* Page header */}
      <div className="bg-primary text-white py-12">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <p className="text-label-md font-mono text-white/50 mb-2">DKW / Custom Manufacturing</p>
          <h1 className="text-headline-lg text-white mb-3">Custom Order Request</h1>
          <p className="text-body-lg text-white/70 max-w-xl">
            Tell us your exact specifications. We'll provide a detailed quote within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4 md:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Form — left 2/3 */}
          <div className="md:col-span-2">
            <form onSubmit={e => { e.preventDefault(); alert('Quote request submitted! We\'ll contact you within 24 hours.') }}
              className="bg-white border border-outline-variant rounded-md overflow-hidden">

              <div className="bg-surface-container-low border-b border-outline-variant px-6 py-4">
                <h2 className="text-body-md font-bold text-on-surface">Specification Form</h2>
              </div>

              <div className="p-6 space-y-5">
                {/* Product type */}
                <div>
                  <label className={labelCls}>Product Type *</label>
                  <select name="productType" value={form.productType} onChange={onChange} required className={inputCls}>
                    {productTypes.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>

                {/* Material */}
                <div>
                  <label className={labelCls}>Material *</label>
                  <select name="material" value={form.material} onChange={onChange} required className={inputCls}>
                    {materials.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>

                {/* Dimensions */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Width (inches) *</label>
                    <input type="number" name="width" value={form.width} onChange={onChange} required step="0.1" placeholder="e.g. 12" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Height (inches) *</label>
                    <input type="number" name="height" value={form.height} onChange={onChange} required step="0.1" placeholder="e.g. 18" className={inputCls} />
                  </div>
                </div>

                {/* Thickness + Qty */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Thickness (microns) *</label>
                    <input type="number" name="thickness" value={form.thickness} onChange={onChange} required placeholder="e.g. 50" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Quantity *</label>
                    <input type="number" name="quantity" value={form.quantity} onChange={onChange} required placeholder="e.g. 1000" className={inputCls} />
                  </div>
                </div>

                {/* Color */}
                <div>
                  <label className={labelCls}>Color</label>
                  <input type="text" name="color" value={form.color} onChange={onChange} placeholder="e.g. White, Blue, Custom Pantone" className={inputCls} />
                </div>

                {/* Printing checkbox */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" name="printing" checked={form.printing} onChange={onChange}
                    className="w-4 h-4 accent-primary rounded" />
                  <span className="text-body-md text-on-surface">I need custom printing (logo, text, design)</span>
                </label>

                {/* File upload */}
                {form.printing && (
                  <div>
                    <label className={labelCls}>Upload Design File</label>
                    <div className="border-2 border-dashed border-outline-variant rounded p-6 text-center hover:border-primary transition-colors cursor-pointer">
                      <input type="file" name="designFile" onChange={onChange} accept=".pdf,.ai,.eps,.jpg,.png"
                        className="hidden" id="design-upload" />
                      <label htmlFor="design-upload" className="cursor-pointer">
                        <svg className="w-10 h-10 text-outline mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-body-md text-primary">Click to upload design</p>
                        <p className="text-label-sm font-mono text-on-surface-variant mt-1">PDF, AI, EPS, JPG, PNG (max 10MB)</p>
                        {form.designFile && (
                          <p className="text-label-md font-mono text-secondary mt-2">✓ {form.designFile.name}</p>
                        )}
                      </label>
                    </div>
                  </div>
                )}

                {/* Notes */}
                <div>
                  <label className={labelCls}>Additional Notes</label>
                  <textarea name="notes" value={form.notes} onChange={onChange} rows={4}
                    placeholder="Special requirements, delivery timelines, certifications needed..."
                    className={`${inputCls} resize-none`} />
                </div>

                {/* Estimate */}
                {estimate() && (
                  <div className="bg-surface-container-low border border-outline-variant rounded p-4 flex justify-between items-center">
                    <span className="text-body-md text-on-surface">Estimated Price:</span>
                    <span className="text-headline-md font-mono font-bold text-primary">₹{estimate()}</span>
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <button type="submit"
                    className="flex-1 py-3 bg-[#e55100] text-white font-bold text-body-md rounded border border-[#bf3c00] shadow-[0px_2px_0px_#7a2400] hover:-translate-y-0.5 hover:bg-[#bf3c00] transition-all">
                    REQUEST CUSTOM QUOTE
                  </button>
                  <button type="button" onClick={() => user ? navigate('/customer/dashboard') : navigate('/login')} 
                    className="px-5 py-3 border border-outline text-on-surface-variant font-mono text-label-md rounded hover:border-primary hover:text-primary transition-colors">
                    Reset
                  </button>
                </div>

                <p className="text-label-sm font-mono text-on-surface-variant text-center">
                  Our team will review your request and send a detailed quote within 24 hours
                </p>
              </div>
            </form>
          </div>

          {/* Info panel — right 1/3 */}
          <div className="space-y-5">
            {/* Why custom */}
            <div className="bg-primary rounded-md p-5 text-white">
              <h3 className="text-body-md font-bold mb-3">Why Choose Custom?</h3>
              <ul className="space-y-2.5">
                {[
                  'Exact micron thickness to spec',
                  'Branded color printing (up to 8 colors)',
                  'Any size or gusset configuration',
                  'Biodegradable & eco-certified options',
                  'Priority manufacturing slots',
                ].map(f => (
                  <li key={f} className="flex gap-2 text-label-md font-mono text-white/80">
                    <span className="text-secondary mt-0.5">→</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-white border border-outline-variant rounded-md p-5">
              <h3 className="text-body-md font-bold text-on-surface mb-3">Prefer to Talk?</h3>
              <div className="space-y-2 text-label-md font-mono text-on-surface-variant">
                <p>📞 +91 98765 43210</p>
                <p>✉️ quotes@dkw.com</p>
                <p>⏰ Mon – Fri, 9am – 6pm IST</p>
              </div>
              <button
                onClick={() => navigate('/')}
                className="mt-4 w-full py-2 border border-outline text-on-surface-variant font-mono text-label-md rounded hover:border-primary hover:text-primary transition-colors"
              >
                Back to Home
              </button>
            </div>

            {/* Certifications */}
            <div className="bg-surface-container-low border border-outline-variant rounded-md p-5">
              <h3 className="text-label-sm font-mono uppercase tracking-wider text-on-surface-variant mb-3">Certifications</h3>
              <div className="space-y-1.5 text-label-sm font-mono text-on-surface-variant">
                <p>✓ ISO 9001:2015 Quality</p>
                <p>✓ ASTM D882 Tensile Strength</p>
                <p>✓ FDA Food-Grade Compliant</p>
                <p>✓ RoHS Environmental</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomOrderPage