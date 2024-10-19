import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";
import ApexChart1 from "../components/Apex1";
// import ColumnChart from "../components/ColumnChart";
import ApexChart from "../components/Apex";

const PrivateLayout = ({ children }) => {
  return (
    <div style={{ height: "100vh", display: "flex", width: '100%' }}>
      <Sidebar content = {<Outlet />}/>
      
    </div>
  );
};

const privateRoutes = [
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <ApexChart />,
      },
      {
        path: '/line-chart',
        element: <ApexChart1 />
      },
      // {
      //   path: '/column',
      //   element: <ColumnChart />
      // }
    ],
  },
];

export default privateRoutes;
