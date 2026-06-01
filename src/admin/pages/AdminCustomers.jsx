import { useState } from 'react'

const customers = [
  { initials: 'GL', color: 'bg-blue-600',   name: 'Global Logistics Co.',  sector: 'E-COMMERCE SECTOR',    email: 'procurement@globallogistics.com', orders: 142, ltv: '$84,200.00',  join: '12 Jan 2023' },
  { initials: 'PF', color: 'bg-teal-600',   name: 'PureFood Packaging',    sector: 'FOOD & BEVERAGE',      email: 'ops@purefood.io',                 orders: 89,  ltv: '$52,150.00',  join: '04 Mar 2023' },
  { initials: 'AS', color: 'bg-orange-600', name: 'Apex Solutions Ltd.',   sector: 'CONSTRUCTION',          email: 'contact@apexsol.co.uk',           orders: 214, ltv: '$126,900.00', join: '29 Nov 2022' },
  { initials: 'MM', color: 'bg-purple-600', name: 'MedMax Pharma',         sector: 'PHARMACEUTICALS',       email: 'billing@medmax.com',              orders: 32,  ltv: '$18,400.00',  join: '15 May 2024' },
]

const activity = [
  { company: 'Global Logistics Co.', event: 'placed a new bulk order for 5,000 Heavy Duty Pallet Wraps.', time: '2 hours ago', ref: '#ORD-9921', dot: 'bg-primary' },
  { company: 'MedMax Pharma',        event: 'updated their technical specifications for sterile liners.', time: '5 hours ago', ref: 'Engineering Dept.', dot: 'bg-[#e55100]' },
  { company: 'Apex Solutions Ltd.',   event: 'completed payment for Q2 standing orders.', time: 'Yesterday', ref: 'Invoice #INV-882', dot: 'bg-secondary' },
]

