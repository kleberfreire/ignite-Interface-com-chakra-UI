import { Box, Center, Divider, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { BannerHome } from "../components/BannerHome";
import { ContinentsSlides } from "../components/ContinentsSlides";
import Header from "../components/Header";
import { TravelsType } from "../components/TravelsType";

const Home: NextPage = () => {
  return (
    <Box marginX="auto" maxWidth={1440}>
      <Header />
      <BannerHome />
      <TravelsType />
      <Center mt="80px" maxWidth="1160px" mx="auto">
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
        mt="52px"
        color="var(--chakra-colors-dark-text)"
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>
      <ContinentsSlides />
    </Box>
  );
};

export default Home;
