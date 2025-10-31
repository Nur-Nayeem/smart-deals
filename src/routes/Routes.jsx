import { createBrowserRouter } from "react-router";
import RootLayoute from "../Layoutes/RootLayoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayoute,
    children: [
      {
        index: true,
        element: <h3>Home</h3>,
      },
      {
        path: "products",
        element: <h3>Products</h3>,
      },
    ],
  },
]);

export default router;
