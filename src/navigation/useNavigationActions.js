import { useNavigate } from "react-router-dom";

const useNavigationActions = () => {
  const navigate = useNavigate();

  const goHome = () => navigate("/", { replace: true });
  const goDashboard = () => navigate("/dashboard");

  return {
    goHome,
    goDashboard,
  };
};

export { useNavigationActions };
