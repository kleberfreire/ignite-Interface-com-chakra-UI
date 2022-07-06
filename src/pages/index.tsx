import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { BannerHome } from "../components/BannerHome";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <Box marginX="auto" maxWidth={1440}>
      <Header />
      <BannerHome />
      <h1>Home</h1>
    </Box>
  );
};

export default Home;
