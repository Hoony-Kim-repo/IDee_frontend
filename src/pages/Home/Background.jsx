import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import backgroundImg from "../../assets/background-img.png";

const moveClouds = keyframes`
    from { background-position: 0 0; }
    to { background-position: -3000px 0; }
`;

const Background = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="200%"
      h="100%"
      backgroundImage={`url(${backgroundImg})`}
      backgroundRepeat="repeat-x"
      backgroundSize="contain"
      animation={`${moveClouds} 180s linear infinite`}
      opacity={0.3}
      pointerEvents="none"
    />
  );
};

export default Background;
