/*
    This component runs ONCE after authentication is resolved.
    Responsibilities:
    - Ensure user is authenticated
    - Fetch profile data
    - Decide initial route based on profile existence

    IMPORTANT:
    - This component should wrap protected routes only.
    - No UI logic beyond loading state.
*/

import { Navigate } from "react-router-dom";
import FullScreenLoader from "../components/system/FullScreenLoader";
import { useAuth } from "../hooks/useAuth";

const AuthGate = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <FullScreenLoader />;
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default AuthGate;
