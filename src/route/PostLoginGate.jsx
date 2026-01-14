import { useLocation, useNavigate } from "react-router-dom";
import FullScreenLoader from "../components/system/FullScreenLoader";
import { useAuth } from "../hooks/useAuth";
import { useProfile } from "../hooks/useProfile";

const PostLoginGate = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { user, loading: authLoading } = useAuth();
  const { profile, loading: profileLoading } = useProfile({
    enabled: !!user, // fetch profile only when logged in
  });

  if ((authLoading, profileLoading)) return <FullScreenLoader />;

  if (!user) {
    return children;
  }

  if (location.pathname === "/")
    if (!profile) {
      return navigate("/dashboard/create", { replace: true });
    }

  return children;
};

export default PostLoginGate;
