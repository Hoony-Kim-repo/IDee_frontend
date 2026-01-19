import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FullScreenLoader from "../components/system/FullScreenLoader";
import { useProfile } from "../hooks/useProfile";

/**
 * PostLoginGate
 * - Handles post-login user flow
 * Assumes authentication is already guaranteed (use AuthGate for that)
 */
const PostLoginGate = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const fromAuth = location.state?.fromAuth;

  const { profile, isLoading } = useProfile();

  useEffect(() => {
    // Only handle routing for root path
    if (location.pathname !== "/") {
      return;
    }

    if (!fromAuth || isLoading) return;

    // Root path logic
    if (!profile) {
      navigate("/dashboard/create", {
        replace: true,
        state: { fromAuth: true },
      });
    } else {
      navigate("/dashboard", { replace: true, state: { fromAuth: true } });
    }
  }, [location.pathname, fromAuth, isLoading, navigate, profile]);

  if (isLoading && location.pathname === "/") return <FullScreenLoader />;

  return children;
};

export default PostLoginGate;
