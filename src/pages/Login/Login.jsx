import {
  Box,
  Button,
  Container,
  Field,
  Fieldset,
  HStack,
  Input,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { Form, useNavigation } from "react-router-dom";
import GoogleLogin from "../../components/Authentication/GoogleLogin";

const LoginPage = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const isPending = navigation.state === "submitting";

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
        <Form method="POST">
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

                <Field.Root orientation={"horizontal"}>
                  <Button
                    borderRadius={"24px"}
                    flex="1"
                    name="action"
                    value="login"
                    type="submit"
                    disabled={isPending}
                    justifyContent={"center"}
                  >
                    {isPending ? (
                      <Spinner size="lg" borderWidth={"4px"} />
                    ) : (
                      <Text textStyle={"lg"}>Login</Text>
                    )}
                  </Button>
                </Field.Root>

                <HStack gap={6} justifyContent={"center"} mt={5}>
                  <Box border={`1px dotted ${borderColor}`} w={"45%"} />
                  <Text>OR</Text>
                  <Box border={`1px dotted ${borderColor}`} w={"45%"} />
                </HStack>
              </Fieldset.Content>
            </VStack>
          </Fieldset.Root>
        </Form>
        <GoogleLogin />
      </Box>
    </Container>
  );
};

export default LoginPage;
