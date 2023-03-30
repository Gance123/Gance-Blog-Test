import { HomeLayout } from "../../layouts/HomeLayout";
import { HomeMenu } from "../organisms/HomeMenu";
import { HomeTitle } from "../organisms/HomeTitle";

export const HomeTemplate = () => {
  return (
    <HomeLayout>
      {/* タイトル */}
      <HomeTitle />
      {/* メニュー */}
      <HomeMenu/>
    </HomeLayout>
  );
};
