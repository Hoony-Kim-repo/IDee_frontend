import { Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import AuthNavigation from "./AuthNavigation";

const Navigation = () => {
  return (
    <>
      <AuthNavigation />

      <NavLink to="example">
        <Text mr={4} color={"pink.400"}>
          Example
        </Text>
      </NavLink>
    </>
  );
};

export default Navigation;
