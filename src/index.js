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
import Connect from "./pages/Contect.js/Connect";

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
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
