import { Box, Container } from "@chakra-ui/react";
import profileImg from "../../../assets/Example/my-profile-picture.jpg";
import ExampleBackground from "../Background";
import ID_Body from "./ID_Body";
import ID_Footer from "./ID_Footer";
import ID_Header from "./ID_Header";

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

const footerData = [
  {
    category: "Skills",
    data: ["React", "Python", "JavaScript", "NodeJS", "AI"],
  },
  {
    category: "Keywords",
    data: ["Positive", "Passionate", "Teamwork", "Creative"],
  },
];

const ExampleFront = () => {
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
      <ExampleBackground />

      <Container
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
        <ID_Header name={"Hoony Kim"} job={"Software Engineer"} />

        <ID_Body profileImg={profileImg} items={items} />

        <ID_Footer data={footerData} />
      </Container>
    </Box>
  );
};

export default ExampleFront;
