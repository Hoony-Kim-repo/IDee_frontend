import LoginPage from "../pages/Authentication/Login/LoginPage";
import SignupPage from "../pages/Authentication/Signup/SignupPage";
import EmailVerificationCompletedPage from "../pages/Authentication/VerificationCompleted/EmailVerificationCompletedPage";
import VerifyEmailPage from "../pages/Authentication/VerifyEmail/VerifyEmailPage";
import { requireAuth } from "./routeGuards";

const AuthRoutes = [
  {
    path: "auth",
    children: [
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "signup",
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

export default AuthRoutes;
