import { Flex, Image, Text } from "@chakra-ui/react";

interface ITravelsItensProps {
  title: string;
  image: {
    src: string;
    alt: string;
  };
}

export function TravelsItens({ title, image }: ITravelsItensProps) {
  return (
    <Flex as="li" direction="column" align="center" justify="center">
      <Image src={image.src} alt={image.alt} width="85px" height="85px" />
      <Text>{title}</Text>
    </Flex>
  );
}
