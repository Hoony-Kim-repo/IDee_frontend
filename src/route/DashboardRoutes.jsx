import DashboardLayout from "../layouts/DashboardLayout";
import CreateDashboard from "../pages/Dashboard/CreateDashboard";
import MyDashboard from "../pages/Dashboard/MyDashboard";

const DashboardRoutes = [
  {
    Component: DashboardLayout,
    path: "/dashboard",
    children: [
      {
        index: true,
        Component: MyDashboard,
      },
      {
        path: "create",
        Component: CreateDashboard,
      },
    ],
  },
];

export default DashboardRoutes;
