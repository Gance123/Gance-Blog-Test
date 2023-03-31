import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { ScrollObserver } from "../../hooks/ScrollObserver";

export const HomeMenu = () => {
  useEffect(() => {
    ScrollObserver(".home_menu", ".home_menu", { once: false });
  }, []);
  return (
    <Box
      className="home_menu"
      overflow={"hidden"}
      minH={"100vh"}
      position={"relative"}
    >
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
        <Text display={"inline-block"}>Welcome to Gance Blog</Text>
      </Box>
    </Box>
  );
};
