import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../constants/queryKeys";
import { api } from "../lib/axios";
import { useAuth } from "./useAuth";

/*
    Fetches the authenticated user's profile from backend.
    - Assumes Firebase ID token is attached via Axios interceptor.
    - Returns 404 if profile does not exist.
*/
const fetchMyProfile = async () => {
  const response = await api.get("/profile/me");
  return response.data;
};

const useProfile = () => {
  const { user, loading: authLoading } = useAuth();

  const query = useQuery({
    queryKey: QUERY_KEYS.PROFILE,
    queryFn: fetchMyProfile,
    retry: false,
    enabled: !!user && !authLoading,
    suspense: false,
  });

  const profile = query.data || null;

  const displayName = profile?.nickname || profile?.fullName || "Anonymous";

  return {
    ...query,
    profile,
    displayName,
    hasProfile: !!profile,
  };
};

export { useProfile };
