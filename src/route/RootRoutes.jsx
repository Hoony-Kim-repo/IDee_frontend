import ErrorLayout from "../layouts/ErrorLayout";
import RootLayout from "../layouts/RootLayout";
import Example from "../pages/example/Example";
import Home from "../pages/Home/Home";
import { AuthActions } from "../pages/LoginSignup/Actions";
import LoginPage from "../pages/LoginSignup/Login/Login";
import SignupPage from "../pages/LoginSignup/Signup/SignupPage";

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
