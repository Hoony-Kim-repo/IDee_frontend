import { Box, HStack, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/IDee_logo-Transparent.png";
import Authentication from "../Authentication/Authentication";
import ToggleModeSwitch from "../common/ToggleModeSwitch";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <HStack
      p={4}
      paddingLeft={16}
      paddingRight={16}
      justifyContent={"space-between"}
    >
      <NavLink to="/">
        <Image boxSize={"60px"} src={logo} />
      </NavLink>

      <HStack gap={4}>
        <Authentication />
        <Navigation />
        <ToggleModeSwitch />
      </HStack>
    </HStack>
  );
};

export default Header;
