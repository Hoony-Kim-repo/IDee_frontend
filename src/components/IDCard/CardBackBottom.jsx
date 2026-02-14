import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";

const CardBackBottom = ({ data }) => {
  return (
    <Box
      w={"100%"}
      borderRadius={"xl"}
      boxShadow={"0 2px 10px rgba(0, 0, 0, 0.2)"}
      p={6}
    >
      <Heading
        size={"md"}
        mb={5}
        textAlign={"center"}
        borderBottom={"1px solid"}
        borderColor={"gray.200"}
        pb={2}
      >
        {data.name}
      </Heading>

      <Stack gap={6}>
        {data.list.map((section) => {
          const maxProps =
            section.data.length > 0
              ? Math.max(
                  ...section.data.map((item) => Object.keys(item).length),
                )
              : 0;

          return (
            <Box key={section.id}>
              <Text
                fontWeight={"bold"}
                fontSize={"xs"}
                letterSpacing={"wider"}
                // color={"blue.600"}
                mb={2}
                textTransform={"uppercase"}
              >
                {section.category}
              </Text>

              <Stack gap={1.5}>
                {section.data.map((item, index) => (
                  <Grid
                    key={index}
                    templateColumns={`repeat(${maxProps}, 1fr)`}
                    gap={2}
                    px={2}
                    py={1.5}
                    borderRadius={"sm"}
                  >
                    {Object.values(item).map((value, valIndex) => (
                      <Box key={valIndex}>
                        <Text
                          fontSize={maxProps > 3 ? "2xs" : "xs"}
                          fontWeight={"medium"}
                          color={"whiteAlpha.900"}
                          lineHeight={"shorter"}
                          // truncate
                        >
                          {value}
                        </Text>
                      </Box>
                    ))}
                  </Grid>
                ))}
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default CardBackBottom;
