import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'

import ProductDetails from './pages/ProductDetails/ProductDetails'
import RootLayout from './components/layouts'
import Shop from './pages/Shop'
import Index from './pages/Blog'

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="blog" element={<Index />} />
        <Route path="products" element={<ProductDetails />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    )
  )

  return <RouterProvider router={routes} />
}
