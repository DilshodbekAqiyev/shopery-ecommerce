import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog/Blog";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Signup from "./pages/Auth/Signup";
import Signin from "./pages/Auth/Signin";
import PageNotFound from "./components/common/PageNotFound";
import PageNotFound from './pages/PageNotFound'
import About from './pages/About/About'
import Checkout from './pages/Checkout/Checkout'
import Wishlist from './pages/Wishlist/Wishlist'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'


// Layouts
import RootLayout from "./components/layouts/RootLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserAddress from "./pages/Dashboard/components/UserAddress";
import DashboardInfo from "./pages/Dashboard/components/DashboardInfo";
import OrderDetail from "./pages/Dashboard/components/OrderDetail";
import OrderHistory from "./pages/Dashboard/components/OrderHistory";

//Contexts
import ShopProvider from './contexts/shop/ShopContext'
import Blog from './pages/Blog'
import { useEffect, useState } from 'react'
import { instance } from './utils/apiRequest'

export default function App() {
  // const productContext = createContext()
  const [data, setData] = useState([])

  const getProductData = async () => {
    const data = await instance.get(`products`)
    console.log(data.data)
    setData(data.data)
  }

  useEffect(() => {
    getProductData()
  }, [])

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
        <Route path="product/:id" element={<ProductDetails data={data} />} />
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
          <Route path="order-history" element={<OrderDetail  />}>
            <Route path="order-detail" index element={<OrderDetail></OrderDetail>} />
          </Route>
          <Route path="wishlist" element={<UserAddress />} />
      </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="about" element={<About />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="shopping-cart" element={<ShoppingCart />} />
        <Route path="PageNotFound" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to={'/PageNotFound'} />} />

      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}
