import { Box, Card, Container, Image, Separator } from "@chakra-ui/react";
import { Fragment } from "react";
import logo from "../../assets/IDee_logo-Transparent.png";
import Background from "../../components/Home/Background";
import MainContent from "../../components/Home/MainContent";
import cardContent from "./HomeCardContent.yaml";

const imageMap = {
  "IDee_logo-Transparent.png": logo,
};

const Home = () => {
  return (
    <>
      <Box position="relative">
        <Background />
        <MainContent />
      </Box>

      <Container marginTop={100}>
        <Container
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={6}
          h={"200px"}
        >
          {cardContent.map((content, idx) => (
            <Fragment key={content.id}>
              <Card.Root flex={1}>
                <Image
                  src={imageMap[content.img]}
                  alt={content.imgAlt}
                  boxSize={"150px"}
                  w={"100%"}
                  objectFit={"contain"}
                />
                <Card.Body gap={2} textAlign={"center"}>
                  <Card.Title>{content.title}</Card.Title>
                  {content.description.map((desc, idx) => (
                    <Card.Description key={idx}>{desc}</Card.Description>
                  ))}
                </Card.Body>
              </Card.Root>
              {idx !== cardContent.length - 1 ? (
                <Separator
                  orientation={"vertical"}
                  height={"80%"}
                  size={"lg"}
                />
              ) : null}
            </Fragment>
          ))}
        </Container>
      </Container>
    </>
  );
};

export default Home;
