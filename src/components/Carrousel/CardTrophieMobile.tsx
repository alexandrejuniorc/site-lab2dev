import Image from "next/image";
import React from "react";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CardTrophieMobile() {
  return (
    <>
      <div className="max-lg:block">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <p className="bg-gray-800">teste</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="bg-gray-800">teste</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="bg-gray-800">teste</p>
          </SwiperSlide>

          {/* <SwiperSlide>
            <div className="bg-blue-200 w-60 rounded py-6 px-11 flex flex-col justify-center items-center">
              <div className="rounded-full w-36 h-36 border-8 border-gray-400">
                <div className="bg-white h-full flex items-center justify-center rounded-full">
                  <Image src={image} alt="" />
                </div>
              </div>

              <div className="mt-7">
                <strong className="not-italic font-normal text-16 leading-7 text-center text-white flex justify-center items-center">
                  1° Lugar
                </strong>
                <p className="not-italic font-normal text-10 leading-3 text-center text-gray-100 flex justify-center w-[9.3125rem] items-center">
                  teste
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-blue-200 w-60 rounded py-6 px-11 flex flex-col justify-center items-center">
              <div className="rounded-full w-36 h-36 border-8 border-gray-400">
                <div className="bg-white h-full flex items-center justify-center rounded-full">
                  <Image src={image} alt="" />
                </div>
              </div>

              <div className="mt-7">
                <strong className="not-italic font-normal text-16 leading-7 text-center text-white flex justify-center items-center">
                  1° Lugar
                </strong>
                <p className="not-italic font-normal text-10 leading-3 text-center text-gray-100 flex justify-center w-[9.3125rem] items-center">
                  teste
                </p>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
}
