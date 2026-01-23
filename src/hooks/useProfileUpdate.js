import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../constants/queryKeys";
import { api } from "../lib/axios";

/**
 * useProfileUpdate
 * - Handles profile update mutations
 * - Uses optimistic update for better UX
 */
const useProfileUpdate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload) => {
      // PATCH is preferred for partial updates
      const response = await api.patch("/profile/me", payload);
      return response.data;
    },

    // Optimistic update
    onMutate: async (newProfile) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.PROFILE,
      });

      // Snapshot previous value
      const previousProfile = queryClient.getQueryData(QUERY_KEYS.PROFILE);

      // Optimistically update cache
      queryClient.setQueryData(QUERY_KEYS.PROFILE, (old) => ({
        ...old,
        ...newProfile,
      }));

      return { previousProfile };
    },

    // Rollback on error
    onError: (_err, _newProfile, context) => {
      if (context?.previousProfile) {
        queryClient.setQueryData(QUERY_KEYS.PROFILE, context.previousProfile);
      }
    },

    // Always refetch after success or error
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.PROFILE,
      });
    },
  });
};

export { useProfileUpdate };
