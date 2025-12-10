import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Toaster } from "../components/ui/toaster";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
    </>
  );
};

export default RootLayout;
