import { Box, Center, Divider, Heading } from "@chakra-ui/react";
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
      <Center my="10" maxWidth="1160px" mx="auto">
        <Divider
          w="90px"
          borderColor="#000000"
          border="1px"
          size="lg"
          variant="solid"
        />
      </Center>
      <Heading
        textAlign="center"
        fontWeight="medium"
        color="var(--chakra-colors-dark-text)"
      >
        Vamos nessa? Então escolha seu continente
      </Heading>
    </Box>
  );
};

export default Home;
