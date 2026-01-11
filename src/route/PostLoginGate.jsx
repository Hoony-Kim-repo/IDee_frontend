import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useProfile } from "../hooks/useProfile";

const PostLoginGate = ({ children }) => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const {
    profile,
    loading: profileLoading,
    isError,
  } = useProfile({
    enabled: !!user, // fetch profile only when logged in
  });

  useEffect(() => {
    if ((authLoading, profileLoading)) return;

    if (user && !profile && isError) {
      navigate("/dashboard/create", { replace: true });
    }
  }, [user, profile, authLoading, profileLoading, isError, navigate]);

  return children;
};

export default PostLoginGate;
