import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AdminAddNewProducts from './AdminAddNewProducts'

const inventory = [
  { name: 'Industrial LDPE Roll (100m)',     sku: 'SKU: RL-772-B', category: 'ROLLS',        stock: 1402, max: 2000, price: '$42.50', low: false },
  { name: 'Heavy Duty Bio-Bag (Small)',       sku: 'SKU: BG-012-G', category: 'BAGS',         stock: 112,  max: 2000, price: '$0.18',  low: true  },
  { name: 'Precision Wrap Sheet (A4 Equiv.)', sku: 'SKU: SH-900-W', category: 'SHEETS',       stock: 5200, max: 6000, price: '$0.04',  low: false },
  { name: 'Virgin HDPE Pellets (50kg Sack)',  sku: 'SKU: RM-PL-22', category: 'RAW MATERIALS', stock: 450,  max: 1000, price: '$120.00', low: false },
]

const StockBar = ({ stock, max, low }) => {
  const pct = Math.min((stock / max) * 100, 100)
  const color = low ? 'bg-red-500' : pct > 60 ? 'bg-primary' : 'bg-[#e55100]'
  return (
    <div className="flex items-center gap-3">
      <div className="w-28 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className={`text-label-sm font-mono font-bold ${low ? 'text-red-600' : 'text-on-surface'}`}>
        {stock.toLocaleString()} units
      </span>
    </div>
  )
}

const AdminInventory = () => {
  const [page, setPage] = useState(1)
  const navigate = useNavigate()

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-headline-lg text-on-surface">Inventory Asset Registry</h1>
          <p className="text-body-md text-on-surface-variant mt-1">
            Real-time oversight of polythene stock and raw polymer resins.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#e55100] text-white text-label-md font-semibold rounded border border-[#bf3c00] shadow-[0px_2px_0px_#7a2400] hover:-translate-y-0.5 hover:bg-[#bf3c00] transition-all" onClick={()=> navigate('/admin/add-item')}>
          + Add New Item
        </button>
      </div>

      {/* Stock overview */}
      <div className="grid grid-cols-5 gap-4">
        {/* Live Stock */}
        <div className="col-span-3 bg-white rounded border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-label-sm font-mono uppercase tracking-widest text-on-surface-variant border-b-2 border-primary pb-1 inline-block">
                Live Stock Capacity
              </p>
            </div>
            <span className="text-label-sm font-mono font-bold px-2.5 py-1 bg-teal-100 text-teal-700 border border-teal-200 rounded">OPTIMIZED</span>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-label-sm font-mono uppercase tracking-wider text-on-surface-variant mb-1">Total SKUs</p>
              <p className="text-headline-lg font-bold text-on-surface">1,248</p>
            </div>
            <div>
              <p className="text-label-sm font-mono uppercase tracking-wider text-on-surface-variant mb-1">Low Stock Alerts</p>
              <p className="text-headline-lg font-bold text-red-600">14</p>
            </div>
            <div>
              <p className="text-label-sm font-mono uppercase tracking-wider text-on-surface-variant mb-1">Active Batches</p>
              <p className="text-headline-lg font-bold text-on-surface">82</p>
            </div>
          </div>
        </div>

        {/* LDPE Resin */}
        <div className="col-span-2 bg-primary rounded p-5 text-white">
          <p className="text-body-md font-bold mb-1">LDPE Resin Supply</p>
          <p className="text-label-sm font-mono text-white/70 mb-4">
            Current raw material reserves for high-density production lines.
          </p>
          <p className="text-display-lg font-bold leading-none mb-3">84%</p>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-secondary rounded-full" style={{ width: '84%' }} />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded border border-gray-200 overflow-hidden">
        {/* Table toolbar */}
        <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-200">
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded text-label-md font-mono text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded text-label-md font-mono text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export CSV
          </button>
          <span className="ml-auto text-label-sm font-mono text-on-surface-variant">
            Showing 1–10 of 1,248 Items
          </span>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-[#f9fafb]">
              {['PRODUCT NAME / SKU', 'CATEGORY', 'STOCK LEVEL', 'PRICE / UNIT', 'ACTIONS'].map(h => (
                <th key={h} className="px-5 py-3 text-left text-label-sm font-mono uppercase tracking-wider text-on-surface-variant">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {inventory.map((item) => (
              <tr key={item.sku} className="hover:bg-[#f9fafb] transition-colors">
                <td className="px-5 py-4">
                  <p className="text-body-md font-bold text-on-surface">{item.name}</p>
                  <p className="text-label-sm font-mono text-on-surface-variant">{item.sku}</p>
                </td>
                <td className="px-5 py-4 text-label-md font-mono text-on-surface-variant">{item.category}</td>
                <td className="px-5 py-4">
                  <StockBar stock={item.stock} max={item.max} low={item.low} />
                </td>
                <td className="px-5 py-4 text-body-md font-mono font-bold text-on-surface">{item.price}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 text-on-surface-variant hover:text-primary transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button className="p-1.5 text-on-surface-variant hover:text-error transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 bg-[#f9fafb]">
          <div className="flex items-center gap-2">
            <button className="p-2 border border-gray-200 rounded text-on-surface-variant hover:border-primary transition-colors disabled:opacity-40" disabled>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            {[1, 2, 3].map(n => (
              <button key={n} onClick={() => setPage(n)}
                className={`w-8 h-8 rounded text-label-md font-mono border transition-colors ${n === page ? 'bg-primary text-white border-primary' : 'border-gray-200 text-on-surface-variant hover:border-primary'}`}>
                {n}
              </button>
            ))}
            <button className="p-2 border border-gray-200 rounded text-on-surface-variant hover:border-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <div className="flex items-center gap-2 text-label-sm font-mono text-on-surface-variant">
            Go to page:
            <input type="number" defaultValue={1} className="w-12 px-2 py-1 border border-gray-200 rounded text-center focus:outline-none focus:border-primary" />
          </div>
        </div>
      </div>

      {/* Footer Metadata */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'LAST SUPPLY AUDIT',  value: 'Oct 24, 2023 · 14:00 EST', sub: 'Verified by J. Thompson', accent: 'border-l-secondary' },
          { label: 'RECYCLING INDEX',     value: '94.2% Pure Material',        sub: 'Grade A Industrial Standard', accent: 'border-l-primary' },
          { label: 'CRITICAL LEAD TIME',  value: '14 Working Days',           sub: 'Affected by logistics surge', accent: 'border-l-[#e55100]' },
        ].map(({ label, value, sub, accent }) => (
          <div key={label} className={`bg-white rounded border border-gray-200 border-l-4 ${accent} px-5 py-4`}>
            <p className="text-label-sm font-mono uppercase tracking-widest text-on-surface-variant mb-1">{label}</p>
            <p className="text-body-md font-bold text-on-surface">{value}</p>
            <p className="text-label-sm font-mono text-on-surface-variant mt-0.5">{sub}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminInventory
