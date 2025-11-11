// import axios from "axios";

import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../Firebase";

const AuthActions = async ({ request }) => {
  const formData = await request.formData();

  console.log(formData.get("email"));
  console.log(formData.get("action"));

  // const userEmail = formData.get("email");

  // const res = await axios;
};

const googleAuthenticate = async (action) => {
  const result = await signInWithPopup(auth, googleProvider);

  const user = result.user;
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

export { AuthActions, googleAuthenticate };
