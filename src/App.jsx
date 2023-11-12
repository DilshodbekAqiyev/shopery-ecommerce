import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Navigate } from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'

import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Signup from './pages/Auth/Signup'
import Signin from './pages/Auth/Signin'
import PageNotFound from './pages/PageNotFound'
import About from './pages/About/About'
import Checkout from './pages/Checkout/Checkout'
import Wishlist from './pages/Wishlist/Wishlist'
import Faqs from './pages/Faqs/Faqs'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'

// Layouts
import RootLayout from './components/layouts/RootLayout'
import Index from './pages/Blog/Index'
import ShopProvider from './contexts/shop/ShopContext'

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="shopping-cart" element={<ShoppingCart />} />
        <Route path="faqs" element={<Faqs />} />
      </Route>
    )
  )

  return <RouterProvider router={routes} />
}