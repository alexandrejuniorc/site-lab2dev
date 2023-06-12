/* eslint-disable @typescript-eslint/no-explicit-any */
import "swiper/css";
// import "./styles.css";
import "swiper/css/pagination";

import Image from "next/image";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface TeamCarrouselProps {
  dataImages: any[];
  width: number;
  height: number;
}

export function TeamCarrousel({
  dataImages,
  height,
  width,
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
              style={{
                display: "flex",
                position: "relative",
                width: `${width}rem`,
                height: `${height}rem`,
              }}
              key={image.id}
            >
              <Image
                fill={true}
                src={image.src}
                alt={image.alt}
                style={{ objectFit: "cover", paddingBottom: "24px" }}
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
