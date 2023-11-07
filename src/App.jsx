import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'
import Shop from './pages/Shop'
import Index from './pages/Blog'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Signup from './pages/Auth/Signup'
import Signin from './pages/Auth/Signin'
import PageNotFound from './components/common/PageNotFound'
import About from './pages/About/About'

// Layouts
import RootLayout from './components/layouts/RootLayout'

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Index />} />
        <Route path="products/:productID" element={<ProductDetails />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Signup />} />
        <Route path="sign-up" element={<Signin />} />
        <Route path="about" element={<About />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={routes} />
}
