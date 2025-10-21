import { Box, DataList, Image, Text } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import ExampleBackground from "../Background";
import ID_Container from "../ID_Container";
import skills from "./Skills.json";

const ExampleBack = () => {
  const { theme } = useTheme();

  return (
    <ID_Container>
      <ExampleBackground />

      <Box
        w={"100%"}
        borderRadius="xl"
        boxShadow="0 2px 10px rgba(0,0,0,0.2)"
        p={6}
      >
        <DataList.Root
          orientation={"horizontal"}
          divideY={"1px"}
          width={"100%"}
          height={"80%"}
          size="lg"
        >
          {skills.map((skill, idx) => (
            <DataList.Item key={idx} pt="5">
              <DataList.ItemLabel
                fontWeight={"bold"}
                flex={1}
                color={theme === "light" ? "rgba(85, 40, 85)" : "white"}
              >
                {skill.category}
              </DataList.ItemLabel>
              <DataList.ItemValue
                gap={5}
                flex={4}
                color={theme === "light" ? "rgba(85, 40, 85)" : "white"}
              >
                {skill.skills.map((detail, index) => (
                  <Box key={index} display={"flex"} alignItems={"center"}>
                    <Image
                      boxSize={"40px"}
                      objectFit={"contain"}
                      src={detail.icon}
                      alt={detail.name}
                      mr={2}
                      borderRadius={"20px"}
                      backgroundColor={"white"}
                    />

                    <Text fontWeight={"bold"}>{detail.name}</Text>
                  </Box>
                ))}
              </DataList.ItemValue>
            </DataList.Item>
          ))}
        </DataList.Root>
      </Box>
    </ID_Container>
  );
};

export default ExampleBack;
