import React from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "../components/molecules/Header";
import { CircleMenu } from "../components/molecules/CircleMenu";

type Props = {
  children: React.ReactNode;
};

export const HomeLayout = (props: Props) => {
  const { children } = props;
  return (
    <Box>
      <Header />
      <CircleMenu />
      <main>{children}</main>
    </Box>
  );
};
