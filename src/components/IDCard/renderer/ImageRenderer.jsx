import { Image } from "@chakra-ui/react";

const ImageRenderer = ({ content }) => {
  return (
    <Image
      src={content.data.url}
      objectFit={"cover"}
      w={"100%"}
      h={"100%"}
      borderRadius={"md"}
    />
  );
};

export default ImageRenderer;
