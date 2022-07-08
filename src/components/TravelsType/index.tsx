import { Box, Flex, HStack, UnorderedList } from "@chakra-ui/react";
import { TravelsItens } from "./TravelsItens";

const travelsTypeData = [
  {
    title: "vida noturna",
    image: {
      src: "/images/travelsType/cocktail.svg",
      alt: "Imagem de um Drink",
    },
  },
  {
    title: "praia",
    image: {
      src: "/images/travelsType/surf.svg",
      alt: "Imagem de um Drink",
    },
  },
  {
    title: "moderno",
    image: {
      src: "/images/travelsType/building.svg",
      alt: "Imagem de um Drink",
    },
  },
  {
    title: "clássico",
    image: {
      src: "/images/travelsType/museum.svg",
      alt: "Imagem de um Drink",
    },
  },
  {
    title: "e mais...",
    image: {
      src: "/images/travelsType/earth.svg",
      alt: "Imagem de um Drink",
    },
  },
];

export function TravelsType() {
  return (
    <UnorderedList maxW="1160px" mx="auto" mt="85px" px="20px">
      <Flex
        direction="row"
        flexWrap="wrap"
        justify="space-around"
        align="center"
      >
        {travelsTypeData.map((item, index) => (
          <TravelsItens
            key={item.title + index}
            image={{
              src: item.image.src,
              alt: item.image.alt,
            }}
            title={item.title}
          />
        ))}
      </Flex>
    </UnorderedList>
  );
}
