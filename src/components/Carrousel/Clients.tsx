import Image from "next/image";
import React from "react";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import AtvosImage from "../../../public/clients/atvos.png";
import DexcoImage from "../../../public/clients/dexco.png";
import EuroFarmaImage from "../../../public/clients/eurofarma.png";
import GerdauImage from "../../../public/clients/gerdau.png";
import HidroviasImage from "../../../public/clients/hidrovias.png";
import PiracanjubaImage from "../../../public/clients/piracanjuba.png";
import SwiftImage from "../../../public/clients/swift.png";
import TranspetroImage from "../../../public/clients/transpetro.png";
import UolImage from "../../../public/clients/uol.png";
import VotorantimImage from "../../../public/clients/votorantim.png";

import "swiper/css";
import "swiper/css/pagination";

export function Clients() {
  return (
    <>
      {/* desktop */}
      <div className="lg:block max-lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
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
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="">
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={TranspetroImage} alt="Transpetro" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={GerdauImage} alt="Gerdau" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={UolImage} alt="Uol" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={SwiftImage} alt="Uol" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={AtvosImage} alt="Uol" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={DexcoImage} alt="Uol" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={EuroFarmaImage} alt="Uol" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={HidroviasImage} alt="Uol" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={PiracanjubaImage} alt="Uol" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={VotorantimImage} alt="Uol" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* responsive */}
      <div className="lg:hidden max-md:block">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
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
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
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

          <SwiperSlide>
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={SwiftImage} alt="Uol" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={AtvosImage} alt="Uol" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={DexcoImage} alt="Uol" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={EuroFarmaImage} alt="Uol" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={HidroviasImage} alt="Uol" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={PiracanjubaImage} alt="Uol" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="m-auto p-6 mt-5 mb-5 flex justify-center">
              <Image src={VotorantimImage} alt="Uol" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
