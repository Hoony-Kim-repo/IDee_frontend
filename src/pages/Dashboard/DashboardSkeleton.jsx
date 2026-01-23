import {
  Box,
  HStack,
  SkeletonText,
  Strong,
  Text,
  VStack,
} from "@chakra-ui/react";

const Skeleton = (
  <SkeletonText
    ml={"auto"}
    height={6}
    noOfLines={1}
    width={"12vh"}
    variant={"shine"}
    css={{
      "--start-color": "colors.pink.400",
      "--end-color": "colors.purple.200",
    }}
  />
);

const DashboardSkeleton = () => {
  return (
    <>
      {/* Header Skeleton */}
      <HStack mb={4}>
        <Text fontWeight={"bold"} fontSize={"lg"}>
          Welcome,
        </Text>
        {Skeleton}
      </HStack>

      {/* Card Skeleton */}
      <VStack>
        <Box borderWidth={"1px"} borderRadius={"lg"} p={"6"} width="30vh">
          <HStack width={"full"} gap={"6"} alignItems={"center"} mb={2}>
            <Text>
              <Strong>Email:</Strong>
            </Text>
            {Skeleton}
          </HStack>

          <HStack width={"full"} gap={"6"} alignItems={"center"} mb={2}>
            <Text whiteSpace={"nowrap"}>
              <Strong>Full Name:</Strong>
            </Text>
            {Skeleton}
          </HStack>

          <HStack width={"full"} gap={"6"} alignItems={"center"}>
            <Text>
              <Strong>NickName:</Strong>
            </Text>
            {Skeleton}
          </HStack>
        </Box>
      </VStack>
    </>
  );
};

export default DashboardSkeleton;
