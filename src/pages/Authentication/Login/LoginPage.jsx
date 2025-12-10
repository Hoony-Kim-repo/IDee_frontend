import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "../../../Auth";
import { useAuth } from "../../../hooks/useAuth";
import AuthPageContainer from "../AuthPageContainer";
import AuthWaysDivider from "../AuthWaysDivider";
import EmailAuthLogin from "../EmailAuth.Login";
import GoogleAuth from "../GoogleAuth";

const LoginPage = () => {
  const { loginWithEmail, authenticateWithGoogle, wrapToaster } =
    useAuthActions();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user, loading: userLoading } = useAuth();

  useEffect(() => {
    if (!userLoading && user) navigate("/");
  }, [user, navigate, userLoading]);

  const onEmailLogin = async ({ email, password }) => {
    setLoading(true);

    try {
      await wrapToaster(
        () => loginWithEmail(email, password),
        "Login successful",
        "Login failed. Please check your credentials."
      );
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const onGoogle = async () => {
    setLoading(true);
    try {
      await wrapToaster(
        () => authenticateWithGoogle(),
        "Google Login successful",
        "Google Login failed"
      );
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthPageContainer>
      <EmailAuthLogin onSubmit={onEmailLogin} loading={loading} />
      <AuthWaysDivider />
      <GoogleAuth onClick={onGoogle} loading={loading} />
    </AuthPageContainer>
  );
};

export default LoginPage;
