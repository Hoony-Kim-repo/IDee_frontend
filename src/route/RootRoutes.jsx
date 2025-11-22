import ErrorLayout from "../layouts/ErrorLayout";
import RootLayout from "../layouts/RootLayout";
import { AuthActions } from "../pages/Authentication/Actions";
import LoginPage from "../pages/Authentication/Login/Login";
import SignupPage from "../pages/Authentication/Signup/SignupPage";
import Example from "../pages/example/Example";
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
        path: "example",
        Component: Example,
      },
      {
        path: "login",
        Component: LoginPage,
        action: AuthActions,
      },
      {
        path: "Signup",
        Component: SignupPage,
        action: AuthActions,
      },
    ],
  },
];

export default RootRoutes;
