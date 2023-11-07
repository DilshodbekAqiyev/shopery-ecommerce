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

// Layouts
import RootLayout from './components/layouts/RootLayout'

//Contexts
import ShopProvider from './contexts/shop/ShopContext'
import Blog from './pages/Blog'

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route
          path="shop"
          element={
            <ShopProvider>
              <Shop />
            </ShopProvider>
          }
        />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="sign-in" element={<Signup />} />
        <Route path="sign-up" element={<Signin />} />

        <Route path="about" element={<About />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="PageNotFound" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to={'/PageNotFound'} />} />
      </Route>
    )
  )

  return <RouterProvider router={routes} />
}
