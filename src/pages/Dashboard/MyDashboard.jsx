import { VStack } from "@chakra-ui/react";
import DashboardHeader from "../../components/dashboard/Dashboard.Header";
import DashboardProfileCard from "../../components/dashboard/Dashboard.ProfileCard";
import { useProfile } from "../../hooks/useProfile";

const MyDashboard = () => {
  const { profile } = useProfile();

  console.log(profile);

  return (
    <VStack>
      <DashboardHeader />

      <DashboardProfileCard profile={profile} />
    </VStack>
  );
};

export default MyDashboard;
