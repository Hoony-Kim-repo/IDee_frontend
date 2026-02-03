import { VStack } from "@chakra-ui/react";
import DashboardHeader from "../../components/dashboard/Dashboard.Header";
import DashboardProfileCard from "../../components/dashboard/Dashboard.ProfileCard";

const MyDashboard = () => {
  return (
    <VStack>
      <DashboardHeader />

      <DashboardProfileCard />
    </VStack>
  );
};

export default MyDashboard;
