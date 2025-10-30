import { Button, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toaster } from "../../components/ui/toaster";
import { auth, googleProvider } from "../../Firebase";
import { setUser } from "../../store/userSlice";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = async () => {
    const processLogin = async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);

        const user = result.user;
        const idToken = await user.getIdToken();

        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/googleLogin`,
          {},
          {
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
            withCredentials: true,
          }
        );

        if (res.statusText === "OK") {
          dispatch(
            setUser({ uid: res.data.user.uid, email: res.data.user.email })
          );
        }

      } catch (error) {
        console.error("Google Login Failed: ", error);
      }
    };

    toaster.promise(processLogin, {
      success: {
        title: "Login Success!",
      },
      error: {
        title: "Login Failed!",
      },
      loading: {
        title: "Logging in...",
      },
    });

    navigate("/");
  };

  return (
    <>
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
    </>
  );
};

export default GoogleLogin;
