// routerConfig.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./PublicRoutes";

const router = createBrowserRouter([...publicRoutes]);

export default router;