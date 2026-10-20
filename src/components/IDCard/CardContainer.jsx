import { Box, Container } from "@chakra-ui/react";

const CardContainer = ({ isFront = false, bgImage, children }) => {
  const gridTemplateRows = "0.5fr 1.8fr 1fr";

  return (
    <Box
      w="80%"
      h="80vh"
      minW={0}
      borderRadius="2xl"
      boxShadow="20px 60px 40px rgba(0, 0, 0, 0.5)"
      border="1px dotted rgba(255, 255, 255, 0.6)"
      bgImage={bgImage ? `url(${bgImage})` : undefined}
      bgSize={"cover"}
      bgPos={"center"}
    >
      <Container
        position="relative"
        display={isFront ? "grid" : "block"}
        gridTemplateRows={isFront ? gridTemplateRows : undefined}
        w={"100%"}
        maxW={"100%"}
        h={"100%"}
        minW={0}
        minH={0}
        pl={5}
        pr={5}
      >
        {children}
      </Container>
    </Box>
  );
};

export default CardContainer;
