import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/home";
import './index.css';
import Profile from "./pages/Contact/contact";
import PropertiesPage from "./pages/properties/propertiesPage";
import About from "./pages/aboutus/About";
import ComparePage from "./pages/compare/ComparePage";
import Connect from "./pages/Contect/Connect";
import PropertyDetails from "./pages/propertydetails/PropertyDetails";
import Admin from "./admin/Admin";
import ProtectedRoute from "./ProtectRoute";
import Blogs from "./pages/blogs/blogs";
import AllBlogs from "./pages/allBlogs/AllBlogs";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile/>
      </ProtectedRoute>
    ),
  },
  {
    path: "/properties",
    element: (
      <ProtectedRoute>
        <PropertiesPage/>
      </ProtectedRoute>
    ),
  },
  {
    path: "/about",
    element: (
      <ProtectedRoute>
        <About/>
      </ProtectedRoute>
    ),
  },
  {
    path: "/compare",
    element: (
      <ProtectedRoute>
        <ComparePage/>
      </ProtectedRoute>
    ),
  },
  {
    path: "/connect",
    element: (
      <ProtectedRoute>
        <Connect/>
      </ProtectedRoute>
    ),
  },
  {
    path: "/propertydetails/:id",
    element: (
      <ProtectedRoute>
        <PropertyDetails/>
      </ProtectedRoute>
    ),
  },
  {
    path: "/blogs",
    element: (
      <AllBlogs/>
    ),
  },
  {
    path: "/blogs/:id",
    element: (
      <Blogs/>
    ),
  },
  {
    path: "/admin",
    element: (
      <Admin/>
    ),
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);




