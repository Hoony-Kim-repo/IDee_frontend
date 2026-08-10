import { Text } from "@chakra-ui/react";

const TextRenderer = ({ content }) => {
  return <Text whiteSpace={"pre-wrap"}>{content.data.text}</Text>;
};

export default TextRenderer;
