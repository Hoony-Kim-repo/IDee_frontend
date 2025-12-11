import CreateDashboard from "../pages/Dashboard/CreateDashboard";

const DashboardRoutes = [
  {
    path: "/dashboard",
    children: [
      {
        path: "create",
        Component: CreateDashboard,
      },
    ],
  },
];

export default DashboardRoutes;
