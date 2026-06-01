import { Routes, Route } from 'react-router-dom'

// Public layout + pages
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CustomOrderPage from './pages/CustomOrderPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import OrdersPage from './pages/OrdersPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

// Admin layout + pages
import AdminLayout from './admin/AdminLayout'
import AdminDashboard from './admin/pages/AdminDashboard'
import AdminOrders from './admin/pages/AdminOrders'
import AdminCustomRequests from './admin/pages/AdminCustomRequests'
import AdminInventory from './admin/pages/AdminInventory'
import AdminCustomers from './admin/pages/AdminCustomers'

function App() {
  return (
    <Routes>
      {/* ── Public site ──────────────────────────── */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:slug" element={<ProductDetailPage />} />
        <Route path="custom-order" element={<CustomOrderPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      {/* ── Admin panel ──────────────────────────── */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="custom-requests" element={<AdminCustomRequests />} />
        <Route path="inventory" element={<AdminInventory />} />
        <Route path="customers" element={<AdminCustomers />} />
      </Route>
    </Routes>
  )
}

export default App