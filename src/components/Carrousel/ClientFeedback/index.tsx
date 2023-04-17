"use client";
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export function ClientFeedback() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper pt-7 pb-20"
      >
        <SwiperSlide>
          <div className="rounded-md shadow-md w-80 h-72 flex justify-around items-center flex-col p-6">
            <div className="rounded-[50%] w-20 h-20 border-8 border-purple-200">
              <div className="bg-purple-100 h-full flex items-center justify-center rounded-[50%]">
                {/* <Image src={TrophieHackaton} alt="" /> */}
              </div>
            </div>

            <div>
              <h1 className="font-normal text-20 leading-7 text-purple-300 not-italic">
                NOME
              </h1>
              <p className="font-normal text-14 leading-7 text-purple-300 not-italic">
                Cargo - Empresa
              </p>

              <p className="font-normal text-12 leading-4 text-gray-800 not-italic">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                neque tincidunt, finibus purus vel, vehicula risus. Aliquam
                faucibus velit ac sollicitudin ultricies.”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-md shadow-md w-80 h-72 flex justify-around items-center flex-col p-6">
            <div className="rounded-[50%] w-20 h-20 border-8 border-purple-200">
              <div className="bg-purple-100 h-full flex items-center justify-center rounded-[50%]">
                {/* <Image src={TrophieHackaton} alt="" /> */}
              </div>
            </div>

            <div>
              <h1 className="font-normal text-20 leading-7 text-purple-300 not-italic">
                NOME
              </h1>
              <p className="font-normal text-14 leading-7 text-purple-300 not-italic">
                Cargo - Empresa
              </p>

              <p className="font-normal text-12 leading-4 text-gray-800 not-italic">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                neque tincidunt, finibus purus vel, vehicula risus. Aliquam
                faucibus velit ac sollicitudin ultricies.”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-md shadow-md w-80 h-72 flex justify-around items-center flex-col p-6">
            <div className="rounded-[50%] w-20 h-20 border-8 border-purple-200">
              <div className="bg-purple-100 h-full flex items-center justify-center rounded-[50%]">
                {/* <Image src={TrophieHackaton} alt="" /> */}
              </div>
            </div>

            <div>
              <h1 className="font-normal text-20 leading-7 text-purple-300 not-italic">
                NOME
              </h1>
              <p className="font-normal text-14 leading-7 text-purple-300 not-italic">
                Cargo - Empresa
              </p>

              <p className="font-normal text-12 leading-4 text-gray-800 not-italic">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                neque tincidunt, finibus purus vel, vehicula risus. Aliquam
                faucibus velit ac sollicitudin ultricies.”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-md shadow-md w-80 h-72 flex justify-around items-center flex-col p-6">
            <div className="rounded-[50%] w-20 h-20 border-8 border-purple-200">
              <div className="bg-purple-100 h-full flex items-center justify-center rounded-[50%]">
                {/* <Image src={TrophieHackaton} alt="" /> */}
              </div>
            </div>

            <div>
              <h1 className="font-normal text-20 leading-7 text-purple-300 not-italic">
                NOME
              </h1>
              <p className="font-normal text-14 leading-7 text-purple-300 not-italic">
                Cargo - Empresa
              </p>

              <p className="font-normal text-12 leading-4 text-gray-800 not-italic">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                neque tincidunt, finibus purus vel, vehicula risus. Aliquam
                faucibus velit ac sollicitudin ultricies.”
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
