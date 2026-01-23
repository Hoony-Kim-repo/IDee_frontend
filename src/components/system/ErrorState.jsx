import { Button, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ErrorState = ({ title, description, actionLabel, actionPath }) => {
  const navigate = useNavigate();

  return (
    <VStack gap={10} py={20} textAlign={"center"}>
      <Text fontSize={"xl"} fontWeight={"bold"}>
        {title}
      </Text>

      <Text color={"gray.500"}>{description}</Text>

      <Button onClick={() => navigate(actionPath)} borderRadius={"lg"}>
        {actionLabel}
      </Button>
    </VStack>
  );
};

export default ErrorState;
