import { Box, Flex, Text, List, ListItem } from "@chakra-ui/react";
import Link from "next/link";

export const Header = () => {
  return (
    <Box
      minH={"15vh"}
      position={"fixed"}
      top={"0"}
      w={"100%"}
      opacity={".8"}
      p={"20px"}
    >
      <Flex color={"white"} justify={"space-between"} align={"center"}>
        <Box>
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
