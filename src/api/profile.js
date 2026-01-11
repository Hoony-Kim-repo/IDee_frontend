/**
 * Create user profile
 * @param {FormData} formData - The profile data to be sent to the server
 * @returns {Promise<Object>} - The response data from the server
 */

import { api } from "../lib/axios";

const createProfile = async (formData) => {
  if (!(formData instanceof FormData)) {
    throw new Error("createProfile expects FormData");
  }

  const response = await api.post("/profile", formData);

  return response.data;
};

export { createProfile };
