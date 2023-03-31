import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";

export const HomeTitle = () => {
  return (
    <Box mb={"20vh"} className="home_title">
      <Box
        h={"100vh"}
        w={"100%"}
        position={"relative"}
        zIndex={"-1"}
        overflow={"hidden"}
        fontFamily={"Anton"}
      >
        <Box
          position={"absolute"}
          h={"100%"}
          w={"100%"}
          zIndex={"100"}
          bg={"transparent"}
          display={"grid"}
          gridTemplateColumns={"repeat(5, 1fr)"}
        >
          <Box className="item">
            <Box></Box>
          </Box>
          <Box className="item">
            <Box></Box>
          </Box>
          <Box className="item">
            <Box></Box>
          </Box>
          <Box className="item">
            <Box></Box>
          </Box>
          <Box className="item">
            <Box></Box>
          </Box>
        </Box>
        <Image
          className="home_title_image"
          src={"https://source.unsplash.com/random"}
          alt={""}
          objectFit={"cover"}
          position={"absolute"}
          top={"0"}
          left={"0"}
          w={"100%"}
          h={"100%"}
        />
        <Image
          className="home_title_effect"
          src={"/images/effect2.jpeg"}
          mixBlendMode={"lighten"}
          opacity={".6"}
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
        <Box
          position={"absolute"}
          top={"30%"}
          left={"0%"}
          zIndex={"100"}
          mixBlendMode={"overlay"}
        >
          <Flex
            direction={"column"}
            fontSize={"7rem"}
            letterSpacing={"5rem"}
            color={"gray.200"}
            p={"30px"}
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
