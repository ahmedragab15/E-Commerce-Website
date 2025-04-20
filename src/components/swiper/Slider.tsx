import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper } from "swiper/react";

// @ts-expect-error Cannot find module 'swiper/css' or its corresponding type declarations
import "swiper/css";
// @ts-expect-error Cannot find module 'swiper/css' or its corresponding type declarations
import "swiper/css/navigation";
// @ts-expect-error Cannot find module 'swiper/css' or its corresponding type declarations
import "swiper/css/pagination";
// @ts-expect-error Cannot find module 'swiper/css' or its corresponding type declarations
import "swiper/css/scrollbar";

import "./styles.css";

export const SliderRight = ({ children }: { children: React.ReactNode }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      spaceBetween={10}
      navigation
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1550: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export const SliderLeft = ({ children }: { children: React.ReactNode }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      spaceBetween={10}
      navigation
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1550: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export const HeroSlider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        dynamicBullets: true,
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        reverseDirection: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 2,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 2,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 2,
        },
        1550: {
          slidesPerView: 1,
          spaceBetween: 2,
        },
      }}
    >
      {children}
    </Swiper>
  );
};
