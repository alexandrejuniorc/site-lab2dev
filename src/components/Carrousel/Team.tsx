/* eslint-disable @typescript-eslint/no-explicit-any */
import "swiper/css";
// import "./styles.css";
import "swiper/css/pagination";

import Image from "next/image";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface TeamCarrouselProps {
  dataImages: any[];
  typeCard?: "quem-somos" | "o-que-fazemos";
  object?: string;
}

export function TeamCarrousel({
  dataImages,
  typeCard,
  object,
}: TeamCarrouselProps) {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      /*  autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }} */
      modules={[Pagination /* , Autoplay */]}
      className="mySwiper"
    >
      {dataImages &&
        dataImages.map((image: any) => {
          return (
            <SwiperSlide
              style={{ height: "initial", display: "flex" }}
              className={"pb-6"}
              key={image.id}
            >
              <Image
                className={`${
                  typeCard === "o-que-fazemos"
                    ? "w-[25.3125rem] h-[14.25rem] object-cover"
                    : "w-[41.25rem] h-[23.1875rem] object-cover"
                }`}
                src={image.src}
                alt={image.alt}
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
