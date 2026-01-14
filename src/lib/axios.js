import axios from "axios";
import { tokenRef } from "../Auth/tokenRef";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
});

api.interceptors.request.use(
  async (config) => {
    const token = tokenRef.current;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
