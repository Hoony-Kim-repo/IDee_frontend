import { Button, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearUser } from "../../store/userSlice";

const GoToLogin = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(clearUser());
  };

  return !isLoggedIn ? (
    <NavLink to={"/login"}>
      <Text fontWeight={"bold"}>Login</Text>
    </NavLink>
  ) : (
    <Button variant="ghost" onClick={onLogout}>
      <Text fontWeight={"bold"}>Logout</Text>
    </Button>
  );
};

export default GoToLogin;
