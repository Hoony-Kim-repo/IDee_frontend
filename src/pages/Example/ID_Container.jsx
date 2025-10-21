import { Box } from "@chakra-ui/react";

const ID_Container = ({ children }) => {
  return (
    <Box
      position="relative"
      minH="80vh"
      maxW="8xl"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      borderRadius="2xl"
      bg="rgba(255, 255, 255, 0.01)"
      boxShadow="20px 60px 40px rgba(0, 0, 0, 0.5)"
      border="1px dotted rgba(255, 255, 255, 0.6)"
    >
      {children}
    </Box>
  );
};

export default ID_Container;
