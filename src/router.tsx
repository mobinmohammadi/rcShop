import { createBrowserRouter } from "react-router";
import ProductPage from "./Page/Product/Page";
import Home from "./Page/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
   {
    path: "/product",
    element: <ProductPage/>,
  },
]);