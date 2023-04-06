import { Box } from "@chakra-ui/react";
import { CircleFont } from "../atoms/CircleFont";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export const CircleMenu = () => {
  return (
    <>
      <Box
        className="menu_button"
        position={"fixed"}
        top={"9"}
        right={"-1"}
        zIndex={"100"}
        transform={"translate(-50%,-50%)"}
        fontSize={"3rem"}
      >
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Box>
      <Box
        className="circle_menu"
        h={"330px"}
        w={"330px"}
        borderRadius={"50%"}
        position={"fixed"}
        top={"-140"}
        right={"-140"}
        color={"black"}
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
    </>
  );
};
