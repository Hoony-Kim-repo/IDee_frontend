import DashboardLayout from "../layouts/DashboardLayout";
import CreateDashboard from "../pages/Dashboard/CreateDashboard";
import MyDashboard from "../pages/Dashboard/MyDashboard";
import DashboardRouteGuard from "./DashboardRouteGuard";

const DashboardRoutes = [
  {
    path: "/dashboard",
    Component: DashboardRouteGuard,
    children: [
      {
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
    ],
  },
];

export default DashboardRoutes;
