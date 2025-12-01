import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//router components
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import HomePage from "./pages/home.jsx";
import Outline from "./pages/outline.jsx";
import ClickCounter from "./pages/click-counter.jsx";
import ArithemeticOperator from "./pages/arithmetic-operator.jsx";
import ProductList from "./pages/productlist.jsx";
import UserFetcher from "./pages/data-fetcher.jsx";
import Navigate from "./pages/navigation.jsx";
import ThemeToggle from "./pages/theme-toggle.jsx";

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
        path: "outline",
        element: <Outline/>
      },
      {
        path: "task-1",
        element: <ClickCounter />,
      },
      {
        path: "task-2",
        element: <ArithemeticOperator/>,
      },
      {
        path: "task-3",
        element: <ProductList />,
      },
      {
        path: "task-4",
        element: <UserFetcher />,
      },
      {
        path: "task-5",
        element: <Navigate/>,
      },
      {
        path: "task-6",
        element: <ThemeToggle/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
