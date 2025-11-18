/* eslint-disable react-hooks/exhaustive-deps */
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";
import { toaster } from "../../../components/ui/toaster";
import { googleAuthenticate, sendVerificationCodeAction } from "../Actions";
import AuthPageContainer from "../AuthPageContainer";
import EmailAuth from "../EmailAuth";
import GoogleAuth from "../GoogleAuth";
import PinModal from "./PinModal";

const SignupPage = () => {
  const navigate = useNavigate();
  const [isGoogleLoginLoading, setIsGoogleLoginLoading] = useState(false);
  const result = useActionData();
  const [isPinDialogOpen, setIsPinDialogOpen] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const onDialogClose = () => {
    setIsVerifying(false);
    setIsPinDialogOpen(false);
  };

  const sendEmailCode = useMutation({
    mutationFn: async (email) => {
      setIsVerifying(true);
      return sendVerificationCodeAction(email);
    },
    onSuccess: () => {
      setIsVerifying(false);
      setIsPinDialogOpen(true);
    },
    onError: (error) => {
      console.error("Error sending email code:", error);
    },
  });

  useEffect(() => {
    if (result && result.success) {
      // send verification code
      sendEmailCode.mutate(result.email);
    } else {
      // Error handling
      console.log("result error", result);
    }
  }, [result]);

  const onGoogleSignup = async () => {
    setIsGoogleLoginLoading(true);

    const processSignup = async () => {
      const result = await googleAuthenticate("signup");

      if (result === null) {
        throw new Error("The google account has already been registered.");
      }

      navigate("/login");
    };

    toaster.promise(processSignup, {
      success: () => {
        setIsGoogleLoginLoading(false);
        return { title: "Signup Success!" };
      },
      error: (err) => {
        setIsGoogleLoginLoading(false);
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
        <EmailAuth
          title="Sign up with Email"
          action="sign up"
          isLoading={isPinDialogOpen || isVerifying}
        />
      </Form>
      <GoogleAuth onClick={onGoogleSignup} isLoading={isGoogleLoginLoading} />

      <PinModal
        isOpen={isPinDialogOpen}
        onClose={onDialogClose}
        email={result?.email}
      />
    </AuthPageContainer>
  );
};

export default SignupPage;
