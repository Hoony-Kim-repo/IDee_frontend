import { useNavigate } from "react-router-dom";
import { useProfile } from "../hooks/useProfile";

const useNavigationActions = () => {
  const navigate = useNavigate();
  const { profile } = useProfile();

  const goHome = () => navigate("/", { replace: true });
  const goDashboard = () => {
    if (!profile) navigate("/dashboard/create");
    else navigate("/dashboard");
  };

  return {
    goHome,
    goDashboard,
  };
};

export { useNavigationActions };
