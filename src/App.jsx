import {
   createBrowserRouter,
   RouterProvider,
   createRoutesFromElements,
   Route
} from "react-router-dom";

import RootLayout from "./components/layouts";

import Blog from "./pages/Blog/Blog";
import ProductDetails from "./pages/ProductDetails/ProductDetails";


export default function App() {
   const routes = createBrowserRouter(
      createRoutesFromElements(
         <Route path='/' element={<RootLayout />}>
            <Route path='blog' element={<Blog />} />
            <Route path='products' element={<ProductDetails />} />
         </Route>
      )
   )

   return <RouterProvider router={routes} />
}