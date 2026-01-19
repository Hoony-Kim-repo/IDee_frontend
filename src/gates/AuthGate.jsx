import { Navigate } from "react-router-dom";
import FullScreenLoader from "../components/system/FullScreenLoader";
import { useAuth } from "../hooks/useAuth";

/**
 * AuthGate
 * - Ensures the user is authenticated
 * - Does NOT handle profile or post-login routing.
 */
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
