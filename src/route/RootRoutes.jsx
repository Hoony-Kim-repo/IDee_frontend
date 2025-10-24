import ErrorLayout from "../layouts/ErrorLayout";
import RootLayout from "../layouts/RootLayout";
import Example from "../pages/example/Example";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";

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
        path: "example",
        Component: Example,
      },
      {
        path: "login",
        Component: LoginPage,
      }
    ],
  },
];

export default RootRoutes;
