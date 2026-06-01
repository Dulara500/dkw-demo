import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const inputCls = 'w-full px-4 py-3 border border-outline rounded bg-white text-on-surface font-mono text-body-md focus:border-primary focus:outline-none'
const labelCls = 'block text-label-sm font-mono uppercase tracking-wider text-on-surface-variant mb-2'

export default function AdminAddNewProducts() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '', sku: '', category: 'ROLLS', stock: '', maxStock: '', price: '',
  })

  const onChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    alert(`Product ${formData.name} added to inventory!`)
    navigate('/admin/inventory')
  }

  return (
    <div className="p-6 space-y-6 max-w-3xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button onClick={() => navigate('/admin/inventory')} className="p-2 text-on-surface-variant hover:text-primary transition-colors border border-outline rounded bg-white flex-shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <div>
          <h1 className="text-headline-lg text-on-surface">Add New Product</h1>
          <p className="text-body-md text-on-surface-variant mt-1">
            Register a new polythene product or raw material into the inventory.
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={onSubmit} className="bg-white border border-outline-variant rounded-md overflow-hidden">
        <div className="bg-surface-container-low border-b border-outline-variant px-6 py-4">
          <h2 className="text-body-md font-bold text-on-surface">Product Specifications</h2>
        </div>

        <div className="p-6 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <label className={labelCls}>Product Name *</label>
              <input type="text" name="name" value={formData.name} onChange={onChange} required placeholder="e.g. Industrial LDPE Roll (100m)" className={inputCls} />
            </div>

            <div>
              <label className={labelCls}>SKU *</label>
              <input type="text" name="sku" value={formData.sku} onChange={onChange} required placeholder="e.g. RL-772-B" className={inputCls} />
            </div>

            <div>
              <label className={labelCls}>Category *</label>
              <select name="category" value={formData.category} onChange={onChange} required className={inputCls}>
                <option value="ROLLS">Rolls</option>
                <option value="BAGS">Bags</option>
                <option value="SHEETS">Sheets</option>
                <option value="RAW MATERIALS">Raw Materials</option>
              </select>
            </div>

            <div>
              <label className={labelCls}>Initial Stock Level *</label>
              <input type="number" name="stock" value={formData.stock} onChange={onChange} required placeholder="e.g. 1500" className={inputCls} />
            </div>

            <div>
              <label className={labelCls}>Maximum Stock Capacity *</label>
              <input type="number" name="maxStock" value={formData.maxStock} onChange={onChange} required placeholder="e.g. 5000" className={inputCls} />
            </div>

            <div className="md:col-span-2">
                <label className={labelCls}>Image *</label>
                <input type="file" multiple name="image" value={formData.image} onChange={onChange} required className={inputCls} />
            </div>

            <div className="md:col-span-2">
              <label className={labelCls}>Price Per Unit ($) *</label>
              <input type="number" step="0.01" name="price" value={formData.price} onChange={onChange} required placeholder="e.g. 42.50" className={inputCls} />
            </div>
          </div>
          
          <div className="pt-4 border-t border-outline-variant flex justify-end gap-3">
            <button type="button" onClick={() => navigate('/admin/inventory')} className="px-5 py-2.5 border border-outline text-on-surface-variant font-mono text-label-md rounded hover:border-primary hover:text-primary transition-colors">
              Cancel
            </button>
            <button type="submit" className="px-6 py-2.5 bg-[#e55100] text-white font-bold text-label-md rounded border border-[#bf3c00] shadow-[0px_2px_0px_#7a2400] hover:-translate-y-0.5 hover:bg-[#bf3c00] transition-all">
              Save Product
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}