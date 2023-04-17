"use client";
import "swiper/css";
import "./styles.css";
import "swiper/css/pagination";

import Image from "next/image";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Team from "../../../../public/bg-team.png";

export function TeamCarrousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={Team} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Team} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Team} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Team} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Team} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
