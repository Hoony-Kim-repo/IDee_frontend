import { Box, Heading, useToken, VStack } from "@chakra-ui/react";

const CreateDashboard = () => {
  const [dashboardHeroStart, dashboardHeroEnd] = useToken("colors", [
    "dashboardHeroStart",
    "dashboardHeroEnd",
  ]);

  return (
    <Box
      backgroundGradient={"to-r"}
      gradientFrom={dashboardHeroStart}
      gradientTo={dashboardHeroEnd}
      minH={"100rem"}
      py={"20"}
      px={"6"}
      // color="white"
    >
      <Box
        bg={"dashboardCardBg"}
        borderRadius={"2xl"}
        p={"10"}
        maxW={"100%"}
        mx={"auto"}
        boxShadow={"xl"}
        backdropFilter={"blur(10px)"}
      >
        <Heading mb={"6"} textAlign={"center"} fontFamily={"cursive"}>
          Create Your IDee Profile
        </Heading>

        <form>
          <VStack></VStack>
        </form>
      </Box>
    </Box>
  );
};

export default CreateDashboard;
