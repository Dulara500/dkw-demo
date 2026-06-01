import { useState } from 'react'

const requests = [
  { id: '#CR-9204', time: '20 MINS AGO', customer: 'Global Logistics Corp', urgent: true,  spec: 'LDPE – Anti-Static', dims: '1200mm × 800mm', thickness: '80 Microns', status: 'Pending',  statusColor: 'bg-orange-100 text-orange-700', action: 'review' },
  { id: '#CR-9201', time: '2 HOURS AGO', customer: 'Eco-Fresh Produce',     urgent: false, spec: 'Recycled HDPE',       dims: '600mm × 400mm',  thickness: '35 Microns', status: 'Quoted',   statusColor: 'bg-teal-100 text-teal-700',   action: 'view' },
  { id: '#CR-9198', time: '5 HOURS AGO', customer: 'Nexus Electronics',     urgent: false, spec: 'VCI Poly Film',       dims: '1500mm × 2000mm',thickness: '120 Microns', status: 'Approved', statusColor: 'bg-green-100 text-green-700', action: 'view' },
  { id: '#CR-9195', time: 'YESTERDAY',   customer: 'Arctic Marine Ltd',      urgent: true,  spec: 'Heavy Duty Shrink',   dims: '3000mm × 5000mm',thickness: '250 Microns', status: 'Pending',  statusColor: 'bg-orange-100 text-orange-700', action: 'review' },
]

const AdminCustomRequests = () => {
  const [tab, setTab] = useState('All Requests')

  const filtered = requests.filter(r => {
    if (tab === 'Pending') return r.status === 'Pending'
    if (tab === 'Quoted')  return r.status === 'Quoted' || r.status === 'Approved'
    return true
  })

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-headline-lg text-on-surface">Custom Requests Management</h1>
          <p className="text-body-md text-on-surface-variant mt-1">
            Review and provide technical quotes for complex polythene manufacturing inquiries.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline rounded bg-white text-label-md font-mono text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-outline rounded bg-white text-label-md font-mono text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export CSV
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'PENDING REVIEW',    value: '12', sub: '! 4 High Priority',  subColor: 'text-red-600' },
          { label: 'QUOTED (TODAY)',     value: '08', sub: '↑ +15% vs Yesterday', subColor: 'text-green-600' },
          { label: 'AVG. RESPONSE TIME',value: '4.2h',sub: '⏱ Target: 6.0h',  subColor: 'text-on-surface-variant' },
          { label: 'CONVERSION RATE',   value: '68%', sub: '✓ Industry Top Tier', subColor: 'text-green-600' },
        ].map(({ label, value, sub, subColor }) => (
          <div key={label} className="bg-white rounded border border-gray-200 p-4">
            <p className="text-label-sm font-mono uppercase tracking-wider text-on-surface-variant mb-1">{label}</p>
            <p className="text-headline-lg font-bold text-on-surface">{value}</p>
            <p className={`text-label-sm font-mono mt-1 ${subColor}`}>{sub}</p>
          </div>
        ))}
      </div>

      {/* Requests Table */}
      <div className="bg-white rounded border border-gray-200 overflow-hidden">
        {/* Tabs + count */}
        <div className="flex items-center gap-0 px-4 py-3 border-b border-gray-200">
          {['All Requests', 'Pending', 'Quoted'].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 text-label-md font-mono rounded transition-all mr-1 ${
                tab === t
                  ? 'bg-white border border-gray-300 text-on-surface shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {t}
            </button>
          ))}
          <span className="ml-auto text-label-sm font-mono text-on-surface-variant">
            Showing 1–{filtered.length} of 48 requests
          </span>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-[#f9fafb]">
              {['REQUEST ID', 'CUSTOMER', 'MATERIAL SPEC', 'DIMENSIONS', 'THICKNESS', 'STATUS', 'ACTIONS'].map(h => (
                <th key={h} className="px-4 py-3 text-left text-label-sm font-mono uppercase tracking-wider text-on-surface-variant">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((req) => (
              <tr key={req.id} className="hover:bg-[#f9fafb] transition-colors">
                <td className="px-4 py-4">
                  <p className="text-label-md font-mono font-bold text-primary">{req.id}</p>
                  <p className="text-[10px] font-mono text-on-surface-variant mt-0.5">{req.time}</p>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <p className="text-body-md font-bold text-on-surface">{req.customer}</p>
                    {req.urgent && (
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-[#e55100] text-white rounded">⚡ URGENT</span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 text-label-md font-mono text-on-surface-variant">{req.spec}</td>
                <td className="px-4 py-4 text-label-md font-mono text-on-surface-variant">{req.dims}</td>
                <td className="px-4 py-4 text-label-md font-mono text-on-surface-variant">{req.thickness}</td>
                <td className="px-4 py-4">
                  <span className={`text-label-sm font-mono font-bold px-2.5 py-1 rounded ${req.statusColor}`}>
                    {req.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  {req.action === 'review' ? (
                    <button className="px-3 py-2 bg-[#e55100] text-white text-label-sm font-mono font-bold rounded border border-[#bf3c00] shadow-[0px_2px_0px_#7a2400] hover:-translate-y-0.5 hover:bg-[#bf3c00] transition-all">
                      Review & Quote
                    </button>
                  ) : (
                    <button className="px-3 py-2 border border-primary text-primary text-label-sm font-mono font-bold rounded hover:bg-primary hover:text-white transition-colors">
                      View Details
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom panels */}
      <div className="grid grid-cols-2 gap-4">
        {/* Quote Intelligence */}
        <div className="bg-primary rounded p-5 text-white">
          <h3 className="text-body-md font-bold mb-2">Quote Intelligence Dashboard</h3>
          <p className="text-label-md font-mono text-white/70 mb-4">
            AI-assisted pricing recommendations based on material costs and demand.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Avg Quote Value', value: '$8,420' },
              { label: 'Win Rate',         value: '68%' },
              { label: 'Quote Time',        value: '4.2h' },
              { label: 'Active Quotes',     value: '23' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/10 rounded p-3">
                <p className="text-label-sm font-mono text-white/60">{label}</p>
                <p className="text-headline-md font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Specs Cheat Sheet */}
        <div className="bg-white rounded border border-gray-200 p-5">
          <h3 className="text-body-md font-bold text-on-surface mb-3">
            Technical Specs Cheat Sheet
          </h3>
          <div className="space-y-2 divide-y divide-gray-100">
            {[
              { label: 'Min Gauge', value: '15 Microns' },
              { label: 'Max Width', value: '3,000 mm' },
              { label: 'Max Thickness', value: '500 Microns' },
              { label: 'Lead Time (Standard)', value: '7–10 days' },
              { label: 'Lead Time (Custom)', value: '14–21 days' },
              { label: 'Certifications', value: 'ISO, FDA, RoHS' },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between py-1.5">
                <span className="text-label-sm font-mono text-on-surface-variant">{label}</span>
                <span className="text-label-sm font-mono font-bold text-on-surface">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminCustomRequests
