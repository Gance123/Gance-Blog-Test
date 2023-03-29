import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";

export const HomeTitle = () => {
  return (
    <Box>
      <Box
        h={"100vh"}
        w={"100vw"}
        position={"relative"}
        zIndex={"-1"}
        overflow={"hidden"}
      >
        <Image
          src={"/images/HomeTitle-1.jpg"}
          alt={""}
          objectFit={"cover"}
          position={"absolute"}
          top={"0"}
          left={"0"}
          w={"100%"}
          h={"100%"}
        />
        <Box
          bg={"blackColor"}
          position={"absolute"}
          top={"0"}
          left={"0"}
          w={"100%"}
          h={"100%"}
          opacity={".1"}
        ></Box>
        <Box position={"absolute"} top={"30%"} left={"0%"} zIndex={"100"}>
          <Flex
            direction={"column"}
            fontSize={"7rem"}
            letterSpacing={"5rem"}
            color={"gray.200"}
            p={"50px"}
            gap={"18"}
          >
            <Text>GANCE</Text>
            <Text>BLOG</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
