import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { ScrollObserver } from "../../hooks/ScrollObserver";
import { CircleMenu } from "../molecules/CircleMenu";

export const HomeMenu = () => {
  useEffect(() => {
    const { init } = ScrollObserver(".home_menu", ".home_menu", {
      once: false,
    });
    init();
  }, []);

  return (
    <>
      <CircleMenu />
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
          Welcome to Gance Blog
        </Box>
      </Box>
    </>
  );
};
