import {
  Avatar,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  WrapItem,
} from "@chakra-ui/react";

interface ICardCitiesProps {
  title: string;
  country: string;
  img: string;
  icon: string;
}

export function CardCities({ title, country, img, icon }: ICardCitiesProps) {
  return (
    <WrapItem>
      <Box width="256px" minHeight="279px" borderRadius="4px">
        <Image
          src={img}
          width="100%"
          height="173px"
          borderTopRadius="4px"
          objectFit="cover"
        />
        <Flex
          borderColor="var(--chakra-colors-highlight-50)"
          borderBottom="1px solid var(--chakra-colors-highlight-50)"
          borderX="1px solid var(--chakra-colors-highlight-50)"
          justify="space-between"
          align="center"
          px="24px"
        >
          <Stack
            direction="column"
            align="center"
            justify="center"
            py="25px"
            spacing="12px"
          >
            <Heading
              fontSize="1.25rem"
              fontWeight="semibold"
              width="100%"
              textAlign="left"
              lineHeight="25px"
              color="var(--chakra-colors-dark-text)"
            >
              {title}
            </Heading>
            <Heading
              fontSize="1rem"
              fontWeight="medium"
              lineHeight="26px"
              textAlign="left"
              width="100%"
              color="var(--chakra-colors-dark-info)"
            >
              {country}
            </Heading>
          </Stack>
          <Box>
            <Avatar src={icon} w="30px" h="30px" />
          </Box>
        </Flex>
      </Box>
    </WrapItem>
  );
}
