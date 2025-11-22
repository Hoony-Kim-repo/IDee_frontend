import { Button, Image, Text } from "@chakra-ui/react";

const GoogleAuth = ({ onClick, isLoading }) => {
  return (
    <Button
      borderRadius={"24px"}
      w="100%"
      mt={"10px"}
      onClick={onClick}
      disabled={isLoading}
    >
      <Image
        boxSize={"30px"}
        objectFit={"contain"}
        src={
          "https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
        }
        alt={"Google Icon"}
        mr={2}
        borderRadius={"20px"}
        backgroundColor={"white"}
      />
      <Text textStyle={"lg"}>Continue with Google</Text>
    </Button>
  );
};

export default GoogleAuth;
