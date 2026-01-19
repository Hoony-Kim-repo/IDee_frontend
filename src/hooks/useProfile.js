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

  const profile = query.data ?? null;

  let profileStatus = "unknown";

  const displayName = profile?.nickname || profile?.fullName || "Anonymous";

  if (query.isFetched) profileStatus = profile ? "exists" : "not_exists";

  return {
    ...query,
    profile,
    displayName,
    profileStatus,
  };
};

export { useProfile };
