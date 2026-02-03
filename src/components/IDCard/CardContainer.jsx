import { Box, Container } from "@chakra-ui/react";

const CardContainer = ({ bgImage, children }) => {
  return (
    <Box
      minW={"80%"}
      w="80%"
      display="flex"
      alignItems="center"
      overflow="hidden"
      borderRadius="2xl"
      boxShadow="20px 60px 40px rgba(0, 0, 0, 0.5)"
      border="1px dotted rgba(255, 255, 255, 0.6)"
      bgImage={`url(${bgImage})`}
    >
      <Container
        position="relative"
        display="grid"
        gridTemplateRows="0.5fr 1.8fr 1fr"
        w={"100%"}
        pl={5}
        pr={5}
      >
        {children}
      </Container>
    </Box>
  );
};

export default CardContainer;
