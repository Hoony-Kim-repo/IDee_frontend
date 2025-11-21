import axios from "axios";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const AuthActions = async ({ request }) => {
  const formData = await request.formData();

  const userEmail = formData.get("email");
  const userPassword = formData.get("password");
  const action = formData.get("action");

  if (!EMAIL_REGEX.test(userEmail)) {
    return { success: false, message: "Invalid email format." };
  }

  return {
    success: true,
    email: userEmail,
    password: userPassword,
    action: action,
  };
};

const googleAuthenticate = async (action, user) => {
  const idToken = await user.getIdToken();

  let URL = "";
  if (action === "login")
    URL = `${import.meta.env.VITE_BACKEND_URL}/api/googleLogin`;
  else URL = `${import.meta.env.VITE_BACKEND_URL}/api/googleSignup`;

  const res = await axios.post(
    URL,
    {},
    {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
      withCredentials: true,
    }
  );

  return res.data;
};

const sendVerificationCodeAction = async (email) => {
  return axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/send-email-code`, {
    email: email,
  });
};

const compareVerificationCodeAction = async (email, code) => {
  return axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/api/compare-email-code`,
    {
      email: email,
      code: code,
    }
  );
};

export {
  AuthActions,
  compareVerificationCodeAction,
  googleAuthenticate,
  sendVerificationCodeAction,
};
