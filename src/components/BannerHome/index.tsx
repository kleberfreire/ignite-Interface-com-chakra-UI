import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function BannerHome() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      // bg="red"
      bgImage="url('/images/banner/Background.svg')"
      bgPosition="top"
      bgRepeat="no-repeat"
      maxW="1440px"
      height={335}
      justify={["center", "center", "space-between"]}
      px={["20px", "60px", "140px"]}
    >
      <Flex direction="column">
        <Heading
          size="xl"
          color="var(--chakra-colors-light-white)"
          mt="80px"
          fontWeight="medium"
          lineHeight="54px"
          maxW="426px"
          textAlign="left"
        >
          5 Continentes,
          <br /> infinitas possibilidades.
        </Heading>
        <Text
          color="var(--chakra-colors-light-info)"
          mt="20px"
          fontSize="xl"
          maxW="524px"
          height="57px"
          fontWeight="regular"
          lineHeight="30px"
          textAlign="left"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
        </Text>
      </Flex>
      <Flex align="end">
        {isWideVersion && (
          <Image
            src="images/banner/Airplane.svg"
            mb={-7}
            width="417px"
            height="270px"
            alt="Um avião voando com nuvens"
            flex={1}
          />
        )}
      </Flex>
    </Flex>
  );
}
