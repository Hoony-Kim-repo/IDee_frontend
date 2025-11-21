import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import { toaster } from "../../../components/ui/toaster";
import { setUser } from "../../../store/userSlice";
import { googleAuthenticate } from "../Actions";
import AuthPageContainer from "../AuthPageContainer";
import EmailAuth from "../EmailAuth";
import { googleSignIn } from "../FirebaseAuth";
import GoogleAuth from "../GoogleAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onGoogleLogin = async () => {
    setIsLoading(true);
    const processLogin = async () => {
      const res = await googleSignIn();
      const login = await googleAuthenticate("login", res);

      if (!login?.success) throw new Error(login.message);

      dispatch(setUser({ uid: login.user.uid, email: login.user.email }));
      setIsLoading(false);
    };

    toaster.promise(processLogin, {
      success: () => {
        navigate("/");
        return { title: "Login Success!" };
      },
      error: (err) => {
        return {
          title: "Login Failed!",
          description: err?.message || "An error occurred during login.",
        };
      },
      loading: {
        title: "Logging in...",
      },
    });
  };

  return (
    <AuthPageContainer>
      <Form method="POST">
        <EmailAuth title="Login with Email" action="login" />
      </Form>
      <GoogleAuth onClick={onGoogleLogin} isLoading={isLoading} />
    </AuthPageContainer>
  );
};

export default LoginPage;
