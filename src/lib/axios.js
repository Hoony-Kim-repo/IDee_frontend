import axios from "axios";
import { auth } from "../Firebase";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
});

api.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser;

    if (user) {
      const token = await user.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
