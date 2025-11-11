import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import { toaster } from "../../../components/ui/toaster";
import { setUser } from "../../../store/userSlice";
import { googleAuthenticate } from "../Actions";
import AuthPageContainer from "../AuthPageContainer";
import EmailAuth from "../EmailAuth";
import GoogleAuth from "../GoogleAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onGoogleLogin = async () => {
    setIsLoading(true);
    const processLogin = async () => {
      const result = await googleAuthenticate("login");
      console.log(result);

      if (result === null) {
        throw new Error("The google account has not been registered yet.");
      }

      dispatch(setUser({ uid: result.user.uid, email: result.user.email }));
      navigate("/");
    };

    toaster.promise(processLogin, {
      success: () => {
        setIsLoading(false);
        return { title: "Login Success!" };
      },
      error: (err) => {
        setIsLoading(false);
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
