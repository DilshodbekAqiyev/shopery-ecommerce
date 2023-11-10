import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Navigate } from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Index'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Signup from './pages/Auth/Signup'
import Signin from './pages/Auth/Signin'
import PageNotFound from './pages/PageNotFound'
import About from './pages/About/About'
import Checkout from './pages/Checkout/Checkout'
import Wishlist from './pages/Wishlist/Wishlist'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'
import BlogCards from './pages/Blog/components/BlogCards'
import SingleBlog from './pages/Blog/Single Blog/SingleBlog'
import DashboardInfo from './pages/Dashboard/components/DashboardInfo'
import OrderDetail from './pages/Dashboard/components/OrderDetail'
import UserAddress from './pages/Dashboard/components/UserAddress'
import Settings from './pages/Dashboard/components/Settings'
import OrderHistory from './pages/Dashboard/components/OrderHistory'
import History from './pages/Dashboard/components/History'
import Dashboard from './pages/Dashboard/Dashboard'
import AddProduct from './pages/Dashboard/components/AddProduct'

// Layouts
import RootLayout from './components/layouts/RootLayout'
import PrivateRoutes from './components/layouts/PrivateRoutes'

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />}>
          <Route index element={<BlogCards />} />
        </Route>
        <Route path="blog/:CardID" element={<SingleBlog />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:productID" element={<ProductDetails />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="about" element={<About />} />
        <Route path="PageNotFound" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to={'/PageNotFound'} />} />

        <Route element={<PrivateRoutes />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<DashboardInfo />} />
            <Route path="order-history" element={<OrderHistory />}>
              <Route path="history" index element={<History />} />
              <Route path="order-detail" element={<OrderDetail />} />
            </Route>
            <Route path="settings" element={<Settings />} />
            <Route path="wishlist" element={<UserAddress />} />
            <Route path="addProduct" element={<AddProduct />} />
          </Route>
          <Route path="checkout" element={<Checkout />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
        </Route>
      </Route>
    )
  )

  return <RouterProvider router={routes} />
}
