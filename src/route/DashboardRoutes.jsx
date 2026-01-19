import DashboardLayout from "../layouts/DashboardLayout";
import CreateDashboard from "../pages/Dashboard/CreateDashboard";
import MyDashboard from "../pages/Dashboard/MyDashboard";

const DashboardRoutes = [
  {
    path: "/dashboard",
    Component: DashboardLayout,
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
