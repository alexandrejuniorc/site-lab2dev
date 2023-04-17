"use client";

import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import GerdauImage from "../../../../public/clients/gerdau.png";
import MercedesImage from "../../../../public/clients/mercedes.png";
import TranspetroImage from "../../../../public/clients/transpetro.png";
import UolImage from "../../../../public/clients/uol.png";
import WhirlpoolImage from "../../../../public/clients/whirlpool.png";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export function ClientsCarrousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          "@2.00": {
            slidesPerView: 5,
            spaceBetween: 60,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={WhirlpoolImage} alt="Whirlpool" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={MercedesImage} alt="Mercedes" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={TranspetroImage} alt="Transpetro" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={GerdauImage} alt="Gerdau" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={UolImage} alt="Uol" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