const AdminCustomers = () => {
  const [industryFilter, setIndustryFilter] = useState('All Sectors')

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-headline-lg text-on-surface">Customer Management</h1>
          <p className="text-body-md text-on-surface-variant mt-1">
            Manage 1,284 registered B2B clients and their technical specifications.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline rounded bg-white text-label-md font-mono text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#e55100] text-white text-label-md font-semibold rounded border border-[#bf3c00] shadow-[0px_2px_0px_#7a2400] hover:-translate-y-0.5 hover:bg-[#bf3c00] transition-all">
            + Add New Client
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'ACTIVE ACCOUNTS',    value: '1,102', sub: '↑ +4.2% this month',       subColor: 'text-green-600', accentColor: 'border-l-secondary' },
          { label: 'TOTAL REVENUE (LTV)', value: '$2.4M',  sub: 'Avg. $2.1k per client',   subColor: 'text-on-surface-variant', accentColor: 'border-l-primary' },
          { label: 'PENDING APPROVALS',   value: '28',     sub: '12 require urgent review', subColor: 'text-red-600',   accentColor: 'border-l-[#e55100]' },
          { label: 'NEW QUOTE REQUESTS',  value: '142',    sub: '↑ High conversion rate',  subColor: 'text-green-600', accentColor: 'border-l-green-400' },
        ].map(({ label, value, sub, subColor, accentColor }) => (
          <div key={label} className={`bg-white rounded border border-gray-200 border-l-4 ${accentColor} p-4`}>
            <p className="text-label-sm font-mono uppercase tracking-wider text-on-surface-variant mb-1">{label}</p>
            <p className="text-headline-lg font-bold text-on-surface">{value}</p>
            <p className={`text-label-sm font-mono mt-1 ${subColor}`}>{sub}</p>
          </div>
        ))}
      </div>

      {/* Customer Table */}
      <div className="bg-white rounded border border-gray-200 overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-200">
          <span className="text-label-sm font-mono text-on-surface-variant">Filter by Industry:</span>
          <select
            value={industryFilter}
            onChange={e => setIndustryFilter(e.target.value)}
            className="px-3 py-1.5 border border-gray-200 rounded text-label-md font-mono text-on-surface bg-white focus:outline-none focus:border-primary"
          >
            {['All Sectors', 'E-Commerce', 'Food & Beverage', 'Construction', 'Pharmaceuticals'].map(s => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <div className="ml-auto flex items-center gap-2">
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-[#f9fafb]">
              {['CUSTOMER / BUSINESS', 'EMAIL', 'TOTAL ORDERS', 'LIFETIME VALUE', 'JOIN DATE', ''].map((h, i) => (
                <th key={i} className="px-5 py-3 text-left text-label-sm font-mono uppercase tracking-wider text-on-surface-variant">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {customers.map((c) => (
              <tr key={c.email} className="hover:bg-[#f9fafb] transition-colors">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded ${c.color} text-white text-label-sm font-bold flex items-center justify-center flex-shrink-0`}>
                      {c.initials}
                    </div>
                    <div>
                      <p className="text-body-md font-bold text-on-surface">{c.name}</p>
                      <p className="text-label-sm font-mono text-secondary mt-0.5 uppercase tracking-wider">{c.sector}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-label-md font-mono text-on-surface-variant">{c.email}</td>
                <td className="px-5 py-4">
                  <span className="px-2.5 py-1 bg-gray-100 text-on-surface text-label-sm font-mono rounded border border-gray-200">
                    {c.orders} Orders
                  </span>
                </td>
                <td className="px-5 py-4 text-body-md font-mono font-bold text-primary">{c.ltv}</td>
                <td className="px-5 py-4 text-label-md font-mono text-on-surface-variant">{c.join}</td>
                <td className="px-5 py-4">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 bg-[#f9fafb]">
          <p className="text-label-sm font-mono text-on-surface-variant">Showing 1 to 4 of 1,284 clients</p>
          <div className="flex items-center gap-2">
            <button className="p-2 border border-gray-200 rounded text-on-surface-variant hover:border-primary transition-colors disabled:opacity-40" disabled>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            {[1, 2, 3].map(n => (
              <button key={n} className={`w-8 h-8 rounded text-label-md font-mono border ${n === 1 ? 'bg-primary text-white border-primary' : 'border-gray-200 text-on-surface-variant hover:border-primary'}`}>{n}</button>
            ))}
            <button className="p-2 border border-gray-200 rounded text-on-surface-variant hover:border-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom panels */}
      <div className="grid grid-cols-2 gap-4">
        {/* Recent Activity */}
        <div className="bg-white rounded border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-body-md font-bold text-on-surface">Recent Client Activity</h3>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            {activity.map(({ company, event, time, ref, dot }) => (
              <div key={ref} className="flex gap-3">
                <div className={`w-2 h-2 rounded-full ${dot} mt-2 flex-shrink-0`} />
                <div>
                  <p className="text-label-md text-on-surface">
                    <strong>{company}</strong> {event}
                  </p>
                  <p className="text-label-sm font-mono text-on-surface-variant mt-0.5">{time} · Ref: {ref}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Support */}
        <div className="bg-primary rounded p-5 text-white">
          <h3 className="text-body-md font-bold mb-2">Technical Support</h3>
          <p className="text-label-md font-mono text-white/70 mb-5">
            Clients awaiting technical material data sheets or custom mold approvals.
          </p>
          <div className="space-y-2.5 mb-5">
            {[
              { label: 'Pending Approval',  value: '14', color: 'text-white' },
              { label: 'Custom Inquiries',  value: '09', color: 'text-white' },
              { label: 'SLA Breaches',      value: '02', color: 'text-red-400', badge: true },
            ].map(({ label, value, color, badge }) => (
              <div key={label} className="flex items-center justify-between bg-white/10 rounded px-4 py-2.5">
                <span className="text-label-md font-mono text-white/80">{label}</span>
                <span className={`text-label-md font-mono font-bold ${color} ${badge ? 'px-2 py-0.5 bg-red-500 text-white rounded text-label-sm' : ''}`}>
                  {value}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full py-2.5 bg-white text-primary font-bold text-label-md rounded hover:bg-gray-100 transition-colors">
            Launch Support Portal
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminCustomers
