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
    title: "China",
    subtitle: "O continente mais antigo.",
    img: "https://images.unsplash.com/photo-1595445428220-95c9429c6005?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzMwMzQ4NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1240",
    link: "/",
  },
  {
    title: "Itália",
    subtitle: "Deixou uma marca poderosa na culinária e na cultura ocidentais.",
    img: "https://images.unsplash.com/photo-1645211710746-9629755e6814?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzMwMzMzNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1240",
    link: "/",
  },
  {
    title: "Canadá",
    subtitle:
      "As vastas regiões de natureza selvagem do Canadá compreendem o Parque Nacional de Banff.",
    img: "https://images.unsplash.com/photo-1544161519-0690a8886606?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzMwMzY0Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1240",
    link: "/",
  },
];

export function ContinentsSlides() {
  return (
    <Box
      maxWidth="1240px"
      height="450px"
      mx="auto"
      position="relative"
      pt="54px"
      pb="40px"
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
              >
                <Link href={item.link}>
                  <a>
                    <Heading
                      as="h2"
                      fontSize="3rem"
                      color="var(--chakra-colors-light-text)"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      {item.title}
                    </Heading>

                    <Text fontSize="1.5rem" color="#DADADA" fontWeight="bold">
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

        {/* <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1645211710746-9629755e6814?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzMwMzMzNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1240"
            style={{
              display: "block",
              width: "100%",
            }}
          />
        </SwiperSlide> */}
        {/* <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1544161519-0690a8886606?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzMwMzY0Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1240"
            style={{
              display: "block",
              width: "100%",
            }}
          />
        </SwiperSlide> */}
      </Swiper>
    </Box>
  );
}
