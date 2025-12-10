import ErrorLayout from "../layouts/ErrorLayout";
import RootLayout from "../layouts/RootLayout";
import LoginPage from "../pages/Authentication/Login/LoginPage";
import SignupPage from "../pages/Authentication/Signup/SignupPage";
import EmailVerificationCompletedPage from "../pages/Authentication/VerificationCompleted/EmailVerificationCompletedPage";
import VerifyEmailPage from "../pages/Authentication/VerifyEmail/VerifyEmailPage";
import Example from "../pages/example/Example";
import Home from "../pages/Home/Home";
import { requireAuth } from "./routeGuards";

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
      },
      {
        path: "Signup",
        Component: SignupPage,
      },
      {
        path: "verify-email",
        Component: VerifyEmailPage,
        // loader: requireAuth,
      },
      {
        path: "email-verification-completed",
        Component: EmailVerificationCompletedPage,
        loader: requireAuth,
      },
    ],
  },
];

export default RootRoutes;
