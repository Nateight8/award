"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

type Props = {};

function SwiperX({}: Props) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[70vh] w-full"
      >
        {[1, 2, 3, 4].map((item) => (
          <SwiperSlide
            key={item}
            className="h-full w-full bg-red-100"
          ></SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SwiperX;
