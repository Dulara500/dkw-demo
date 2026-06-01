import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const statusStyles = {
  pending:    'bg-amber-50 text-amber-700 border-amber-200',
  processing: 'bg-blue-50 text-primary border-primary/30',
  shipped:    'bg-teal-50 text-secondary border-secondary/30',
  delivered:  'bg-green-50 text-green-700 border-green-200',
  cancelled:  'bg-red-50 text-error border-error/30',
}

const steps = ['pending', 'processing', 'shipped', 'delivered']

const OrdersPage = () => {
  const [orders] = useState([
    { id: 'ORD-2024-001', date: '2024-01-15', status: 'delivered', items: 3, total: 3725.00 },
    { id: 'ORD-2024-002', date: '2024-01-20', status: 'processing', items: 2, total: 2450.00 },
    { id: 'ORD-2024-003', date: '2024-01-22', status: 'pending',    items: 1, total: 1250.00 },
  ])

  const auth = useAuth()
  

  if (!auth || !auth.user) {
    return (
      <div className="bg-surface min-h-screen flex flex-col items-center justify-center">
        <p className="text-body-md mb-4">You need to be logged in to view your orders.</p>
        <a href="/login" className="px-4 py-2 bg-primary text-white rounded">Login</a>
      </div>
    )
  }

  return (
    <div className="bg-surface min-h-screen">
      {/* Page header */}
      <div className="bg-primary text-white py-10">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <p className="text-label-md font-mono text-white/50 mb-2">DKW / My Orders</p>
          <h1 className="text-headline-lg text-white">Track Orders</h1>
          <p className="text-body-md text-white/70 mt-2">Monitor your order status and history</p>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4 md:px-8 py-8">
        {orders.length === 0 ? (
          <div className="text-center py-20">
            <svg className="w-20 h-20 text-outline mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h2 className="text-headline-lg text-on-surface mb-3">No orders yet</h2>
            <p className="text-body-lg text-on-surface-variant">Start shopping to see your orders here</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order, i) => (
              <div
                key={order.id}
                className={`bg-white border border-outline-variant rounded-md overflow-hidden ${i % 2 === 1 ? 'bg-[#f9fafb]' : 'bg-white'}`}
              >
                {/* Order header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5">
                  <div className="flex items-center gap-4 flex-wrap">
                    <h3 className="text-body-md font-mono font-bold text-on-surface">{order.id}</h3>
                    <span className={`px-2.5 py-0.5 text-label-sm font-mono border rounded ${statusStyles[order.status]}`}>
                      {order.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-label-sm font-mono text-on-surface-variant uppercase">Date</p>
                      <p className="text-label-md font-mono text-on-surface">{new Date(order.date).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-label-sm font-mono text-on-surface-variant uppercase">Items</p>
                      <p className="text-label-md font-mono text-on-surface">{order.items} products</p>
                    </div>
                    <div className="text-right">
                      <p className="text-label-sm font-mono text-on-surface-variant uppercase">Total</p>
                      <p className="text-label-md font-mono font-bold text-primary">₹{order.total.toFixed(2)}</p>
                    </div>

                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 border border-outline text-label-md font-mono text-on-surface-variant hover:border-primary hover:text-primary rounded transition-colors">
                        Details
                      </button>
                      {order.status === 'delivered' && (
                        <button className="px-3 py-1.5 bg-primary text-white text-label-md font-mono rounded border border-primary-container shadow-[0px_2px_0px_#001040] hover:-translate-y-0.5 transition-all">
                          Reorder
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                {order.status !== 'cancelled' && (
                  <div className="px-5 pb-5 border-t border-outline-variant pt-4">
                    <div className="flex items-center justify-between relative">
                      <div className="absolute top-4 left-0 right-0 h-px bg-outline-variant" />
                      {steps.map((step, idx) => {
                        const done = steps.indexOf(order.status) >= idx
                        return (
                          <div key={step} className="flex flex-col items-center relative z-10">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${done ? 'bg-secondary border-secondary' : 'bg-white border-outline-variant'}`}>
                              {done ? (
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <div className="w-2 h-2 rounded-full bg-outline-variant" />
                              )}
                            </div>
                            <p className="text-label-sm font-mono text-on-surface-variant mt-1.5 capitalize">{step}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default OrdersPage