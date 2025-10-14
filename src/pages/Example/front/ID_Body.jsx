import { Box, DataList, Grid, Image } from "@chakra-ui/react";
import { useTheme } from "next-themes";

const ID_Body = ({ profileImg, items }) => {
  const { theme } = useTheme();

  return (
    <Grid
      templateColumns={"repeat(2, 1fr)"}
      display={"flex"}
      mb={6}
      flex={3.14}
      minH={0}
    >
      <Box
        borderRadius={"xl"}
        bgGradient="linear(to-br, whiteAlpha.600, whiteAlpha.300)"
        boxShadow="inset 0 0 12px rgba(0,0,0,0.1)"
        flex={1}
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          src={profileImg}
          alt="profileImg"
          objectFit={"contain"}
          boxSize={"xs"}
          borderRadius="full"
          border="3px solid "
        />
      </Box>

      <Box
        flex="2"
        borderRadius="xl"
        boxShadow="0 2px 10px rgba(0,0,0,0.2)"
        p={6}
      >
        <DataList.Root
          orientation={"horizontal"}
          divideY={"1px"}
          width={"100%"}
          height={"100%"}
          size={"lg"}
        >
          {items.map((item, idx) => (
            <DataList.Item key={idx} pt="5" flex={1}>
              <DataList.ItemLabel
                color={theme === "light" ? "rgba(85, 40, 85)" : "white"}
                fontWeight={"bold"}
              >
                {item.label}
              </DataList.ItemLabel>
              <DataList.ItemValue>{item.value}</DataList.ItemValue>
            </DataList.Item>
          ))}
        </DataList.Root>
      </Box>
    </Grid>
  );
};

export default ID_Body;
