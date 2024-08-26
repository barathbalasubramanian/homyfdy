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
      <Profile/>
    ),
  },
  {
    path: "/properties",
    element: (
      <PropertiesPage/>
    ),
  },
  {
    path: "/about",
    element: (
      <About/>
    ),
  },
  {
    path: "/compare",
    element: (
      <ComparePage/>
    ),
  },
  {
    path: "/connect",
    element: (
      <Connect/>
    ),
  },
  {
    path: "/propertydetails",
    element: (
      <PropertyDetails/>
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
