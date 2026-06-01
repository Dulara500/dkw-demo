import { useState } from 'react'

const orders = [
  { id: '#ORD-9421-S', type: 'STANDARD', customer: 'Global Freight Ltd.',   initials: 'GF', date: 'Oct 24, 2023', total: '$12,450.00', status: 'SHIPPED',   statusColor: 'bg-blue-100 text-blue-700' },
  { id: '#ORD-9422-C', type: 'CUSTOM',   customer: 'Nexus Logistics',        initials: 'NL', date: 'Oct 25, 2023', total: '$8,210.50',  status: 'PAID',      statusColor: 'bg-teal-100 text-teal-700' },
  { id: '#ORD-9423-S', type: 'STANDARD', customer: 'Blue Port Trading',      initials: 'BP', date: 'Oct 25, 2023', total: '$4,800.00',  status: 'PENDING',   statusColor: 'bg-orange-100 text-orange-700' },
  { id: '#ORD-9424-S', type: 'STANDARD', customer: 'Midwest Manufacturing',  initials: 'MM', date: 'Oct 26, 2023', total: '$1,200.00',  status: 'CANCELLED', statusColor: 'bg-red-100 text-red-700' },
  { id: '#ORD-9425-C', type: 'CUSTOM',   customer: 'Alpha Supply Co.',        initials: 'AS', date: 'Oct 26, 2023', total: '$22,100.00', status: 'PAID',      statusColor: 'bg-teal-100 text-teal-700' },
]

const AdminOrders = () => {
  const [selected, setSelected] = useState([])
  const [statusFilter, setStatusFilter] = useState('All')
  const [showFilter, setShowFilter] = useState('All Orders')

  const toggleSelect = (id) =>
    setSelected(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id])

  const filtered = orders.filter(o =>
    statusFilter === 'All' ? true : o.status === statusFilter.toUpperCase()
  )

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-headline-lg text-on-surface">Order Management</h1>
          <p className="text-body-md text-on-surface-variant mt-1">
            Monitor and manage all manufacturing order flows.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline rounded bg-white text-label-md font-mono text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-label-md font-semibold rounded border border-primary-container shadow-[0px_2px_0px_#001040] hover:-translate-y-0.5 hover:bg-primary-container transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Update Status
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'ACTIVE PRODUCTION', value: '142', sub: '+12%', subColor: 'text-green-600', bar: 'bg-primary', barW: '65%' },
          { label: 'PENDING PAYMENT',   value: '28',  sub: '-4%',  subColor: 'text-red-500',   bar: 'bg-[#e55100]', barW: '35%' },
          { label: 'READY FOR DISPATCH',value: '56',  sub: 'High', subColor: 'text-secondary',  bar: 'bg-secondary', barW: '80%' },
          { label: 'AVG. PROCESSING',   value: '3.4d',sub: 'Optimal', subColor: 'text-green-600', bar: 'bg-gray-400', barW: '45%' },
        ].map(({ label, value, sub, subColor, bar, barW }) => (
          <div key={label} className="bg-white rounded border border-gray-200 p-4">
            <p className="text-label-sm font-mono uppercase tracking-wider text-on-surface-variant mb-1">{label}</p>
            <p className="text-headline-lg font-bold text-on-surface mb-2">{value}
              <span className={`text-label-md font-mono ml-2 ${subColor}`}>{sub}</span>
            </p>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${bar}`} style={{ width: barW }} />
            </div>
          </div>
        ))}
      </div>

      {/* Table Card */}
      <div className="bg-white rounded border border-gray-200 overflow-hidden">
        {/* Filters */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 bg-[#f9fafb] flex-wrap">
          <span className="text-label-sm font-mono text-on-surface-variant">Show:</span>
          <select
            value={showFilter}
            onChange={e => setShowFilter(e.target.value)}
            className="px-3 py-1.5 border border-gray-200 rounded bg-white text-label-md font-mono text-on-surface focus:outline-none focus:border-primary"
          >
            <option>All Orders</option>
            <option>Standard Only</option>
            <option>Custom Only</option>
          </select>

          <span className="text-label-sm font-mono text-on-surface-variant ml-2">Status:</span>
          {['All', 'Paid', 'Shipped', 'Pending'].map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded text-label-md font-mono transition-all ${
                statusFilter === s
                  ? 'bg-primary text-white'
                  : 'border border-gray-200 text-on-surface-variant hover:border-primary hover:text-primary'
              }`}
            >
              {s}
            </button>
          ))}

          <div className="ml-auto flex items-center gap-3">
            {selected.length > 0 && (
              <span className="text-label-sm font-mono text-on-surface-variant">
                Selected: {selected.length} items
              </span>
            )}
            <button className="text-label-sm font-mono text-error hover:underline flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Cancel Selected
            </button>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-[#f9fafb]">
              <th className="px-4 py-3 w-8">
                <input type="checkbox" className="w-4 h-4 accent-primary rounded" />
              </th>
              {['ORDER ID', 'CUSTOMER', 'ORDER DATE', 'TOTAL PRICE', 'STATUS', 'ACTIONS'].map(h => (
                <th key={h} className="px-4 py-3 text-left text-label-sm font-mono uppercase tracking-wider text-on-surface-variant">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((order) => (
              <tr key={order.id} className="hover:bg-[#f9fafb] transition-colors">
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    checked={selected.includes(order.id)}
                    onChange={() => toggleSelect(order.id)}
                    className="w-4 h-4 accent-primary rounded"
                  />
                </td>
                <td className="px-4 py-4">
                  <p className="text-label-md font-mono font-bold text-primary">{order.id}</p>
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded mt-1 inline-block ${
                    order.type === 'CUSTOM'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>{order.type}</span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                      {order.initials}
                    </div>
                    <span className="text-body-md font-medium text-on-surface">{order.customer}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-label-md font-mono text-on-surface-variant">{order.date}</td>
                <td className="px-4 py-4 text-body-md font-mono font-bold text-on-surface">{order.total}</td>
                <td className="px-4 py-4">
                  <span className={`text-label-sm font-mono font-bold px-2 py-1 rounded ${order.statusColor}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <button className="p-1 text-on-surface-variant hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 13a1 1 0 110-2 1 1 0 010 2zm0-5a1 1 0 110-2 1 1 0 010 2zm0 10a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 bg-[#f9fafb]">
          <p className="text-label-sm font-mono text-on-surface-variant">
            Showing 1 to {filtered.length} of 142 entries
          </p>
          <div className="flex items-center gap-2">
            {['Previous', '1', '2', '3', 'Next'].map((p, i) => (
              <button key={i} className={`px-3 py-1.5 rounded text-label-md font-mono border transition-colors ${
                p === '1'
                  ? 'bg-primary text-white border-primary'
                  : 'border-gray-200 text-on-surface-variant hover:border-primary hover:text-primary'
              }`}>{p}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="bg-white rounded border border-gray-200 px-5 py-3 flex items-center gap-6 text-label-sm font-mono text-on-surface-variant">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> Production Line A: ACTIVE</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> Warehouse Sync: OK</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span> Server Load: 42%</span>
        <span className="ml-auto">Last system refresh: <strong className="text-on-surface">2 mins ago</strong></span>
      </div>
    </div>
  )
}

export default AdminOrders
