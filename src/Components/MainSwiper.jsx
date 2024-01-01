import React from "react";
import MainCard from "./MainCard";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/autoplay";
const MainSwiper = () => {
  return (
    <div style={{ height: "auto", width: "100%" }}>
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        direction={"horizontal"}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <MainCard />
        </SwiperSlide>
        <SwiperSlide>
          <MainCard />
        </SwiperSlide>
        <SwiperSlide>
          <MainCard />
        </SwiperSlide>
        <SwiperSlide>
          <MainCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSwiper;
