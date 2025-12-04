import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "../../../Auth/useAuthActions";
import AuthPageContainer from "../AuthPageContainer";
import EmailAuth from "../EmailAuth";
import GoogleAuth from "../GoogleAuth";

const SignupPage = () => {
  const { signUpWithEmail, authenticateWithGoogle, wrapToaster } =
    useAuthActions();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onEmailSignup = async ({ email, password }) => {
    setLoading(true);
    try {
      await wrapToaster(
        () => signUpWithEmail(email, password),
        "Verify email sent! Please check your inbox.",
        "Signup failed. Email may already exist."
      );

      sessionStorage.setItem("pendingEmail", email);

      navigate("/verify-email");
    } finally {
      setLoading(false);
    }
  };

  const onGoogle = () => {
    setLoading(true);
    try {
      wrapToaster(
        () => authenticateWithGoogle(),
        "Google Signup successful",
        "Google Signup failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthPageContainer>
        <EmailAuth
          title="Sign up with Email"
          onSubmit={onEmailSignup}
          loading={loading}
        />
        <GoogleAuth onClick={onGoogle} loading={loading} />
      </AuthPageContainer>
    </>
  );
};

export default SignupPage;
