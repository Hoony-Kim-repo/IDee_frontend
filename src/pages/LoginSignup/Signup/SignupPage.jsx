import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";
import { toaster } from "../../../components/ui/toaster";
import { googleAuthenticate, sendVerificationCodeAction } from "../Actions";
import AuthPageContainer from "../AuthPageContainer";
import EmailAuth from "../EmailAuth";
import { googleSignIn } from "../FirebaseAuth";
import GoogleAuth from "../GoogleAuth";
import PinModal from "./PinModal";

const SignupPage = () => {
  const navigate = useNavigate();
  const [isGoogleLoginLoading, setIsGoogleLoginLoading] = useState(false);
  const emailAuthResult = useActionData();
  const [isPinDialogOpen, setIsPinDialogOpen] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const onDialogClose = () => {
    setIsVerifying(false);
    setIsPinDialogOpen(false);
  };

  const sendEmailCode = useMutation({
    mutationFn: async (email) => {
      return sendVerificationCodeAction(email);
    },
    onMutate: () => {
      setIsVerifying(true);
    },
    onSuccess: () => {
      setIsPinDialogOpen(true);
      toaster.create({
        description:
          "Verification code has been sent. Please check your email.",
        type: "success",
      });
    },
    onError: (error) => {
      toaster.create({
        description: error?.message || "An error has been happened",
        type: "error",
      });
    },
    onSettled: () => {
      setIsVerifying(false);
    },
  });

  useEffect(() => {
    if (!emailAuthResult) return;

    if (emailAuthResult && emailAuthResult.success) {
      // send verification code
      toaster.create({
        description: "Email and Password has been validated..",
        type: "success",
      });
      sendEmailCode.mutate(emailAuthResult.email);
    } else {
      // Error handling
      toaster.create({
        description: emailAuthResult?.message || "An error has been happened",
        type: "error",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailAuthResult]);

  const onGoogleSignup = async () => {
    setIsGoogleLoginLoading(true);

    const processSignup = async () => {
      const res = await googleSignIn();
      const signup = await googleAuthenticate("signup", res);
      if (!signup?.success) throw new Error(signup.message);
      setIsGoogleLoginLoading(false);
    };

    toaster.promise(processSignup, {
      success: () => {
        navigate("/");

        return { title: "Signup Success!" };
      },
      error: (err) => {
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

  const onEmailAuthSignup = (success) => {
    console.log(success);

    console.log(emailAuthResult.email, emailAuthResult.password);
  };

  return (
    <>
      <AuthPageContainer>
        <Form method="POST">
          <EmailAuth
            title="Sign up with Email"
            action="sign up"
            isLoading={isPinDialogOpen || isVerifying}
          />
        </Form>
        <GoogleAuth onClick={onGoogleSignup} isLoading={isGoogleLoginLoading} />
      </AuthPageContainer>

      <PinModal
        isOpen={isPinDialogOpen}
        onClose={onDialogClose}
        email={emailAuthResult?.email}
        onComplete={onEmailAuthSignup}
      />
    </>
  );
};

export default SignupPage;
