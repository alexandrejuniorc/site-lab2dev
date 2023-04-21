import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

import TrophieHackaton2 from "../../../public/bg-trophies-2.png";
import TrophieHackaton from "../../../public/bg-trophies.png";
import { CardTrophie } from "../CardTrophie";

export default function CardTrophieMobile() {
  return (
    <>
      <div className="lg:hidden max-md:block">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="flex justify-center pb-6">
            <div className="flex justify-center pb-5">
              <CardTrophie
                image={TrophieHackaton}
                content="Hackaton Odebrecht 2019"
                title={"1° Lugar"}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center pb-6">
              <CardTrophie
                image={TrophieHackaton2}
                content="Innovation Hackaton 2019"
                title={"2° Lugar"}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
