import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import logo from "../../../assets/IDee_logo-Transparent.png";

const ID_Footer = ({ data }) => {
  return (
    <Grid
      templateColumns={"repeat(5, 1fr)"}
      flex={1}
      minH={0}
      alignItems={"center"}
      gap={4}
    >
      <GridItem
        colSpan={4}
        borderRadius="xl"
        p={4}
        boxShadow="inset 0 0 10px rgba(0,0,0,0.05)"
      >
        {data.map((item, idx) => (
          <Box mb={2} key={idx}>
            <Text fontWeight={"bold"}>{item.category}</Text>
            <Box display="flex" gap={2} flexWrap="wrap">
              {item.data.map((d, index) => (
                <Box
                  key={index}
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="medium"
                  boxShadow="0 2px 6px rgba(0,0,0,0.1)"
                >
                  {d}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </GridItem>

      <GridItem
        colSpan={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          borderRadius="xl"
          bgGradient="linear(to-br, whiteAlpha.700, whiteAlpha.400)"
          p={3}
          boxShadow="0 4px 12px rgba(0,0,0,0.1)"
        >
          <Image
            src={logo}
            alt="QR Code"
            boxSize={100}
            objectFit={"contain"}
            filter="drop-shadow(0 0 4px rgba(0,0,0,0.3))"
          />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default ID_Footer;
