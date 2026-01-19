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
    if (!fromAuth || isLoading) return;

    // Root path logic
    if (!profile) {
      navigate("/dashboard/create", { replace: true });
    } else {
      navigate("/dashboard", { replace: true });
    }
  }, [fromAuth, isLoading, navigate, profile]);

  if (isLoading) return <FullScreenLoader />;

  return children;
};

export default PostLoginGate;
