import ErrorLayout from "../layouts/ErrorLayout";
import RootLayout from "../layouts/RootLayout";
import ExampleFront from "../pages/Example/ExampleFront/ExampleFront";
import Home from "../pages/Home/Home";

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
      {
        path: "/example",
        Component: ExampleFront,
      },
    ],
  },
];

export default RootRoutes;
