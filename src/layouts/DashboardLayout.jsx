import { Outlet } from "react-router-dom";
import AuthGate from "../route/AuthGate";

const DashboardLayout = () => {
  return (
    <AuthGate>
      <Outlet />
    </AuthGate>
  );
};

export default DashboardLayout;
