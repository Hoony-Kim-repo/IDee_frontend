import { Box, HStack, Text } from "@chakra-ui/react";

const AuthWaysDivider = () => {
  return (
    <HStack gap={6} justifyContent={"center"} mt={3}>
      <Box border={`1px dotted`} w={"45%"} />
      <Text>OR</Text>
      <Box border={`1px dotted`} w={"45%"} />
    </HStack>
  );
};

export default AuthWaysDivider;
