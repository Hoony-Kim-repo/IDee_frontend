import {
  Box,
  Button,
  Container,
  Field,
  Fieldset,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useTheme } from "next-themes";
import GoogleLogin from "./GoogleLogin";

const LoginPage = () => {
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
        <Fieldset.Root size={"lg"}>
          <VStack justifyContent={"center"}>
            <Fieldset.Legend>Login with Email</Fieldset.Legend>

            <Fieldset.Content>
              <Field.Root required>
                <Field.Label>
                  Email <Field.RequiredIndicator />
                </Field.Label>
                <Input name="email" placeholder="email" type="email" />
              </Field.Root>

              <Field.Root required>
                <Field.Label>
                  Password <Field.RequiredIndicator />
                </Field.Label>
                <Input name="password" placeholder="password" type="password" />
              </Field.Root>

              <HStack gap={6} justifyContent={"center"} mt={5}>
                <Box border={`1px dotted ${borderColor}`} w={"45%"} />
                <Text>OR</Text>
                <Box border={`1px dotted ${borderColor}`} w={"45%"} />
              </HStack>

              <GoogleLogin />
              <Button borderRadius={"24px"}>
                <Image
                  boxSize={"30px"}
                  objectFit={"contain"}
                  src={
                    "https://img.icons8.com/?size=100&id=13912&format=png&color=000000"
                  }
                  alt={"Facebook Icon"}
                  mr={2}
                  borderRadius={"20px"}
                  backgroundColor={"white"}
                />
                <Text textStyle={"lg"}>Continue with Facebook</Text>
              </Button>
            </Fieldset.Content>
          </VStack>
        </Fieldset.Root>
      </Box>
    </Container>
  );
};

export default LoginPage;
