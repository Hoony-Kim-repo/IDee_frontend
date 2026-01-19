import { Outlet } from "react-router-dom";
import AuthGate from "../gates/AuthGate";
import DashboardProfileGate from "../gates/DashboardProfileGate";

/**
 * DashboardRouteGuard
 * - Applied at route level
 * - Combines auth and profile rules for dashboard routers
 */

const DashboardRouteGuard = () => {
  return (
    <AuthGate>
      <DashboardProfileGate>
        <Outlet />
      </DashboardProfileGate>
    </AuthGate>
  );
};

export default DashboardRouteGuard;
