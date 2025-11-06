import { HStack, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/IDee_logo-Transparent.png";
import ToggleModeSwitch from "../common/ToggleModeSwitch";
import Navigation from "./Navigation";

const Header = () => {
  const userInfo = useSelector((state) => state.user);

  const onClick = () => {
    console.log(userInfo);
  };

  return (
    <HStack
      p={4}
      paddingLeft={16}
      paddingRight={16}
      justifyContent={"space-between"}
    >
      <NavLink to="/" onClick={onClick}>
        <Image boxSize={"60px"} src={logo} />
      </NavLink>

      <HStack gap={4}>
        <Navigation />
        <ToggleModeSwitch />
      </HStack>
    </HStack>
  );
};

export default Header;
