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

// Layouts
import RootLayout from "./components/layouts/RootLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserAddress from "./pages/Dashboard/components/UserAddress";
import DashboardInfo from "./pages/Dashboard/components/DashboardInfo";
import OrderDetail from "./pages/Dashboard/components/OrderDetail";
import OrderHistory from "./pages/Dashboard/components/OrderHistory";

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="products" element={<ProductDetails />} />
        <Route path="shop" element={<Shop />} />
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
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}
