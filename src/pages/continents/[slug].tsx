import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  Tooltip,
  Wrap,
  useBreakpointValue,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { GetStaticProps } from "next/types";
import Header from "../../components/Header";
import { continents } from "../../mock/continents";
import { CardCities } from "../../components/CardCities";

interface IContinent {
  title: string;
  details: string;
  countriesQTD: number;
  languagesQTD: number;
  citiesQTD: number;
  cities: {
    title: string;
    country: string;
    img: string;
    icon: string;
  }[];
}

interface IContinentsProps {
  continent: IContinent;
}

export default function Continents({ continent }: IContinentsProps) {
  const { title, details, countriesQTD, languagesQTD, citiesQTD, cities } =
    continent;

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box>
      <Header />
      <Box maxWidth="1440px" maxHeight="500px" mx="auto" position="relative">
        {/* <Image src="https://images.unsplash.com/photo-1556150045-9665e721a108?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzU2MjAwNQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1440" /> */}
        <Image
          src="https://images.unsplash.com/photo-1608383276937-7b4a72f0194b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=70"
          maxHeight="500px"
          width="100%"
          objectFit="cover"
        />
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
            top={["50%", "50%", "80%"]}
            left={["50%", "50%", "140px"]}
            fontSize={["1.75rem", "2.25rem", "3rem"]}
            transform="translate(-50%,-50%)"
            color="var(--chakra-colors-light-text)"
            textTransform="capitalize"
          >
            {title}
          </Heading>
        </Box>
      </Box>
      <Flex
        maxWidth="1160"
        mx="auto"
        mt={["24px", "24px", "80px"]}
        align="center"
        justify={["center", "center", "space-between"]}
        flexWrap="wrap"
        px={["16px", "16px", "0"]}
      >
        <Text
          maxWidth="600px"
          maxHeight="211px"
          fontSize={["0.875rem", "1rem", "1.5rem"]}
          color="var(--chakra-colors-dark-text)"
          textAlign="justify"
        >
          {details}
        </Text>
        <HStack
          h="100%"
          spacing={["30px", "30px", "42px"]}
          mt={isWideVersion ? 0 : "16px"}
          // px={["16px", "16px", "0"]}
        >
          <Flex direction="column" align="center" justify="center">
            <Text
              color="var(--chakra-colors-highlight-100)"
              fontSize={["1.5rem", "1.5rem", "3rem"]}
              fontWeight="semibold"
            >
              {countriesQTD}
            </Text>
            <Heading
              fontSize={["1.125rem", "1.125rem", "1.5rem"]}
              fontWeight={["regular", "semibold", "semibold"]}
              color="var(--chakra-colors-dark-text)"
            >
              países
            </Heading>
          </Flex>
          <Flex direction="column" align="center" justify="center">
            <Text
              color="var(--chakra-colors-highlight-100)"
              fontSize={["1.5rem", "1.5rem", "3rem"]}
              fontWeight="semibold"
            >
              {languagesQTD}
            </Text>
            <Heading
              fontSize={["1.125rem", "1.125rem", "1.5rem"]}
              fontWeight={["regular", "semibold", "semibold"]}
              color="var(--chakra-colors-dark-text)"
            >
              línguas
            </Heading>
          </Flex>
          <Flex
            direction="column"
            align="center"
            justify="center"
            flexWrap="nowrap"
          >
            <Text
              color="var(--chakra-colors-highlight-100)"
              fontSize={["1.5rem", "1.5rem", "3rem"]}
              fontWeight="semibold"
            >
              {citiesQTD}
            </Text>
            <Heading
              fontSize={["1.125rem", "1.125rem", "1.5rem"]}
              fontWeight={["regular", "semibold", "semibold"]}
              color="var(--chakra-colors-dark-text)"
            >
              cidades +100
              <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
                <Flex display="inline-block" align="center" justify="center">
                  <InfoOutlineIcon
                    h={["10px", "10px", "16px"]}
                    w="16px"
                    color="var(--chakra-colors-dark-info50)"
                    ml={["5px", "5px", "16px"]}
                  />
                </Flex>
              </Tooltip>
            </Heading>
          </Flex>
        </HStack>
      </Flex>

      <Box maxWidth="1160" mx="auto" mt="80px">
        <Heading
          fontSize="2.25rem"
          fontWeight="medium"
          color="var(--chakra-colors-dark-text)"
          ml={["16px"]}
        >
          Cidades +100
        </Heading>
        <Center>
          <Wrap
            maxWidth="1160"
            mx="auto"
            mt="40px"
            mb="20px"
            spacing={45}
            align="center"
            justify={isWideVersion ? "initial" : "center"}
          >
            {cities.map((item, index) => {
              return <CardCities {...item} key={item.title + index} />;
            })}
          </Wrap>
        </Center>
      </Box>

      {/* City +100 */}
    </Box>
  );
}

export async function getStaticPaths() {
  const slugs = await continents.map((item) => `/continents/${item.slug}`);

  return {
    paths: slugs,
    fallback: false, // false or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = String(params?.slug);

  const continent = await continents.filter((item) => item.slug === slug);

  return {
    props: {
      continent: continent[0],
    },
  };
};
