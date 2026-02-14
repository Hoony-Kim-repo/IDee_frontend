import { Box, DataList, Heading, Text } from "@chakra-ui/react";

const CardBackTop = ({ list }) => {
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
        {list.name}
      </Heading>
      <DataList.Root
        orientation={"horizontal"}
        divideY={"0.5px"}
        w={"100%"}
        size={"lg"}
        p={0}
      >
        {list.list.map((item, idx) => (
          <DataList.Item key={idx}>
            <DataList.ItemLabel
              fontWeight={"bold"}
              flex={2}
              color={"basicWhiteBlackColor"}
            >
              {item.category}
            </DataList.ItemLabel>
            <DataList.ItemValue gap={5} flex={4}>
              {item.data.map((detail, index) => (
                <Text key={index} fontWeight={"bold"}>
                  {detail}
                </Text>
              ))}
            </DataList.ItemValue>
          </DataList.Item>
        ))}
      </DataList.Root>
    </Box>
  );
};

export default CardBackTop;
