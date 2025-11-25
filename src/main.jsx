import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//router components
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import HomePage from "./pages/home.jsx";
import ClickCounter from "./pages/click-counter.jsx";
import ProductList from "./pages/productlist.jsx";
import UserFetcher from "./pages/data-fetcher.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "task 1",
        element: <ClickCounter />,
      },
      {
        path: "task 2",
        element: <ProductList />,
      },
      {
        path: "task 3",
        element: <UserFetcher />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
