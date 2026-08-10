import {
  Box,
  DataList,
  Grid,
  GridItem,
  Image,
  Textarea,
  VStack,
} from "@chakra-ui/react";

const CardBody = ({ profileImage, list, bio }) => {
  return (
    <VStack>
      <Grid templateColumns={"repeat(3, 1fr)"} w={"100%"}>
        <GridItem colSpan={1}>
          <Box
            borderRadius={"xl"}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image
              src={profileImage}
              alt="profileImg"
              objectFit={"contain"}
              boxSize={"2xs"}
              borderRadius="full"
              border="3px solid "
            />
          </Box>
        </GridItem>

        <GridItem colSpan={2}>
          <Box
            borderRadius="xl"
            border={"0.5px dotted rgba(255, 255, 255, 0.6)"}
            boxShadow="0 2px 10px rgba(0,0,0,0.2)"
            p={6}
          >
            <DataList.Root
              orientation={"horizontal"}
              divideY={"2px"}
              size={"lg"}
            >
              {list &&
                list.map((item, idx) => (
                  <DataList.Item key={idx} flex={1}>
                    <DataList.ItemLabel
                      color={"basicWhiteBlackColor"}
                      fontWeight={"bold"}
                    >
                      {item.label}
                    </DataList.ItemLabel>
                    <DataList.ItemValue>{item.value}</DataList.ItemValue>
                  </DataList.Item>
                ))}
            </DataList.Root>
          </Box>
        </GridItem>
      </Grid>

      <Box w={"100%"} borderRadius="xl" pt={6}>
        <Textarea size={"xl"} autoresize maxLines={3} defaultValue={bio} />
      </Box>
    </VStack>
  );
};

export default CardBody;
