import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./pages/Home";
import AuthProvider from "./providers/AuthProvider";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";
import PrivateRoute from "./private/PrivateRoute";
import MyCart from "./pages/MyCart";
import BrandPage from "./pages/BrandPage";
import ProductDetails from "./pages/ProductDetails";
import Update from "./pages/Update";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://techwave-server-h2fyqkqh6-tarek-ibn-khayers-projects.vercel.app/brands"
          ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/brands/:brandName",
        element: <BrandPage></BrandPage>,
        loader: ({ params }) =>
          fetch(
            `https://techwave-server-h2fyqkqh6-tarek-ibn-khayers-projects.vercel.app/brands/${params.brandName}`
          ),
      },
      {
        path: "/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(
            `https://techwave-server-h2fyqkqh6-tarek-ibn-khayers-projects.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://techwave-server-h2fyqkqh6-tarek-ibn-khayers-projects.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
