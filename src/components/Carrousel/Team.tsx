import "swiper/css";
// import "./styles.css";
import "swiper/css/pagination";

import Image from "next/image";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Team from "../../../public/bg-team.png";

interface TeamCarrouselProps {
  imageUrl: {
    img1?: string | any;
    img2?: string | any;
    img3?: string | any;
    img4?: string | any;
  };

  imageContent: {
    imgContent1?: boolean;
    imgContent2?: boolean;
    imgContent3?: boolean;
    imgContent4?: boolean;
  };
}

export function TeamCarrousel({ imageContent, imageUrl }: TeamCarrouselProps) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {imageContent.imgContent1 && (
          <SwiperSlide
            style={{ height: "initial", display: "flex" }}
            className="pb-6"
          >
            <Image
              priority
              width={660}
              className="object-cover"
              src={imageUrl.img1}
              alt=""
            />
          </SwiperSlide>
        )}

        {imageContent.imgContent2 && (
          <SwiperSlide
            style={{ height: "initial", display: "flex" }}
            className="pb-6"
          >
            <Image
              priority
              width={660}
              className="object-cover"
              src={imageUrl.img2}
              alt=""
            />
          </SwiperSlide>
        )}
        {imageContent.imgContent3 && (
          <SwiperSlide
            style={{ height: "initial", display: "flex" }}
            className="pb-6"
          >
            <Image
              priority
              width={660}
              className="object-cover"
              src={imageUrl.img3}
              alt=""
            />
          </SwiperSlide>
        )}

        {imageContent.imgContent4 && (
          <SwiperSlide
            style={{ height: "initial", display: "flex" }}
            className="pb-6"
          >
            <Image
              priority
              width={660}
              className="object-cover"
              src={imageUrl.img4}
              alt=""
            />
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}
