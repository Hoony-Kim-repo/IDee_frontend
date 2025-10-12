import { Box, Container, Text } from "@chakra-ui/react";

const TextSeparator = ({
  textArray,
  flexDirection,
  firstLetterSize,
  firstLetterColor,
  mr,
}) => {
  return (
    <Container display={"flex"} flexDirection={flexDirection || "column"}>
      {textArray.map((text, idx) => (
        <Box key={idx} fontSize={firstLetterSize} display="flex">
          <Text fontWeight={"bold"} color={firstLetterColor} mr={mr}>
            {text.charAt(0)}
          </Text>
          {text.slice(1)}
        </Box>
      ))}
    </Container>
  );
};

export default TextSeparator;
