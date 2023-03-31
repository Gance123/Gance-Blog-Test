import { useEffect } from "react";
import Link from "next/link";
import { Box, Flex, Text, List, ListItem } from "@chakra-ui/react";
import { ScrollObserver } from "../../hooks/ScrollObserver";

export const Header = () => {
  useEffect(() => {
    ScrollObserver(".invisible", ".header", { once: false });
  }, []);
  return (
    <Box
      className="header inView"
      minH={"15vh"}
      position={"fixed"}
      top={"0"}
      w={"100%"}
      opacity={".8"}
      p={"20px"}
    >
      <Flex color={"white"} align={"center"} className={"header_container"}>
        <Box
          cursor={"pointer"}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <Text fontSize={"4rem"}>GB</Text>
        </Box>
        <List>
          <Flex fontSize={"1.5rem"} justify={"space-between"} gap={"20"}>
            <ListItem>
              <Link href={"/"}>ABOUT ME</Link>
            </ListItem>
            <ListItem>
              <Link href={"/"}>CONTACT</Link>
            </ListItem>
            <ListItem>
              <Link href={"/"}>about me</Link>
            </ListItem>
          </Flex>
        </List>
      </Flex>
    </Box>
  );
};
