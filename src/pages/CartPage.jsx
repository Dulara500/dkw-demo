import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const CartPage = () => {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'HDPE Carry Bags',         specs: { size: '12×18 in', thickness: '50 µm' }, price: 2.50, quantity: 500,  image: '/cat_polythene.png' },
    { id: 2, name: 'Heavy Duty Garbage Bags',  specs: { size: '24×36 in', thickness: '80 µm' }, price: 5.00, quantity: 200,  image: '/cat_garbage.png' },
    { id: 3, name: 'Ziplock Pouches',           specs: { size: '6×8 in',   thickness: '40 µm' }, price: 1.50, quantity: 1000, image: '/prod_ziplock.png' },
  ])

  const updateQty = (id, qty) => { if (qty < 1) return; setCartItems(p => p.map(i => i.id === id ? { ...i, quantity: qty } : i)) }
  const remove    = (id) => setCartItems(p => p.filter(i => i.id !== id))

  const subtotal = cartItems.reduce((s, i) => s + i.price * i.quantity, 0)
  const tax      = subtotal * 0.18
  const total    = subtotal + tax

  if (cartItems.length === 0) return (
    <div className="bg-surface min-h-screen flex flex-col items-center justify-center py-20 gap-6">
      <svg className="w-20 h-20 text-outline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <h2 className="text-headline-lg text-on-surface">Your cart is empty</h2>
      <p className="text-body-md text-on-surface-variant">Browse our products and add items to your cart</p>
      <button
        onClick={() => navigate('/products')}
        className="px-6 py-3 bg-primary text-white font-bold rounded border border-primary-container shadow-[0px_2px_0px_#001040] hover:-translate-y-0.5 transition-all"
      >
        Browse Products
      </button>
    </div>
  )

  const user=useAuth();

  {
    if(!user || !user.user){
        return(
            <div
            className='bg-surface min-h-screen flex flex-col items-center justify-center py-20 gap-6'
            >
                <h2 className='text-headline-lg text-on-surface'>Please Login to Continue</h2>
                <p className='text-body-md text-on-surface-variant'>Browse our products and add items to your cart</p>
                <button
                onClick={() => navigate('/login')}
                className='px-6 py-3 bg-primary text-white font-bold rounded border border-primary-container shadow-[0px_2px_0px_#001040] hover:-translate-y-0.5 transition-all'
                >
                    Login
                </button>
                
            </div>
        )
    }
  }

  return(
    <div className="bg-surface min-h-screen">
      {/* Page header */}
      <div className="bg-primary text-white py-10">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <h1 className="text-headline-lg text-white">Shopping Cart</h1>
          <p className="text-body-md text-white/70 mt-1">{cartItems.length} items in your cart</p>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4 md:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-3">
            {cartItems.map((item, i) => (
              <div key={item.id} className={`border border-outline-variant rounded-md overflow-hidden ${i % 2 === 1 ? 'bg-[#f9fafb]' : 'bg-white'}`}>
                <div className="flex gap-4 p-4">
                  {/* Image */}
                  <div className="w-20 h-20 rounded border border-outline-variant flex-shrink-0 overflow-hidden bg-surface-container">
                    {item.image
                      ? <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      : <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-outline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                    }
                  </div>

                  {/* Info */}
                  <div className="flex-grow min-w-0">
                    <h3 className="text-body-md font-bold text-on-surface mb-1">{item.name}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-0.5 mb-3">
                      {Object.entries(item.specs).map(([k, v]) => (
                        <span key={k} className="text-label-sm font-mono text-on-surface-variant">{k}: {v}</span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 flex-wrap">
                      {/* Qty controls */}
                      <div className="flex items-center border border-outline rounded overflow-hidden">
                        <button onClick={() => updateQty(item.id, item.quantity - 100)}
                          className="px-3 py-2 hover:bg-surface-container text-on-surface transition-colors">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <input
                          type="number" value={item.quantity}
                          onChange={e => updateQty(item.id, parseInt(e.target.value) || 1)}
                          className="w-20 text-center border-x border-outline py-2 bg-transparent font-mono text-label-md focus:outline-none"
                        />
                        <button onClick={() => updateQty(item.id, item.quantity + 100)}
                          className="px-3 py-2 hover:bg-surface-container text-on-surface transition-colors">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>

                      {/* Line total */}
                      <div className="ml-auto text-right">
                        <p className="text-body-md font-mono font-bold text-primary">₹{(item.price * item.quantity).toFixed(2)}</p>
                        <p className="text-label-sm font-mono text-on-surface-variant">₹{item.price.toFixed(2)}/unit</p>
                      </div>

                      {/* Remove */}
                      <button onClick={() => remove(item.id)} className="p-2 text-error hover:bg-red-50 rounded transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white border border-outline-variant rounded-md overflow-hidden sticky top-20">
              <div className="bg-primary px-5 py-3">
                <h2 className="text-label-md font-mono font-bold uppercase tracking-wider text-white">Order Summary</h2>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex justify-between text-body-md">
                  <span className="text-on-surface-variant">Subtotal</span>
                  <span className="font-mono text-on-surface">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-body-md">
                  <span className="text-on-surface-variant">GST (18%)</span>
                  <span className="font-mono text-on-surface">₹{tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-outline-variant pt-3">
                  <div className="flex justify-between">
                    <span className="text-body-md font-bold text-on-surface">Total</span>
                    <span className="text-headline-md font-mono font-bold text-primary">₹{total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full py-3 bg-[#e55100] text-white font-bold text-body-md rounded border border-[#bf3c00] shadow-[0px_2px_0px_#7a2400] hover:-translate-y-0.5 hover:bg-[#bf3c00] transition-all mt-2"
                >
                  PROCEED TO CHECKOUT
                </button>
                <button
                  onClick={() => navigate('/products')}
                  className="w-full py-2.5 border border-outline text-on-surface-variant font-mono text-label-md hover:border-primary hover:text-primary rounded transition-colors"
                >
                  Continue Shopping
                </button>

                <div className="bg-surface-container-low rounded p-3 border border-outline-variant mt-2">
                  <p className="text-label-sm font-mono text-secondary">✓ Free delivery on orders above ₹10,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage