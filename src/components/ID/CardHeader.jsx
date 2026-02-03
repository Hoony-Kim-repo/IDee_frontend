import { Box, Grid, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/IDee_logo-Transparent.png";

const CardHeader = ({ name, jobTitle }) => {
  return (
    <Grid templateColumns={"repeat(3, 1fr)"}>
      <Box display={"flex"} justifyContent={"start"} alignItems={"center"}>
        <Image src={logo} alt="IDee_logo" objectFit={"contain"} boxSize={20} />
      </Box>

      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Text fontWeight={"bold"} fontSize="3xl" letterSpacing="wide">
          {name}
        </Text>
      </Box>

      <Box display={"flex"} justifyContent={"end"} alignItems={"center"}>
        <Text fontSize={"lg"}>{jobTitle}</Text>
      </Box>
    </Grid>
  );
};

export default CardHeader;
