import Image from "next/image";
import React from "react";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import GerdauImage from "../../../public/client-gerdau.png";
import MercedesImage from "../../../public/client-mercedes.png";
import TranspetroImage from "../../../public/client-transpetro.png";
import UolImage from "../../../public/client-uol.png";
import WhirlpoolImage from "../../../public/client-whirlpool.png";

export default function ClientsMobile() {
  return (
    <>
      <div className="lg:hidden max-md:block">
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
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={WhirlpoolImage} alt="Whirlpool" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={MercedesImage} alt="Mercedes" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={TranspetroImage} alt="Transpetro" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={GerdauImage} alt="Gerdau" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={UolImage} alt="Uol" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
