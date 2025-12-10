import { Button, Fieldset, Spinner, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import EmailAuthField from "./EmailAuth.public";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (email) => EMAIL_REGEX.test(email);

const EmailAuthLogin = ({ onSubmit, loading }) => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    form: "",
  });

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

    if (!pwd) {
      newErrors.password = "Password is required.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    try {
      await onSubmit({ email, password: pwd });
    } catch (err) {
      if (err.message.includes("invalid-credential")) {
        setErrors((prev) => ({ ...prev, form: "Invalid email or password." }));
        return;
      }
      setErrors((prev) => ({ ...prev, form: err.message }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset.Root size={"lg"}>
        <VStack justifyContent={"center"}>
          <Fieldset.Legend>Login</Fieldset.Legend>

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
              label="Password"
              type="password"
              placeholder="password"
              required
              error={errors.password}
            />

            {errors.form && (
              <Text color={"red.500"} fontSize={"sm"} mb={2}>
                {errors.form}
              </Text>
            )}

            <Button
              borderRadius={"24px"}
              //   disabled={strength < 3}
              justifyContent={"center"}
              type="submit"
            >
              {loading ? (
                <Spinner size="lg" borderWidth={"4px"} />
              ) : (
                <Text textStyle={"lg"}>Login</Text>
              )}
            </Button>
          </Fieldset.Content>
        </VStack>
      </Fieldset.Root>
    </form>
  );
};

export default EmailAuthLogin;
