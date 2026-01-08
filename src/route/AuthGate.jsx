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

import { Navigate } from "@tanstack/react-router";
import FullScreenLoader from "../components/system/FullScreenLoader";
import { useAuth } from "../hooks/useAuth";
import { useProfile } from "../hooks/useProfile";

const AuthGate = ({ children }) => {
  const { user, loading: authLoading } = useAuth();
  const {
    isLoading: profileLoading,
    isError: profileError,
    profile,
  } = useProfile();

  if (authLoading || profileLoading) {
    return <FullScreenLoader />;
  }

  if (!user) {
    return <Navigate to={"/auth/login"} replace />;
  }

  if (!profile && !profileLoading && !profileError) {
    return <Navigate to={"/dashboard/create"} replace />;
  }

  return children;
};

export default AuthGate;
