import { Fieldset, Text, VStack } from "@chakra-ui/react";
import { passwordStrength } from "check-password-strength";
import { useState } from "react";
import SubmitButton from "../../components/common/SubmitButton";
import { PasswordStrengthMeter } from "../../components/ui/password-input";
import { InfoTip } from "../../components/ui/toggle-tip";
import EmailAuthField from "./EmailAuth.public";

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

const EmailAuthSignup = ({ onSubmit, loading }) => {
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    form: "",
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
      setErrors((prev) => ({ ...prev, form: err.message }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset.Root size={"lg"}>
        <VStack justifyContent={"center"}>
          <Fieldset.Legend>Sign Up</Fieldset.Legend>

          <Fieldset.Content>
            <EmailAuthField
              id="email"
              name="email"
              type="email"
              label="Email"
              placeholder="email"
              required
              error={errors.email}
            />

            <EmailAuthField
              id="password"
              name="password"
              label={
                <>
                  Password{" "}
                  <InfoTip
                    content={
                      <>
                        {passwordRequirements.map((line, idx) => (
                          <div key={idx}>{line}</div>
                        ))}
                      </>
                    }
                  />
                </>
              }
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
              error={errors.password}
            >
              <PasswordStrengthMeter value={strength} width="100%" />
            </EmailAuthField>

            {errors.form && (
              <Text color={"red.500"} fontSize={"sm"} mb={2}>
                {errors.form}
              </Text>
            )}

            <SubmitButton
              borderRadius={"24px"}
              disabledCondition={strength < 3}
              loading={loading}
            >
              Sign up
            </SubmitButton>
          </Fieldset.Content>
        </VStack>
      </Fieldset.Root>
    </form>
  );
};

export default EmailAuthSignup;
