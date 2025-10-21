import { Box } from "@chakra-ui/react";
import background from "../../assets/Example/background.webp";

const ExampleBackground = () => {
  return (
    <Box
      position="absolute"
      w="8xl"
      height="80vh"
      bgImage={`url(${background})`}
      bgSize="fill"
      bgPosition={"center"}
      bgRepeat="no-repeat"
      borderRadius="2xl"
      opacity={0.65}
      zIndex={-999}
    />
  );
};

export default ExampleBackground;
