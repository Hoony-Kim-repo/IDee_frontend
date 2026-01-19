import { Box, Strong, Text } from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";

const DashboardProfileCard = ({ profile }) => {
  const { user } = useAuth();

  return (
    <Box borderWidth={"1px"} borderRadius={"lg"} p={"6"}>
      <Text>
        <Strong>Email:</Strong> {user.email}
      </Text>
      <Text>
        <Strong>Full Name:</Strong> {profile.fullName}
      </Text>
      <Text>
        <Strong>NickName:</Strong> {profile.nickname}
      </Text>
    </Box>
  );
};

export default DashboardProfileCard;
