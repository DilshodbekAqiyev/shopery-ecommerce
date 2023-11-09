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
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'

// Layouts
import RootLayout from './components/layouts/RootLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import UserAddress from './pages/Dashboard/components/UserAddress'
import DashboardInfo from './pages/Dashboard/components/DashboardInfo'
import OrderDetail from './pages/Dashboard/components/OrderDetail'

//Contexts
import ShopProvider from './contexts/shop/ShopContext'

import Index from './pages/Blog/Index'
import BlogCards from './pages/Blog/components/BlogCards'
import SingleBlog from './pages/Blog/Single Blog/SingleBlog'

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />

        <Route path="blog" element={<Index />}>
          <Route index element={<BlogCards />}></Route>
          <Route path="SingleBlog/:CardID" element={<SingleBlog />} />
        </Route>
        <Route
          path="shop"
          element={
            <ShopProvider>
              <Shop />
            </ShopProvider>
          }
        />
        <Route path="product/:productID" element={<ProductDetails />} />
        <Route path="sign-in" element={<Signup />} />
        <Route path="sign-up" element={<Signin />} />
        {/* <Route pa
        th="dashboard" element={<Dashboard />}>

          <Route index  element={<DashboardInfo/>} />
          <Route path="order-history" element = {<OrderHistory/>}>
          <Route path="order-detail" element= {<OrderDetail></OrderDetail>}></Route>
          </Route>
          <Route path="wishlist" element={<UserAddress />} />
        </Route> */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardInfo />} />
          {/* <Route path="order-history" element={<OrderHistory  />}> */}
          <Route path="order-history" element={<OrderDetail />}>
            <Route path="order-detail" index element={<OrderDetail></OrderDetail>} />
          </Route>
          <Route path="wishlist" element={<UserAddress />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="shopping-cart" element={<ShoppingCart />} />
        <Route path="PageNotFound" element={<PageNotFound />} />
        {/* <Route path="*" element={<Navigate to={'/PageNotFound'} />} /> */}
      </Route>
    )
  )

  return <RouterProvider router={routes} />
}
