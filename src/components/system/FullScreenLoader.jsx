import { Center, Spinner, Text, VStack } from "@chakra-ui/react";

const FullScreenLoader = ({ message = "Loading...", showMessage = false }) => {
  return (
    <Center height="100vh" width={"100wh"}>
      <VStack spacing={4}>
        <Spinner size={"xl"} />

        {showMessage && (
          <Text fontSize={"sm"} color={"gray.500"}>
            {message}
          </Text>
        )}
      </VStack>
    </Center>
  );
};

export default FullScreenLoader;
