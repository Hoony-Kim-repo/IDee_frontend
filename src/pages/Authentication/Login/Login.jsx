import AuthPageContainer from "../AuthPageContainer";
import EmailAuth from "../EmailAuth";

const LoginPage = () => {
  return (
    <AuthPageContainer>
      <EmailAuth title="Login with Email" isLogin={true} />
      {/* <GoogleAuth onClick={googleAuthActions} /> */}
    </AuthPageContainer>
  );
};

export default LoginPage;
