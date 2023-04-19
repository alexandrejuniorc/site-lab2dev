import "swiper/css";
// import "./styles.css";
import "swiper/css/pagination";

import Image from "next/image";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Team from "../../../public/bg-team.png";

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
        <SwiperSlide className="pb-6">
          <Image src={Team} alt="" />
        </SwiperSlide>
        <SwiperSlide className="pb-6">
          <Image src={Team} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
