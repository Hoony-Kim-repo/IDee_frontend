import DashboardLayout from "../layouts/DashboardLayout";
import CreateDashboardTwo from "../pages/Dashboard/CreateDashboardTwo";
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
            Component: CreateDashboardTwo,
          },
        ],
      },
    ],
  },
];

export default DashboardRoutes;
