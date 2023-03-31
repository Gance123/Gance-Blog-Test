import { Box } from "@chakra-ui/react";
import { HomeLayout } from "../../layouts/HomeLayout";
import { HomeMenu } from "../organisms/HomeMenu";
import { HomeTitle } from "../organisms/HomeTitle";

export const HomeTemplate = () => {
  return (
    <HomeLayout>
      {/* インビジブルバー */}
      <Box className="invisible"></Box>
      {/* タイトル */}
      <HomeTitle />
      {/* メニュー */}
      <HomeMenu/>
    </HomeLayout>
  );
};
