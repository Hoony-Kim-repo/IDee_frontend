import ErrorLayout from "../layouts/ErrorLayout";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";

const RootRoutes = [
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
];

export default RootRoutes;
