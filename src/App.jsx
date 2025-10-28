import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootRoutes from "./route/RootRoutes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { clearUser, setUser } from "./store/userSlice";

const router = createBrowserRouter(RootRoutes);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
<<<<<<< HEAD
=======
    console.log(import.meta.env.VITE_BACKEND_URL);
>>>>>>> 819103a... ISLoggined API getting success
    const isUserLoggedIn = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/isLoggedIn`,
          { withCredentials: true }  // Sending HttpOnly Cookie
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
