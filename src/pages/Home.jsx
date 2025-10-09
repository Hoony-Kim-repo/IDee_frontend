import { Box, Container } from "@chakra-ui/react";
import Card from "../components/common/Card";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Container p={{ base: 4, md: 6 }}>
        <Box p={{ base: 0, md: 6 }}></Box>

        <Card>
          <p>
            This is a card. Colors change automatically with Dark/Light Mode!
          </p>
        </Card>
      </Container>
    </>
  );
};

export default Home;
