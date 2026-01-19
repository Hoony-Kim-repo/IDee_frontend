import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/IDee_logo-Transparent.png";
import { useNavigationActions } from "../../navigation/useNavigationActions";
import ToggleModeSwitch from "../common/ToggleModeSwitch";
import Navigation from "./Navigation";

const Header = () => {
  const { goHome } = useNavigationActions();

  return (
    <HStack
      p={4}
      paddingLeft={16}
      paddingRight={16}
      justifyContent={"space-between"}
    >
      <Image cursor={"pointer"} boxSize={"60px"} src={logo} onClick={goHome} />

      <HStack gap={4}>
        <Navigation />
        <ToggleModeSwitch />
      </HStack>
    </HStack>
  );
};

export default Header;
