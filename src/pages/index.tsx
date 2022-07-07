import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { BannerHome } from "../components/BannerHome";
import Header from "../components/Header";
import { TravelsType } from "../components/TravelsType";

const Home: NextPage = () => {
  return (
    <Box marginX="auto" maxWidth={1440}>
      <Header />
      <BannerHome />
      <TravelsType />
    </Box>
  );
};

export default Home;
