import { Button, Fieldset, HStack, Text, VStack } from "@chakra-ui/react";
import { sendEmailVerification } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "../../../Auth/useAuthActions";
import { toaster } from "../../../components/ui/toaster";
import { auth } from "../../../Firebase";
import { useAuth } from "../../../hooks/useAuth";
import AuthPageContainer from "../AuthPageContainer";

const RESEND_COOLDOWN_SECONDS = 60;

const VerifyEmailPage = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { wrapToaster, createOrUpdateUserDocIfVerified } = useAuthActions();

  const pendingEmail = sessionStorage.getItem("pendingEmail");

  const [loadingResend, setLoadingResend] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const cooldownRef = useRef(null);

  useEffect(() => {
    if (!loading && user) navigate("/");
  }, [user, navigate, loading]);

  useEffect(() => {
    if (!pendingEmail) {
      navigate("/auth/login");
      return;
    }
  }, [pendingEmail, navigate]);

  useEffect(() => {
    if (loading) return;
    if (!user) {
      // If not signed in (rare immediately after signup due to timing), redirect to Login
      navigate("/auth/login");
      return;
    }

    return () => {
      if (cooldownRef.current) clearInterval(cooldownRef.current);
    };
  }, [loading, user, navigate]);

  const startCooldown = (seconds) => {
    setCooldown(seconds);

    if (cooldownRef.current) clearInterval(cooldownRef.current);

    cooldownRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(cooldownRef.current);
          cooldownRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const onResend = async () => {
    if (!user) {
      navigate("/auth/login");
      return;
    }

    if (cooldown > 0) {
      toaster.create({
        title: "Please wait",
        description: `You can resend in ${cooldown} seconds.`,
        type: "info",
        duration: 3000,
        closable: true,
      });
      return;
    }

    setLoadingResend(true);

    const sendVerification = async () =>
      await sendEmailVerification(user, {
        url: import.meta.env.VITE_EMAIL_VERIFY_URL || window.location.origin,
      });

    try {
      await wrapToaster(
        () => sendVerification(),
        "Verification Email resent! Please check your inbox.",
        "Resend verification email has been failed."
      );

      startCooldown(RESEND_COOLDOWN_SECONDS);
    } catch (err) {
      toaster.create({
        title: "Resend Failed",
        description: err?.message || "Unable to resend.",
        type: "error",
        duration: 3000,
        closable: true,
      });
    } finally {
      setLoadingResend(false);
    }
  };

  const onVerifyCheck = async () => {
    if (!user) {
      navigate("/auth/login");
      return;
    }

    setLoadingVerify(true);

    const reloadUser = async () => await user.reload();

    try {
      await wrapToaster(
        () => reloadUser(),
        "Checking...",
        "We are checking your verification status..."
      );

      if (user.emailVerified) {
        // Create / Update Firestore doc now that user is verified
        await createOrUpdateUserDocIfVerified(user);
        toaster.create({
          title: "Email Verified",
          description: "You can now log in. Welcome to IDee!",
          type: "success",
          duration: 3000,
          closable: true,
        });

        // Sign out to ensure fresh Login flow
        await auth.signOut();
        navigate("/auth/login");
      } else {
        toaster.create({
          title: "Not verified yet.",
          description:
            "Please check your inbox and follow the verification link.",
          type: "error",
          duration: 3000,
          closable: true,
        });
      }
    } catch (err) {
      toaster.create({
        title: "Error",
        description: err?.message || "An error occurred",
        type: "error",
        duration: 3000,
        closable: true,
      });
    } finally {
      setLoadingVerify(false);
    }
  };

  return (
    <AuthPageContainer>
      <Fieldset.Root size={"lg"}>
        <VStack>
          <Fieldset.Legend fontSize={"2xl"}>
            Email Verification Action Required.
          </Fieldset.Legend>

          <Text>
            We have sent verification email to{" "}
            <strong>{pendingEmail || auth.currentUser?.email}.</strong> <br />
            Please open the email and click the verification link.
          </Text>

          <HStack>
            <Button
              w={"50%"}
              loading={loadingResend}
              onClick={onResend}
              disabled={cooldown > 0}
            >
              {cooldown > 0 ? `Resend (${cooldown}s)` : "Resend Email"}
            </Button>

            <Button w={"50%"} loading={loadingVerify} onClick={onVerifyCheck}>
              Check Verification
            </Button>
          </HStack>

          <Text fontSize={"sm"} color={"gray.500"}>
            If you do not receive the email, check your spam folder or try
            resending after few minutes.
          </Text>
        </VStack>
      </Fieldset.Root>
    </AuthPageContainer>
  );
};

export default VerifyEmailPage;
