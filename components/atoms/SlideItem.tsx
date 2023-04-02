import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  font?: string;
  font2?: string;
};

export const SlideItem = (props: Props) => {
  const { font, font2 } = props;
  return (
    <Box className="item">
      <Box></Box>
      <Flex
        as={"p"}
        direction={"column"}
        fontFamily={"Anton"}
        fontSize={"8rem"}
        textShadow={"0px 0px 10px gray"}
        color={"gray.200"}
        align={"center"}
        justify={"center"}
        h={"100%"}
      >
        <Text as={"span"}>{font}</Text>
        {font2 ? (
          <Text as={"span"}>{font2}</Text>
        ) : (
          <Text as={"span"}>&nbsp;</Text>
        )}
      </Flex>
    </Box>
  );
};
