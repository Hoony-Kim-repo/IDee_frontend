import { Box } from "@chakra-ui/react";

const Card = ({ children }) => {
  return (
    <Box
      bg="surface"
      color="text"
      p={6}
      borderRadius="md"
      boxShadow="soft"
      border="1px solid"
      borderColor="border"
      transition="all 0.25s ease-in-out"
    >
      {children}
    </Box>
  );
};

export default Card;
