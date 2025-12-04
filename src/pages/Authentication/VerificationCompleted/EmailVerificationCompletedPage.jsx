import { Button, Fieldset, Spinner, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuthActions } from "../../../Auth/useAuthActions";
import AuthPageContainer from "../AuthPageContainer";

const EmailVerificationCompletedPage = () => {
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get("oobCode");
  const mode = searchParams.get("mode");

  const [countdown, setCountdown] = useState(5);
  const [status, setStatus] = useState("loading");

  const { applyActionCodeAndReturn } = useAuthActions();

  useEffect(() => {
    const doApply = async () => {
      if (mode !== "verifyEmail" || !oobCode) {
        setStatus("error");
        return;
      }

      try {
        // applyActionCode on server-side via Firebase SDK
        await applyActionCodeAndReturn(oobCode);
        setStatus("success");
      } catch (err) {
        console.error("applyActionCode error", err.message);
        setStatus("error");
      }
    };
    doApply();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, oobCode]);

  useEffect(() => {
    if (status === "success" || status === "error") {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);

            try {
              window.close();
            } catch (err) {
              // Some browsers may block closing a tab not opened by script.
              console.error(err);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [status]);

  return (
    <AuthPageContainer>
      <Fieldset.Root size={"lg"}>
        <VStack spacing={6}>
          {status === "loading" && (
            <>
              <Spinner size={"lg"} />
              <Text>Verifying your email...</Text>
            </>
          )}

          {status === "success" && (
            <>
              <Fieldset.Legend fontSize={"2xl"} color={"green.500"}>
                Email Verified! 🎉
              </Fieldset.Legend>
              <Text>
                Your email has been verified. You may now close this tab and
                return to the app.
              </Text>
              <Button onClick={() => window.close()}>Close now</Button>
              <Text fontSize={"sm"} color={"gray.500"}>
                This window will close automatically in {countdown} seconds
              </Text>
            </>
          )}

          {status === "error" && (
            <>
              <Fieldset.Legend fontSize={"2xl"} color={"red.500"}>
                Verification Failed
              </Fieldset.Legend>
              <Text>
                The verification link is invalid or expired. <br />
                Please try verifying again from your app.
              </Text>
              <Button onClick={() => window.close()}>Close</Button>
              <Text fontSize={"sm"} color={"gray.500"}>
                This window will close automatically in {countdown} seconds
              </Text>
            </>
          )}
        </VStack>
      </Fieldset.Root>
    </AuthPageContainer>
  );
};

export default EmailVerificationCompletedPage;
