import { useNavigate } from 'react-router-dom'

// Simple SVG bar chart
const BarChart = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const standard = [42, 61, 38, 75, 55, 30, 20]
  const custom   = [18, 25, 15, 35, 22, 12,  8]
  const max = Math.max(...standard)

  return (
    <svg viewBox="0 0 460 160" className="w-full h-full">
      {/* Y grid lines */}
      {[0, 0.25, 0.5, 0.75, 1].map(f => (
        <line key={f} x1="0" y1={140 - f * 120} x2="460" y2={140 - f * 120}
          stroke="#e5e7eb" strokeWidth="1" />
      ))}
      {days.map((day, i) => {
        const x = 30 + i * 60
        const sh = (standard[i] / max) * 110
        const ch = (custom[i] / max) * 110
        return (
          <g key={day}>
            <rect x={x} y={140 - sh} width="18" height={sh} rx="2" fill="#00236f" />
            <rect x={x + 20} y={140 - ch} width="18" height={ch} rx="2" fill="#006a61" />
            <text x={x + 18} y="156" textAnchor="middle" fontSize="10" fill="#9ca3af">{day}</text>
          </g>
        )
      })}
    </svg>
  )
}

const recentActivity = [
  { id: '#8842', desc: 'Industrial Rolls (x500)', status: 'PAID',    statusColor: 'bg-teal-100 text-teal-700', time: '2 mins ago', icon: '🛒' },
  { id: '#8839', desc: 'Recycled Film (Bulk)',    status: 'SHIPPED',  statusColor: 'bg-blue-100 text-blue-700', time: '45 mins ago', icon: '🚚' },
  { id: '#8835', desc: 'Custom Print Bags',        status: 'PENDING',  statusColor: 'bg-orange-100 text-orange-700', time: '2 hours ago', icon: '📋' },
  { id: '#8830', desc: 'Liner Poly (x200)',         status: 'PAID',    statusColor: 'bg-teal-100 text-teal-700', time: '3 hours ago', icon: '🛒' },
]

const queue = [
  { job: 'MJ-204-A', material: 'LDPE Translucent',     thickness: '40 Micron',  qty: '5,000 m',  eta: 'Today, 16:00',    status: 'In Production', statusColor: 'bg-teal-100 text-teal-700 border border-teal-200' },
  { job: 'MJ-205-B', material: 'HDPE Rigid White',      thickness: '120 Micron', qty: '2,400 m',  eta: 'Tomorrow, 09:00', status: 'Queued',        statusColor: 'bg-gray-100 text-gray-600 border border-gray-200' },
  { job: 'MJ-201-C', material: 'Bio-Poly Compostable',  thickness: '25 Micron',  qty: '12,000 m', eta: '—',               status: 'Ready',         statusColor: 'bg-green-100 text-green-700 border border-green-200' },
]

const AdminDashboard = () => {
  const navigate = useNavigate()

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-headline-lg text-on-surface">Operations Overview</h1>
          <p className="text-body-md text-on-surface-variant mt-1">
            Real-time tracking of polythene production and sales performance.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline rounded text-label-md font-mono text-on-surface-variant hover:border-primary hover:text-primary transition-colors bg-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export Sales Report
          </button>
          <button
            onClick={() => navigate('/admin/inventory')}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-label-md font-semibold rounded border border-primary-container shadow-[0px_2px_0px_#001040] hover:-translate-y-0.5 hover:bg-primary-container transition-all"
          >
            + Create New Product
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'TOTAL ORDERS',    value: '1,284', sub: '+12.5%',  subColor: 'text-green-600', accent: 'border-l-primary' },
          { label: 'MONTHLY REVENUE', value: '$142,500', sub: '+4.2%', subColor: 'text-green-600', accent: 'border-l-secondary' },
          { label: 'OPEN ALERTS',     value: '24',     sub: '↑ Open Action Required', subColor: 'text-red-500',   accent: 'border-l-[#e55100]' },
          { label: 'NEW CUSTOMERS',   value: '18',     sub: '-2%',    subColor: 'text-red-500',   accent: 'border-l-gray-400' },
        ].map(({ label, value, sub, subColor, accent }) => (
          <div key={label} className={`bg-white rounded border border-gray-200 border-l-4 ${accent} p-4`}>
            <p className="text-label-sm font-mono uppercase tracking-wider text-on-surface-variant mb-1">{label}</p>
            <p className="text-headline-lg font-bold text-on-surface">{value}</p>
            <p className={`text-label-sm font-mono mt-1 ${subColor}`}>{sub}</p>
          </div>
        ))}
      </div>

      {/* Chart + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Bar Chart */}
        <div className="lg:col-span-3 bg-white rounded border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-body-md font-bold text-on-surface">Order Volume (7 Days)</h3>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-label-sm font-mono text-on-surface-variant">
                <span className="w-3 h-3 rounded-sm bg-primary inline-block"></span> Standard
              </span>
              <span className="flex items-center gap-1.5 text-label-sm font-mono text-on-surface-variant">
                <span className="w-3 h-3 rounded-sm bg-secondary inline-block"></span> Custom
              </span>
            </div>
          </div>
          <div className="h-44">
            <BarChart />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded border border-gray-200 p-5">
          <h3 className="text-body-md font-bold text-on-surface mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map(({ id, desc, status, statusColor, time }) => (
              <div key={id} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center flex-shrink-0 border border-gray-200">
                  <svg className="w-4 h-4 text-on-surface-variant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-label-md font-mono font-bold text-on-surface">Order {id}</span>
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${statusColor}`}>{status}</span>
                  </div>
                  <p className="text-label-sm text-on-surface-variant truncate">{desc}</p>
                  <p className="text-[10px] font-mono text-on-surface-variant mt-0.5">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Manufacturing Queue */}
      <div className="bg-white rounded border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <div>
            <p className="text-label-sm font-mono uppercase tracking-widest text-on-surface-variant">Live Manufacturing</p>
            <p className="text-label-sm font-mono uppercase tracking-widest text-on-surface-variant">Queue</p>
          </div>
          <button className="p-1.5 text-on-surface-variant hover:text-primary transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="bg-[#f9fafb] border-b border-gray-200">
              {['JOB ID', 'MATERIAL TYPE', 'THICKNESS', 'QUANTITY', 'ESTIMATED COMPLETION', 'STATUS'].map(h => (
                <th key={h} className="px-4 py-3 text-left text-label-sm font-mono uppercase tracking-wider text-on-surface-variant">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {queue.map(({ job, material, thickness, qty, eta, status, statusColor }) => (
              <tr key={job} className="hover:bg-[#f9fafb] transition-colors">
                <td className="px-4 py-4 text-label-md font-mono text-on-surface-variant">{job}</td>
                <td className="px-4 py-4 text-body-md font-bold text-on-surface">{material}</td>
                <td className="px-4 py-4 text-label-md font-mono text-on-surface-variant">{thickness}</td>
                <td className="px-4 py-4 text-body-md font-bold text-on-surface">{qty}</td>
                <td className="px-4 py-4 text-label-md font-mono text-on-surface-variant">{eta}</td>
                <td className="px-4 py-4">
                  <span className={`text-label-sm font-mono font-bold px-2.5 py-1 rounded ${statusColor}`}>{status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
