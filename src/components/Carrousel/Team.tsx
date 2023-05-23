/* eslint-disable @typescript-eslint/no-explicit-any */
import "swiper/css";
// import "./styles.css";
import "swiper/css/pagination";

import Image from "next/image";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface TeamCarrouselProps {
  dataImages: any[];
  width?: number | string;
  height?: number | string;
  object?: string;
  classSwiperSlide: string;
}

export function TeamCarrousel({
  dataImages,
  height,
  width,
  object,
  classSwiperSlide,
}: TeamCarrouselProps) {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {dataImages &&
        dataImages.map((image: any) => {
          return (
            <SwiperSlide
              style={{ height: "initial", display: "flex" }}
              className={`${classSwiperSlide} w-[${width}]`}
              key={image.id}
            >
              <Image
                className={`h-[${height}] object-${object}`}
                src={image.src}
                alt={image.alt}
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
