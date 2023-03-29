import React from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "../components/molecules/Header";

type Props = {
  children: React.ReactNode;
};

export const HomeLayout = (props: Props) => {
  const { children } = props;
  return (
    <Box>
      <Header />
      <main>{children}</main>
    </Box>
  );
};
