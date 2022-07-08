import { Box } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper";

export function ContinentsSlides() {
  return (
    <Box
      maxWidth="1240px"
      height="450px"
      mx="auto"
      position="relative"
      py="20px"
    >
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        style={{
          width: "100%",
          height: "100%",
          "--swiper-navigation-color": "#FFBA08",
          "--swiper-pagination-color": "#FFBA08",
        }}
      >
        <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            style={{
              display: "block",
              width: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            style={{
              display: "block",
              width: "100%",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
