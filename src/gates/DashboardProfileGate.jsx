import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useProfile } from "../hooks/useProfile";

/**
 * DashboardProfileGate
 * - Enforces dashboard access rules based on profile existence
 * - Redirects ONLY when current route is invalid
 */
const DashboardProfileGate = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { profileStatus } = useProfile();

  useEffect(() => {
    if (profileStatus === "unknown") return;

    const normalizedPath = location.pathname.replace(/\/$/, "");
    const dashboardRoot = "/dashboard";
    const createPage = "/dashboard/create";

    // Case 1: Profile exists but user tries to access create page
    if (profileStatus === "exists" && normalizedPath === createPage) {
      navigate(dashboardRoot, { replace: true });
    }
    // Case 2: No profile and user tries to access dashboard → redirect to create
    else if (
      profileStatus === "not_exists" &&
      normalizedPath === dashboardRoot
    ) {
      navigate(createPage, { replace: true });
    }
    // Case 3: All other cases are valid - do nothing
  }, [location.pathname, navigate, profileStatus]);

  return children;
};

export default DashboardProfileGate;
