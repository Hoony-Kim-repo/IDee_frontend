import { Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <NavLink to="example">
      <Text mr={4} color={"pink.400"}>
        Example
      </Text>
    </NavLink>
  );
};

export default Navigation;
