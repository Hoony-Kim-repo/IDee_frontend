import { Text } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../../Firebase";

const LoginNavigation = () => {
  // const { user } = useAuth();
  // const navigate = useNavigate();

  const onLogout = async () => {
    try {
      await signOut(auth);
      // navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  // return !user ? (
  //   <>
  //     <NavLink to={"/login"}>
  //       <Text fontWeight={"bold"}>Login</Text>
  //     </NavLink>
  //     <NavLink to={"/signup"}>
  //       <Text fontWeight={"bold"}>Sign Up</Text>
  //     </NavLink>
  //   </>
  // ) : (
  //   <Button variant="ghost" onClick={onLogout}>
  //     <Text fontWeight={"bold"}>Logout</Text>
  //   </Button>
  // );
  return (
    <>
      <NavLink to={"/login"}>
        <Text fontWeight={"bold"}>Login</Text>
      </NavLink>
      <NavLink to={"/signup"}>
        <Text fontWeight={"bold"}>Sign Up</Text>
      </NavLink>
      <Text fontWeight={"bold"} onClick={onLogout} cursor="pointer">
        Logout
      </Text>
    </>
  );
};

export default LoginNavigation;
