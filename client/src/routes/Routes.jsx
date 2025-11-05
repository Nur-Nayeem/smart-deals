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
import MyProducts from "../pages/MyProducts";
import Loading from "../components/Loading";
import UpdateProduct from "../pages/UpdateProduct";

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
        path: "my-products",
        element: (
          <PrivateRoute>
            <MyProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "my-products/update-product/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/products/${params.id}`),
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
        path: "auth/login",
        Component: LoginPage,
      },
      {
        path: "auth/register",
        Component: RegisterPage,
      },
    ],
    hydrateFallbackElement: <Loading />,
  },
]);

export default router;
