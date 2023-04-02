import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { CircleFont } from "../atoms/CircleFont";
import { ScrollObserver } from "../../hooks/ScrollObserver";

export const CircleMenu = () => {
  useEffect(() => {
    const { init } = ScrollObserver(".invisible", ".circle", { once: false });
    init();
  }, []);
  return (
    <Box
      className="circle inView"
      h={"330px"}
      w={"330px"}
      borderRadius={"50%"}
      position={"fixed"}
      top={"0"}
      right={"0"}
      display={{ base: "block", md: "none" }}
    >
      <Box
        h={"150px"}
        w={"150px"}
        bg={"white"}
        borderRadius={"50%"}
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%,-50%)"}
      ></Box>
      <CircleFont top={"24%"} left={"50%"} deg={"0"} />
      <CircleFont top={"28%"} left={"63%"} deg={"30"} />
      <CircleFont top={"37%"} left={"72%"} deg={"60"} />

      <CircleFont top={"50%"} left={"76%"} deg={"90"} />
      <CircleFont top={"63%"} left={"72%"} deg={"120"} />
      <CircleFont top={"72%"} left={"63%"} deg={"150"} />

      <CircleFont top={"76%"} left={"50%"} deg={"180"} />
      <CircleFont top={"72%"} left={"37%"} deg={"210"} />
      <CircleFont top={"63%"} left={"28%"} deg={"240"} />

      <CircleFont top={"50%"} left={"24%"} deg={"-90"} />
      <CircleFont top={"37%"} left={"28%"} deg={"-60"} />
      <CircleFont top={"28%"} left={"37%"} deg={"-30"} />
    </Box>
  );
};
