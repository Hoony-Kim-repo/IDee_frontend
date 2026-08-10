import { Link, Stack } from "@chakra-ui/react";

const LinksRenderer = ({ content }) => {
  return (
    <Stack>
      {content.data.links.map((link) => (
        <Link key={link.url} href="link.url" target="_blank">
          {link.title}
        </Link>
      ))}
    </Stack>
  );
};

export default LinksRenderer;
