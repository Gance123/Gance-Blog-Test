import React, { useEffect } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { ScrollObserver } from "../../hooks/ScrollObserver";
import { CircleMenu } from "../molecules/CircleMenu";

export const HomeMenu = () => {
  useEffect(() => {
    ScrollObserver(".home_menu", ".home_menu", "inView", {
      once: false,
    });
  }, []);

  return (
    <>
      <Box
        className="home_menu"
        overflow={"hidden"}
        minH={"100vh"}
        position={"relative"}
      >
        <Box position={"relative"} zIndex={"100"}>
          <Flex
            direction={"column"}
            w={"100%"}
            align={"center"}
            justify={"center"}
          >
            <Image src={"/images/programming.jpg"} alt={""} />
          </Flex>
        </Box>
        <Box
          className="homeBarText"
          fontSize={"12rem"}
          display={"inline-block"}
          whiteSpace={"nowrap"}
          textTransform={"uppercase"}
          fontFamily={"Anton"}
          pl={"100%"}
          color={"white"}
          mixBlendMode={"overlay"}
          position={"fixed"}
          bottom={"0"}
        >
          Welcome to Gance Blog
        </Box>
      </Box>
    </>
  );
};
