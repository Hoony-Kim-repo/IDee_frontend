import { Box, Container } from "@chakra-ui/react";
import { useTheme } from "next-themes";

const AuthPageContainer = (props) => {
  const { children } = props;
  const { theme } = useTheme();

  let borderColor =
    theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)";
  let boxShadow =
    theme === "light" ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)";

  return (
    <Container w={"100%"} display="flex" justifyContent={"center"}>
      <Box
        border={`1px solid ${borderColor}`}
        w="50%"
        p={5}
        borderRadius="2xl"
        boxShadow={`20px 20px 40px ${boxShadow}`}
      >
        {children}
      </Box>
    </Container>
  );
};

export default AuthPageContainer;
