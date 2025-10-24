import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Authentication = () => {
  return (
    <Button variant={"ghost"}>
      <NavLink to={"/login"}>Login</NavLink>
    </Button>
  );
};

export default Authentication;
