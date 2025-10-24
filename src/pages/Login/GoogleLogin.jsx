import { Button, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../Firebsae";

const GoogleLogin = () => {
  const onLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;
      const idToken = await user.getIdToken();

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/googleLogin`,
        {},
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }
      );

      console.log("Backend Response: ", res.data);
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
