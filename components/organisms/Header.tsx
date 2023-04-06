import { useEffect } from "react";
import Link from "next/link";
import { Flex, List, ListItem } from "@chakra-ui/react";
import { ScrollObserver } from "../../hooks/ScrollObserver";
import { CircleMenu } from "../molecules/CircleMenu";

export const Header = () => {
  useEffect(() => {
    ScrollObserver(".invisible", ".header", "inView", { once: false });
    ScrollObserver(".invisible", ".circle_menu", "inView", { once: false });
    ScrollObserver(".home_menu", ".header", "clm-2", {
      once: false,
    });
    ScrollObserver(".home_menu", ".circle_menu", "clm-2", {
      once: false,
    });
    ScrollObserver(".home_menu", ".menu_button", "clm-2", {
      once: false,
    });
  }, []);
  return (
    <>
      <Flex
        className="header inView"
        h={"15vh"}
        position={"fixed"}
        top={"0"}
        w={"100%"}
        opacity={".8"}
        color={"white"}
        align={"center"}
        fontFamily={"Anton"}
        fontSize={{ base: "1rem", md: "2rem" }}
      >
        <List w={"100%"}>
          <Flex
            className="header_lists"
            align={{ base: "start", md: "center" }}
            direction={{ base: "column", md: "row" }}
          >
            <ListItem
              className="header_list"
              padding={{ base: "10px", md: "50px" }}
            >
              <Link href={"/"}>ABOUT ME</Link>
            </ListItem>
            <ListItem
              className="header_list"
              padding={{ base: "10px", md: "50px" }}
            >
              <Link href={"/"}>CONTACT</Link>
            </ListItem>
            <ListItem
              className="header_list"
              padding={{ base: "10px", md: "50px" }}
            >
              <Link href={"/"}>PROFILE</Link>
            </ListItem>
          </Flex>
        </List>
      </Flex>
      <CircleMenu />
    </>
  );
};
