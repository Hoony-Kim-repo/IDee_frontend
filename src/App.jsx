import { Box, Container } from "@chakra-ui/react";
import Card from "./components/common/Card";
import ToggleModeButton from "./components/common/ToggleModeButton";

function App() {
  return (
    <Container maxW="1200px" p={{ base: 4, md: 6 }}>
      <Box p={{ base: 0, md: 6 }}>
        <h1>App</h1>
        <ToggleModeButton />
      </Box>

      <Card>
        <p>This is a card. Colors change automatically with Dark/Light Mode!</p>
      </Card>
    </Container>
  );
}

export default App;
