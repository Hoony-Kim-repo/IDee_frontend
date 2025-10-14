import {
  Box,
  Container,
  DataList,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { useTheme } from "next-themes";
import background from "../../assets/Example/background.webp";
import profileImg from "../../assets/Example/my-profile-picture.jpg";
import logo from "../../assets/IDee_logo-Transparent.png";

const items = [
  {
    label: "Name",
    value: "Gihoon Kim",
  },
  {
    label: "Prefered Name",
    value: "Hoony Kim",
  },
  {
    label: "Address",
    value: "Toronto",
  },
  {
    label: "GitHub Link",
    value: "https://github.com/Hoony-Kim-repo",
  },
  {
    label: "LinkedIn Link",
    value: "https://www.linkedin.com/in/gihoon-kim-532627196/",
  },
];

const ExampleFront = () => {
  const { theme } = useTheme();

  return (
    <Box
      position="relative"
      minH="80vh"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <Box
        position="absolute"
        w="8xl"
        height="80vh"
        bgImage={`url(${background})`}
        bgSize="fill"
        bgPosition={"center"}
        bgRepeat="no-repeat"
        borderRadius="2xl"
        opacity={0.65}
        zIndex={0}
      />

      <Container
        backgroundImage={`url(${background})`}
        position="relative"
        maxW="8xl"
        h="80vh"
        display="flex"
        flexDir="column"
        p={9}
        borderRadius="2xl"
        bg="rgba(255, 255, 255, 0.01)"
        overflow="hidden"
        boxShadow="20px 60px 40px rgba(0, 0, 0, 0.5)"
        border="1px dotted rgba(255, 255, 255, 0.6)"
      >
        <Grid
          templateColumns={"repeat(3, 1fr)"}
          flex={1}
          minH={0}
          alignItems={"center"}
          pl={6}
          pr={6}
        >
          <Box
            display={"flex"}
            justifyContent={"start"}
            alignItems={"center"}
            flex="1"
            maxH="100%"
            maxWw="100%"
          >
            <Image
              src={logo}
              alt="IDee_logo"
              objectFit={"contain"}
              maxH={"100%"}
              maxW={"100%"}
              boxSize={20}
              filter={"drop-shadow(0 0 6px rgba(0, 0, 0, 0.25"}
            />
          </Box>

          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Text
              fontWeight={"bold"}
              fontSize="3xl"
              letterSpacing="wide"
              bgGradient="linear(to-r, #2196f3, #e91e63)"
            >
              Hoony Kim
            </Text>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"end"}
            alignItems={"center"}
            flex="1"
          >
            <Text fontSize={"lg"}>Software Engineer</Text>
          </Box>
        </Grid>

        <Grid
          templateColumns={"repeat(2, 1fr)"}
          display={"flex"}
          mb={6}
          flex={3.14}
          minH={0}
        >
          <Box
            borderRadius={"xl"}
            bgGradient="linear(to-br, whiteAlpha.600, whiteAlpha.300)"
            boxShadow="inset 0 0 12px rgba(0,0,0,0.1)"
            flex={1}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image
              src={profileImg}
              alt="profileImg"
              objectFit={"contain"}
              boxSize={"xs"}
              borderRadius="full"
              border="3px solid "
            />
          </Box>

          <Box
            flex="2"
            borderRadius="xl"
            boxShadow="0 2px 10px rgba(0,0,0,0.2)"
            p={6}
          >
            <DataList.Root
              orientation={"horizontal"}
              divideY={"1px"}
              width={"100%"}
              height={"100%"}
              size={"lg"}
            >
              {items.map((item, idx) => (
                <DataList.Item key={idx} pt="5" flex={1}>
                  <DataList.ItemLabel
                    color={theme === "light" ? "rgba(85, 40, 85)" : "white"}
                    fontWeight={"bold"}
                  >
                    {item.label}
                  </DataList.ItemLabel>
                  <DataList.ItemValue>{item.value}</DataList.ItemValue>
                </DataList.Item>
              ))}
            </DataList.Root>
          </Box>
        </Grid>

        <Grid
          templateColumns={"repeat(5, 1fr)"}
          flex={1}
          minH={0}
          alignItems={"center"}
          gap={4}
        >
          <GridItem
            colSpan={4}
            borderRadius="xl"
            p={4}
            boxShadow="inset 0 0 10px rgba(0,0,0,0.05)"
          >
            <Box mb={2}>
              <Text fontWeight="bold">Skills</Text>
              <Box display="flex" gap={2} flexWrap="wrap">
                {["React", "TypeScript", "Next.js", "Figma", "Node.js"].map(
                  (skill) => (
                    <Box
                      key={skill}
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="sm"
                      fontWeight="medium"
                      boxShadow="0 2px 6px rgba(0,0,0,0.1)"
                    >
                      {skill}
                    </Box>
                  )
                )}
              </Box>
            </Box>

            <Box>
              <Text fontWeight="bold">Keywords</Text>
              <Box display="flex" gap={2} flexWrap="wrap">
                {["Positive", "Passionate", "Teamwork"].map((skill) => (
                  <Box
                    key={skill}
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="medium"
                    boxShadow="0 2px 6px rgba(0,0,0,0.1)"
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Box>
          </GridItem>
          <GridItem
            colSpan={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              borderRadius="xl"
              bgGradient="linear(to-br, whiteAlpha.700, whiteAlpha.400)"
              p={3}
              boxShadow="0 4px 12px rgba(0,0,0,0.1)"
            >
              <Image
                src={logo}
                alt="QR Code"
                boxSize={100}
                objectFit={"contain"}
                filter="drop-shadow(0 0 4px rgba(0,0,0,0.3))"
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default ExampleFront;
