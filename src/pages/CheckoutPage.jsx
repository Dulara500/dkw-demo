import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const inputCls = 'w-full px-4 py-3 border border-outline rounded bg-white text-on-surface font-mono text-body-md focus:border-primary focus:outline-none'
const labelCls = 'block text-label-sm font-mono uppercase tracking-wider text-on-surface-variant mb-2'

const CheckoutPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', city: '', state: '', pincode: '', paymentMethod: 'cod'
  })
  const onChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }))
  const onSubmit = e => { e.preventDefault(); alert('Order placed! ID: #ORD-2024-004'); navigate('/orders') }

  return (
    <div className="bg-surface min-h-screen">
      {/* Page header */}
      <div className="bg-primary text-white py-10">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <p className="text-label-md font-mono text-white/50 mb-2">DKW / Cart / Checkout</p>
          <h1 className="text-headline-lg text-white">Checkout</h1>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4 md:px-8 py-8">
        <form onSubmit={onSubmit}>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left — Shipping + Payment */}
            <div className="md:col-span-2 space-y-6">
              {/* Shipping */}
              <div className="bg-white border border-outline-variant rounded-md overflow-hidden">
                <div className="bg-surface-container-low border-b border-outline-variant px-5 py-3">
                  <h2 className="text-label-md font-mono font-bold uppercase tracking-wider text-on-surface-variant">
                    Shipping Information
                  </h2>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <label className={labelCls}>Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={onChange} required className={inputCls} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={onChange} required className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Phone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={onChange} required className={inputCls} />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Address *</label>
                    <textarea name="address" value={formData.address} onChange={onChange} required rows={3}
                      className={`${inputCls} resize-none`} />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[['City', 'city', 'text'], ['State', 'state', 'text'], ['Pincode', 'pincode', 'text']].map(([label, name, type]) => (
                      <div key={name}>
                        <label className={labelCls}>{label} *</label>
                        <input type={type} name={name} value={formData[name]} onChange={onChange} required className={inputCls} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white border border-outline-variant rounded-md overflow-hidden">
                <div className="bg-surface-container-low border-b border-outline-variant px-5 py-3">
                  <h2 className="text-label-md font-mono font-bold uppercase tracking-wider text-on-surface-variant">
                    Payment Method
                  </h2>
                </div>
                <div className="p-5 space-y-3">
                  <label className={`flex items-center p-4 border rounded cursor-pointer transition-colors ${formData.paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'border-outline-variant hover:border-primary'}`}>
                    <input type="radio" name="paymentMethod" value="cod"
                      checked={formData.paymentMethod === 'cod'} onChange={onChange} className="w-4 h-4 accent-primary" />
                    <div className="ml-3">
                      <p className="text-body-md font-bold text-on-surface">Cash on Delivery</p>
                      <p className="text-label-sm font-mono text-on-surface-variant">Pay when you receive your order</p>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border border-outline-variant rounded cursor-not-allowed opacity-40">
                    <input type="radio" disabled className="w-4 h-4" />
                    <div className="ml-3">
                      <p className="text-body-md font-bold text-on-surface">Online Payment</p>
                      <p className="text-label-sm font-mono text-on-surface-variant">Coming soon</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right — Summary */}
            <div>
              <div className="bg-white border border-outline-variant rounded-md overflow-hidden sticky top-20">
                <div className="bg-primary px-5 py-3">
                  <h2 className="text-label-md font-mono font-bold uppercase tracking-wider text-white">Order Summary</h2>
                </div>
                <div className="p-5">
                  <div className="space-y-3 pb-4 mb-4 border-b border-outline-variant">
                    <div className="flex justify-between text-body-md">
                      <span className="text-on-surface-variant">Items (3)</span>
                      <span className="font-mono text-on-surface">₹3,156.78</span>
                    </div>
                    <div className="flex justify-between text-body-md">
                      <span className="text-on-surface-variant">GST (18%)</span>
                      <span className="font-mono text-on-surface">₹568.22</span>
                    </div>
                    <div className="flex justify-between text-body-md">
                      <span className="text-on-surface-variant">Shipping</span>
                      <span className="font-mono text-secondary font-bold">FREE</span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-5">
                    <span className="text-body-md font-bold text-on-surface">Total</span>
                    <span className="text-headline-md font-mono font-bold text-primary">₹3,725.00</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#e55100] text-white font-bold text-body-md rounded border border-[#bf3c00] shadow-[0px_2px_0px_#7a2400] hover:-translate-y-0.5 hover:bg-[#bf3c00] transition-all"
                  >
                    PLACE ORDER
                  </button>

                  <p className="text-label-sm font-mono text-on-surface-variant text-center mt-4">
                    By placing this order you agree to our terms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CheckoutPage