import DashboardLayout from "../layouts/DashboardLayout";
import CreateDashboard from "../pages/Dashboard/CreateDashboard";

const DashboardRoutes = [
  {
    Component: DashboardLayout,
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
