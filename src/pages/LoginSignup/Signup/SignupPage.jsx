import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { toaster } from "../../../components/ui/toaster";
import { googleAuthenticate } from "../Actions";
import AuthPageContainer from "../AuthPageContainer";
import EmailAuth from "../EmailAuth";
import GoogleAuth from "../GoogleAuth";

const SignupPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onGoogleSignup = async () => {
    setIsLoading(true);

    const processSignup = async () => {
      const result = await googleAuthenticate("signup");

      if (result === null) {
        throw new Error("The google account has already been registered.");
      }

      navigate("/login");
    };

    toaster.promise(processSignup, {
      success: () => {
        setIsLoading(false);
        return { title: "Signup Success!" };
      },
      error: (err) => {
        setIsLoading(false);
        return {
          title: "Signup Failed!",
          description: err?.message || "An error occurred during singup.",
        };
      },
      loading: {
        title: "Signing up...",
      },
    });
  };

  return (
    <AuthPageContainer>
      <Form method="POST">
        <EmailAuth title="Sign up with Email" action="sign up" />
      </Form>
      <GoogleAuth onClick={onGoogleSignup} isLoading={isLoading} />
    </AuthPageContainer>
  );
};

export default SignupPage;
