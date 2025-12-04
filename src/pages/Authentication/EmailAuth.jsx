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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (email) => EMAIL_REGEX.test(email);

const EmailAuth = ({ title, onSubmit, loading }) => {
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const strength = password
    ? passwordStrength(password, strengthOptions).id
    : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({ email: "", password: "" });

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email")?.trim();
    const pwd = formData.get("password")?.trim();

    let hasError = false;
    const newErrors = {};

    if (!email || !validateEmail(email)) {
      newErrors.email = "Invalid email";
      hasError = true;
    }

    if (!pwd || strength < 3) {
      newErrors.password = "Your password does not meet requirements";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    try {
      await onSubmit({ email, password: pwd });
    } catch (err) {
      setErrors({ form: err.message });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset.Root size={"lg"}>
        <VStack justifyContent={"center"}>
          <Fieldset.Legend>{title}</Fieldset.Legend>

          <Fieldset.Content>
            <Field.Root required>
              <Field.Label>
                Email <Field.RequiredIndicator />
              </Field.Label>
              <Input id="email" name="email" placeholder="email" type="email" />
              {errors.email && (
                <Text color={"red.500"} fontSize={"sm"}>
                  {errors.email}
                </Text>
              )}

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
              {errors.password && (
                <Text color={"red.500"} fontSize={"sm"}>
                  {errors.password}
                </Text>
              )}
            </Field.Root>

            <Field.Root orientation={"horizontal"}>
              <Button
                borderRadius={"24px"}
                flex="1"
                name="action"
                disabled={strength < 3}
                justifyContent={"center"}
                type="submit"
              >
                {loading ? (
                  <Spinner size="lg" borderWidth={"4px"} />
                ) : (
                  <Text textStyle={"lg"}>{title}</Text>
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
    </form>
  );
};

export default EmailAuth;
