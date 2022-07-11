import { Box, Heading, Text } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Link from "next/link";

interface IContinentsData {
  title: string;
  subtitle: string;
  img: string;
  link: string;
}

const continentsData: IContinentsData[] = [
  {
    title: "Europa",
    subtitle: "O continente mais antigo.",
    img: "https://images.unsplash.com/photo-1599171571332-b31a23c3fd33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzU0NTg5OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    link: "/continents/europe",
  },
  {
    title: "Itália",
    subtitle: "Deixou uma marca poderosa na culinária e na cultura ocidentais.",
    img: "https://images.unsplash.com/photo-1571729391507-07fe2ff051dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzU0NDQzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    link: "/europa",
  },
  {
    title: "Canadá",
    subtitle:
      "As vastas regiões de natureza selvagem do Canadá compreendem o Parque Nacional de Banff.",
    img: "https://images.unsplash.com/photo-1544161497-6095fb868d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzU0Mzg3Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    link: "/",
  },
];

export function ContinentsSlides() {
  return (
    <Box
      maxWidth="1240px"
      height={["320px", "320px", "450px"]}
      mx="auto"
      position="relative"
      my="54px"
    >
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        style={{
          width: "100%",
          height: "100%",
          //@ts-ignore
          "--swiper-navigation-color": "#FFBA08",
          "--swiper-pagination-color": "#FFBA08",
        }}
      >
        {continentsData.map((item) => {
          return (
            <SwiperSlide
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              key={item.title}
            >
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                width="100%"
                height="100%"
                bg="rgba(0,0,0, 0.5)"
              >
                <Link href={item.link}>
                  <a>
                    <Heading
                      as="h2"
                      fontSize={["1.5rem", "1.5rem", "3rem"]}
                      color="var(--chakra-colors-light-text)"
                      fontWeight="bold"
                      textAlign="center"
                      maxWidth={["200px", "300px", "700px"]}
                    >
                      {item.title}
                    </Heading>

                    <Text
                      fontSize={["0.875rem", "0.875rem", "1.5rem"]}
                      color="#DADADA"
                      fontWeight="bold"
                      maxWidth={["200px", "300px", "700px"]}
                      textAlign="center"
                    >
                      {item.subtitle}
                    </Text>
                  </a>
                </Link>
              </Box>
              <img
                src={item.img}
                style={{
                  display: "block",
                  width: "100%",
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
