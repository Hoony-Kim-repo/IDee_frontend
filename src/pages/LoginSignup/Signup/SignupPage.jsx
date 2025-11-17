/* eslint-disable react-hooks/exhaustive-deps */
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";
import { toaster } from "../../../components/ui/toaster";
import { googleAuthenticate } from "../Actions";
import AuthPageContainer from "../AuthPageContainer";
import EmailAuth from "../EmailAuth";
import GoogleAuth from "../GoogleAuth";

const SignupPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const result = useActionData();

  const sendEmailCode = useMutation({
    mutationFn: async (email) => {
      return axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/send-email-code`,
        {
          email: email,
        }
      );
    },
    onSuccess: (data) => {
      console.log("Email code sent successfully:", data);
    },
    onError: (error) => {
      console.error("Error sending email code:", error);
    },
  });

  useEffect(() => {
    if (result && result.success) {
      // send verification code
      console.log(result);
      sendEmailCode.mutate(result.email);
    } else {
      // Error handling
      console.log("result error", result);
    }
  }, [result]);

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
