import { Box, Strong, Text } from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";

const DashboardProfileCard = ({ profile }) => {
  const { user } = useAuth();

  return (
    <Box borderWidth={"1px"} width={"30vh"} borderRadius={"lg"} p={"6"}>
      <Text mb={2}>
        <Strong>Email:</Strong> {user.email}
      </Text>
      <Text mb={2}>
        <Strong>Full Name:</Strong> {profile.fullName}
      </Text>
      <Text>
        <Strong>NickName:</Strong> {profile.nickname}
      </Text>
    </Box>
  );
};

export default DashboardProfileCard;
