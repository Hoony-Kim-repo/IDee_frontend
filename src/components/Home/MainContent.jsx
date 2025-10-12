import { Box, Container, Grid, Image } from "@chakra-ui/react";
import logo from "../../assets/IDee_logo-Transparent.png";
import TextSeparator from "../common/TextSeparator";

const textSeparater = ["Create", "Your", "Custom", "Online ID"];

const MainContent = () => {
  return (
    <Container p={{ base: 4, md: 6 }}>
      <Grid templateColumns="repeat(2, 1fr)" gap="6">
        <Box placeItems={"end"}>
          <Image
            src={logo}
            alt="logo"
            boxSize={"2xs"}
            m={"50px"}
            flex="1"
            alignSelf={"center"}
            alignItems={"center"}
            justifyContent={"center"}
          />
        </Box>

        <Box placeItems={"start"} display={"flex"} alignItems={"center"}>
          <TextSeparator
            textArray={textSeparater}
            flexDirection={"column"}
            firstLetterSize={"4xl"}
            firstLetterColor={"pink.400"}
            mr={4}
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default MainContent;
