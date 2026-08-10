import { Box, Grid, GridItem, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/IDee_logo-Transparent.png";

const CardFooter = ({ list }) => {
  return (
    <Grid templateColumns={"repeat(5, 1fr)"}>
      {/* Skills and Keywords */}
      <GridItem colSpan={4} p={4}>
        {list &&
          list.map((item, idx) => (
            <Box mb={2} key={idx}>
              <Text fontWeight={"bold"}>{item.category}</Text>
              <HStack gap={4}>
                {item.data.map((d, index) => (
                  <Box
                    key={index}
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="medium"
                    boxShadow="0 2px 6px rgba(125,125,255,1)"
                  >
                    {d}
                  </Box>
                ))}
              </HStack>
            </Box>
          ))}
      </GridItem>

      {/* QR Codes */}
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

export default CardFooter;
