import { Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  top: string;
  left: string;
  deg: string;
};
export const CircleFont = (props: Props) => {
  const { top, left, deg } = props;
  return (
    <Text
      // fontFamily={"Anton"}
      letterSpacing={"1px"}
      fontSize={".1rem"}
      position={"absolute"}
      top={top}
      left={left}
      color={"white"}
      transformOrigin={"center center"}
      transform={`translate(-50%,-50%) rotate(${deg}deg)`}
    >
      menu
    </Text>
  );
};
