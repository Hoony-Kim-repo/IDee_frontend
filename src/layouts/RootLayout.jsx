import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Toaster } from "../components/ui/toaster";
import PostLoginGate from "../gates/PostLoginGate";

const RootLayout = () => {
  return (
    <>
      <Header />
      <PostLoginGate>
        <Outlet />
      </PostLoginGate>
      <Toaster />
    </>
  );
};

export default RootLayout;
