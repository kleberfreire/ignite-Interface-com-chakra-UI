import { Flex, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex align="center" justify="center" height="100px">
      <Image src="/images/Logo.svg" alt="logo" />
    </Flex>
  );
}
