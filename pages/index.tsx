import { GetStaticProps } from "next";
import { client } from "../libs/client";
import { Data } from "../types/type";
import { HomeTemplate } from "../components/templates/HomeTemplate";
import HomeContext from "../store/HomeContext";

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "my-website" });
  return {
    props: {
      data: data.contents,
    },
  };
};

export default function Home({ data }: Array<Data> | any) {
  return (
    <HomeContext.Provider value={data}>
      <HomeTemplate />
    </HomeContext.Provider>
  );
}
