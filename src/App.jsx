import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootRoutes from "./route/RootRoutes";

const router = createBrowserRouter(RootRoutes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
