import { Box, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/IDee_logo-Transparent.png";
import ToggleModeSwitch from "../common/ToggleModeSwitch";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Box
      as="header"
      bg="surface"
      color="text"
      p={4}
      paddingLeft={16}
      paddingRight={16}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <NavLink to="/">
        <Image boxSize={"60px"} src={logo} />
      </NavLink>

      <Box display={"flex"}>
        <Navigation />
        <ToggleModeSwitch />
      </Box>
    </Box>
  );
};

export default Header;
