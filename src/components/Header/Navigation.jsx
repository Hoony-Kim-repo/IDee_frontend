import { Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LoginNavigation from "./Navigation.Login";
import UserAvatar from "./UserAvatar";

const Navigation = () => {
  const { user } = useAuth();

  const isAuthenticated = !!user && user.emailVerified;

  return (
    <>
      <LoginNavigation />
      {isAuthenticated && <UserAvatar />}
      <NavLink to="example">
        <Text mr={4} color={"pink.400"}>
          Example
        </Text>
      </NavLink>
    </>
  );
};

export default Navigation;
