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
import { passwordStrength } from "check-password-strength";
import { useState } from "react";
import { useNavigation } from "react-router-dom";
import {
  PasswordInput,
  PasswordStrengthMeter,
} from "../../components/ui/password-input";
import { InfoTip } from "../../components/ui/toggle-tip";

const strengthOptions = [
  { id: 1, value: "weak", minDiversity: 0, minLength: 0 },
  { id: 2, value: "medium", minDiversity: 2, minLength: 6 },
  { id: 3, value: "strong", minDiversity: 3, minLength: 8 },
  { id: 4, value: "very-strong", minDiversity: 4, minLength: 10 },
];

const passwordRequirements = [
  "1. At least 8 characters long",
  "2. Contains uppercase and lowercase letters",
  "3. Includes numbers",
  "4. Has special characters (e.g., !, @, #, $)",
];

const EmailAuth = ({ title, action }) => {
  const navigation = useNavigation();
  const isPending = navigation.state === "submitting";

  const [password, setPassword] = useState("");

  const strength = password
    ? passwordStrength(password, strengthOptions).id
    : 0;

  return (
    <Fieldset.Root size={"lg"}>
      <VStack justifyContent={"center"}>
        <Fieldset.Legend>{title}</Fieldset.Legend>

        <Fieldset.Content>
          <Field.Root required>
            <Field.Label>
              Email <Field.RequiredIndicator />
            </Field.Label>
            <Input id="email" name="email" placeholder="email" type="email" />

            <Field.Label>
              Password <Field.RequiredIndicator />
              <InfoTip
                content={
                  <>
                    {passwordRequirements.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </>
                }
              />
            </Field.Label>

            <PasswordInput
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <PasswordStrengthMeter value={strength} width="100%" />
          </Field.Root>

          <Field.Root orientation={"horizontal"}>
            <Button
              borderRadius={"24px"}
              flex="1"
              name="action"
              value={action}
              type="submit"
              disabled={isPending || strength < 3}
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
