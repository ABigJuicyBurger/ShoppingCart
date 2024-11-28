import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import Shop from "./components/Shop.tsx";
import WelcomeMessage from "./components/WelcomeMessage.tsx";
import Products from "./components/Products.tsx";
// import Shop from "./components/Shop.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <WelcomeMessage />,
      },
      {
        path: "/shop",
        element: <Shop />,
        children: [
          {
            path: "/shop/item/:id",
            element: <Products />,
          },
        ],
      },
      {
        path: "/cart",
        // element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
