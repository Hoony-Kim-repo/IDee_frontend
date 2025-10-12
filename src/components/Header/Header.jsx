import { Box, Image } from "@chakra-ui/react";
import logo from "../../assets/IDee_logo-Transparent.png";
import ToggleModeSwitch from "../common/ToggleModeSwitch";

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
      <Box>
        <Image boxSize={"60px"} src={logo} />
      </Box>

      <Box>
        <ToggleModeSwitch />
      </Box>
    </Box>
  );
};

export default Header;
