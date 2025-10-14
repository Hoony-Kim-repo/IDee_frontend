import { Box, Grid, Image, Text } from "@chakra-ui/react";
import logo from "../../../assets/IDee_logo-Transparent.png";

const ID_Header = ({ name, job }) => {
  return (
    <Grid
      templateColumns={"repeat(3, 1fr)"}
      flex={1}
      minH={0}
      alignItems={"center"}
      pl={6}
      pr={6}
    >
      <Box
        display={"flex"}
        justifyContent={"start"}
        alignItems={"center"}
        flex="1"
        maxH="100%"
        maxWw="100%"
      >
        <Image
          src={logo}
          alt="IDee_logo"
          objectFit={"contain"}
          maxH={"100%"}
          maxW={"100%"}
          boxSize={20}
          filter={"drop-shadow(0 0 6px rgba(0, 0, 0, 0.25"}
        />
      </Box>

      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Text
          fontWeight={"bold"}
          fontSize="3xl"
          letterSpacing="wide"
          bgGradient="linear(to-r, #2196f3, #e91e63)"
        >
          {name}
        </Text>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"end"}
        alignItems={"center"}
        flex="1"
      >
        <Text fontSize={"lg"}>{job}</Text>
      </Box>
    </Grid>
  );
};

export default ID_Header;
