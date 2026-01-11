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

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FullScreenLoader from "../components/system/FullScreenLoader";
import { useAuth } from "../hooks/useAuth";
import { useProfile } from "../hooks/useProfile";

const AuthGate = ({ children }) => {
  const { user, loading: authLoading } = useAuth();
  const {
    isLoading: profileLoading,
    // isError: profileError,
    profile,
  } = useProfile();
  const navigate = useNavigate();

  useEffect(() => {
    if (authLoading || profileLoading) return;

    if (!user) {
      navigate("/auth/login", { replace: true });
      return;
    }

    if (!profile) {
      navigate("/dashboard/create", { replace: true });
      return;
    }
  }, [user, profile, authLoading, profileLoading, navigate]);

  if (authLoading || profileLoading) {
    return <FullScreenLoader />;
  }

  return children;
};

export default AuthGate;
