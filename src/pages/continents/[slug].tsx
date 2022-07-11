import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { GetStaticProps } from "next/types";
import Header from "../../components/Header";
import { continents } from "../../mock/continents";
import { CardCitys } from "../../components/CardCitys";

export default function Continents({ continent }: any) {
  console.log(continent);
  return (
    <>
      <Header />
      <Box maxWidth="1440px" maxHeight="500px" mx="auto" position="relative">
        <Image src="https://images.unsplash.com/photo-1556150045-9665e721a108?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzU2MjAwNQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1440" />
        <Box
          position="absolute"
          bottom="0"
          left="0"
          bg="rgba(0,0,0, 0.3)"
          width="100%"
          height="100%"
        >
          <Heading
            position="absolute"
            bottom="12%"
            left="10%"
            fontSize="3rem"
            color="var(--chakra-colors-light-text)"
            textTransform="capitalize"
          >
            {continent.continent}
          </Heading>
        </Box>
      </Box>
      <Flex
        maxWidth="1160"
        mx="auto"
        mt="80px"
        align="center"
        justify="space-between"
      >
        <Text
          maxWidth="600px"
          maxHeight="211px"
          fontSize="1.5rem"
          color="var(--chakra-colors-dark-text)"
          textAlign="justify"
        >
          {continent.details}
        </Text>
        <HStack h="100%" spacing="42px">
          <Flex direction="column" align="center" justify="center">
            <Text
              color="var(--chakra-colors-highlight-100)"
              fontSize="3rem"
              fontWeight="semibold"
            >
              {continent.countriesQTD}
            </Text>
            <Heading
              fontSize="1.5rem"
              fontWeight="semibold"
              color="var(--chakra-colors-dark-text)"
            >
              países
            </Heading>
          </Flex>
          <Flex direction="column" align="center" justify="center">
            <Text
              color="var(--chakra-colors-highlight-100)"
              fontSize="3rem"
              fontWeight="semibold"
            >
              {continent.languagesQTD}
            </Text>
            <Heading
              fontSize="1.5rem"
              fontWeight="semibold"
              color="var(--chakra-colors-dark-text)"
            >
              línguas
            </Heading>
          </Flex>
          <Flex direction="column" align="center" justify="center">
            <Text
              color="var(--chakra-colors-highlight-100)"
              fontSize="3rem"
              fontWeight="semibold"
            >
              {continent.citiesQTD}
            </Text>
            <Heading
              fontSize="1.5rem"
              fontWeight="semibold"
              color="var(--chakra-colors-dark-text)"
            >
              cidades +100{" "}
              <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
                <InfoOutlineIcon
                  h="16px"
                  w="16px"
                  color="var(--chakra-colors-dark-info50)"
                />
              </Tooltip>
            </Heading>
          </Flex>
        </HStack>
      </Flex>

      {/* City +100 */}

      <Flex
        maxWidth="1160"
        mx="auto"
        mt="80px"
        align="center"
        justify="space-between"
      >
        <CardCitys />
      </Flex>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = await continents.map((item) => `/continents/${item.continent}`);

  return {
    paths: slugs,
    fallback: false, // false or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = String(params?.slug);

  const continent = await continents.filter((item) => item.continent === slug);

  return {
    props: {
      continent: continent[0],
    },
  };
};
