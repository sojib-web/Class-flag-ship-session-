// @ts-nocheck
import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Favorites from "../pages/Favorites/Favorites";
import PhoneDetails from "../pages/PhoneDetails/PhoneDetails";
import About from "../pages/About/About";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/favorites",
        Component: Favorites,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/phone-details",
        Component: PhoneDetails,
      },
    ],
  },
]);
