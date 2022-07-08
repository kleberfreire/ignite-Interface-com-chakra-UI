import {
  Flex,
  Image,
  Text,
  ListItem,
  Box,
  useBreakpointValue,
  ListIcon,
} from "@chakra-ui/react";

interface ITravelsItensProps {
  title: string;
  image: {
    src: string;
    alt: string;
  };
}

export const ListIconRoundedFull = () => {
  return (
    <Box
      borderRadius="10px"
      width="10px"
      height="10px"
      bg="var(--chakra-colors-highlight-100)"
      mr="8px"
    ></Box>
  );
};

export function TravelsItens({ title, image }: ITravelsItensProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
    md: true,
  });

  return (
    <ListItem color="var(--chakra-colors-highlight-100)" listStyleType="none">
      <Flex
        direction={isWideVersion ? "column" : "row"}
        align="center"
        justify="center"
        width={isWideVersion ? "120px" : "150px"}
        height={isWideVersion ? "120px" : "47px"}
      >
        {isWideVersion ? (
          <Image
            src={image.src}
            alt={image.alt}
            width="85px"
            height="85px"
            mb="24px"
          />
        ) : (
          <ListIcon
            as={ListIconRoundedFull}
            color="var(--chakra-colors-highlight-100)"
          />
        )}
        <Text
          fontSize="lg"
          fontWeight="semibold"
          color="var(--chakra-colors-dark-text)"
        >
          {title}
        </Text>
      </Flex>
    </ListItem>
  );
}
