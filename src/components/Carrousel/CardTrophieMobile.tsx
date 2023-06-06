import Image from "next/image";

import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CardTrophie1 from "../../../public/card-trophie-1.svg";
import CardTrophie2 from "../../../public/card-trophie-2.svg";

export default function CardTrophieMobile() {
  return (
    <>
      <div className="lg:hidden max-md:block">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="flex justify-center pb-6">
              <Image src={CardTrophie1} alt={""} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center">
              <Image src={CardTrophie2} alt={""} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
