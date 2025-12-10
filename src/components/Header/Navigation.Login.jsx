import { Button, Text } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import { useAuth } from "../../hooks/useAuth";

const LoginNavigation = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const isAuthenticated = !!user && user.emailVerified;

  const onLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return !isAuthenticated ? (
    <>
      <NavLink to={"/login"}>
        <Text fontWeight={"bold"}>Login</Text>
      </NavLink>
      <NavLink to={"/signup"}>
        <Text fontWeight={"bold"}>Sign Up</Text>
      </NavLink>
    </>
  ) : (
    <Button variant="ghost" onClick={onLogout}>
      <Text fontWeight={"bold"}>Logout</Text>
    </Button>
  );
};

export default LoginNavigation;
