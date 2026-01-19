import { Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import UserAvatar from "./UserAvatar";

const AuthNavigation = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <>
        <NavLink to={"/auth/login"}>
          <Text fontWeight={"bold"}>Login</Text>
        </NavLink>
        <NavLink to={"/auth/signup"}>
          <Text fontWeight={"bold"}>Sign Up</Text>
        </NavLink>
      </>
    );
  }

  return <UserAvatar />;
};

export default AuthNavigation;
