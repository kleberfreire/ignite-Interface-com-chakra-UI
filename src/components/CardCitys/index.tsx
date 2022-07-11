import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export function CardCitys() {
  return (
    <Box width="256px" height="279px">
      <Image maxWidth="100%" height="173px" />
      <Flex
        borderColor="var(--chakra-colors-highlight-50)"
        borderBottom="1px solid var(--chakra-colors-highlight-50)"
        borderX="1px solid var(--chakra-colors-highlight-50)"
        justify="space-between"
        align="center"
      >
        <Flex direction="column" align="center" justify="center">
          <Heading fontSize="1.25rem" fontWeight="semibold">
            Londres
          </Heading>
          <Heading fontSize="1rem">Reino Unido</Heading>
        </Flex>
        <Box></Box>
      </Flex>
    </Box>
  );
}
