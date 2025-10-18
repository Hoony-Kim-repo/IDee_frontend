import { Container } from "@chakra-ui/react";
import profileImg from "../../../assets/Example/my-profile-picture.jpg";
import ExampleBackground from "../Background";
import ID_Container from "../ID_Container";
import ID_Body from "./ID_Body";
import ID_Footer from "./ID_Footer";
import ID_Header from "./ID_Header";


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
    <ID_Container>
      <ExampleBackground />

      <Container
        position="relative"
        maxW="8xl"
        h="80vh"
        display="flex"
        flexDir="column"
        p={9}
      >
        <ID_Header name={"Hoony Kim"} job={"Software Engineer"} />

        <ID_Body profileImg={profileImg} />

        <ID_Footer data={footerData} />
      </Container>
    </ID_Container>
  );
};

export default ExampleFront;
