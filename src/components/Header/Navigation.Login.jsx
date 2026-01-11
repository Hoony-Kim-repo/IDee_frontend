import { Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import UserAvatar from "./UserAvatar";

const LoginNavigation = () => {
  const { user } = useAuth();

  const isAuthenticated = !!user && user.emailVerified;

  return !isAuthenticated ? (
    <>
      <NavLink to={"/auth/login"}>
        <Text fontWeight={"bold"}>Login</Text>
      </NavLink>
      <NavLink to={"/auth/signup"}>
        <Text fontWeight={"bold"}>Sign Up</Text>
      </NavLink>
    </>
  ) : (
    <UserAvatar />
  );
};

export default LoginNavigation;
