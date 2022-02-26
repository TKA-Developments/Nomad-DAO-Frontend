import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

export const ImageCarousel = () => {
  return (
    <Swiper
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      modules={[Autoplay, Pagination]}
      loop={true}
      freeMode={true}
      autoplay={{
        delay: 2000,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
    >
      <SwiperSlide>
        <img src="/img/meka/meka_01.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/meka/meka_02.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/meka/meka_03.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/meka/meka_05.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/meka/meka_06.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/meka/meka_07.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/meka/meka_08.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/meka/meka_09.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};
