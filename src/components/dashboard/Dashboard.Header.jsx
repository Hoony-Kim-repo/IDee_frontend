import { Heading } from "@chakra-ui/react";
import { useProfile } from "../../hooks/useProfile";

const DashboardHeader = () => {
  const { displayName } = useProfile();

  return (
    <Heading
      as="h1"
      size="lg"
      mb={4}
      fontWeight="bold"
      display={"flex"}
      justifyContent={"center"}
    >
      Welcome, {displayName}
    </Heading>
  );
};

export default DashboardHeader;
