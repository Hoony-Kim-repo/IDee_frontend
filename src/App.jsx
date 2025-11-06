import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootRoutes from "./route/RootRoutes";
import { clearUser, setUser } from "./store/userSlice";

const router = createBrowserRouter(RootRoutes);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const isUserLoggedIn = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/isLoggedIn`,
          { withCredentials: true } // Sending HttpOnly Cookie
        );
        dispatch(setUser(res.data));
      } catch (err) {
        console.error("Getting status occurs an error: ", err);
        dispatch(clearUser());
      }
    };

    isUserLoggedIn();
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
