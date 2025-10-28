import { Button, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../Firebase";

const GoogleLogin = () => {
  const onLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;
      const idToken = await user.getIdToken();

<<<<<<< HEAD
      await axios.post(
=======
      const res = await axios.post(
>>>>>>> 819103a... ISLoggined API getting success
        `${import.meta.env.VITE_BACKEND_URL}/api/googleLogin`,
        {},
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error("Google Login Failed: ", error);
    }
  };

  return (
    <Button borderRadius={"24px"} onClick={onLogin}>
      <Image
        boxSize={"30px"}
        objectFit={"contain"}
        src={
          "https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
        }
        alt={"Google Icon"}
        mr={2}
        borderRadius={"20px"}
        backgroundColor={"white"}
      />
      <Text textStyle={"lg"}>Continue with Google</Text>
    </Button>
  );
};

export default GoogleLogin;
