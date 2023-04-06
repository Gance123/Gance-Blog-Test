import React, { useEffect, useState } from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { ScrollObserver } from "../../hooks/ScrollObserver";
import { SlideItem } from "../atoms/SlideItem";

export const HomeTitle = () => {
  useEffect(() => {
    ScrollObserver(".home_title", ".home_title", "inView", {
      once: false,
    });
  }, []);
  return (
    <Box mb={"30vh"}>
      <Box
        className="home_title"
        h={"100vh"}
        w={"100%"}
        position={"relative"}
        zIndex={"-1"}
        overflow={"hidden"}
      >
        <Box
          position={"absolute"}
          h={"100%"}
          w={"100%"}
          zIndex={"100"}
          bg={"transparent"}
          display={"grid"}
          gridTemplateColumns={"repeat(7, 1fr)"}
        >
          <SlideItem font={"G"} font2={"B"} />
          <SlideItem font={"A"} font2={"L"} />
          <SlideItem font={"N"} font2={"O"} />
          <SlideItem font={"C"} font2={"G"} />
          <SlideItem font={"E"} />
          <SlideItem />
          <SlideItem />
        </Box>
        <Image
          className="home_title_image"
          opacity={"0"}
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
          opacity={"0"}
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
      </Box>
    </Box>
  );
};
