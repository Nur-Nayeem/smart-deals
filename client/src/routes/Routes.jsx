import { createBrowserRouter } from "react-router";
import RootLayoute from "../Layoutes/RootLayoute";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import MyBids from "../pages/MyBids";
import CreateProduct from "../pages/CreateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayoute,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "products",
        Component: Products,
      },
      {
        path: "products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/products/${params.id}`),
        hydrateFallbackElement: <h2>Loading...</h2>,
      },
      {
        path: "my-products",
        element: (
          <PrivateRoute>
            <h3>My Products</h3>
          </PrivateRoute>
        ),
      },
      {
        path: "my-bids",
        element: (
          <PrivateRoute>
            <MyBids />
          </PrivateRoute>
        ),
      },
      {
        path: "create-product",
        element: (
          <PrivateRoute>
            <CreateProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "auth/login",
        Component: LoginPage,
      },
      {
        path: "auth/register",
        Component: RegisterPage,
      },
    ],
  },
]);

export default router;
