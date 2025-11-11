import {
  Box,
  Button,
  Field,
  Fieldset,
  HStack,
  Input,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigation } from "react-router-dom";

const EmailAuth = ({ title, action }) => {
  const navigation = useNavigation();
  const isPending = navigation.state === "submitting";

  return (
    <Fieldset.Root size={"lg"}>
      <VStack justifyContent={"center"}>
        <Fieldset.Legend>{title}</Fieldset.Legend>

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
              value={action}
              type="submit"
              disabled={isPending}
              justifyContent={"center"}
            >
              {isPending ? (
                <Spinner size="lg" borderWidth={"4px"} />
              ) : (
                <Text textStyle={"lg"}>{action.toUpperCase()}</Text>
              )}
            </Button>
          </Field.Root>

          <HStack gap={6} justifyContent={"center"} mt={5}>
            <Box border={`1px dotted`} w={"45%"} />
            <Text>OR</Text>
            <Box border={`1px dotted`} w={"45%"} />
          </HStack>
        </Fieldset.Content>
      </VStack>
    </Fieldset.Root>
  );
};

export default EmailAuth;
