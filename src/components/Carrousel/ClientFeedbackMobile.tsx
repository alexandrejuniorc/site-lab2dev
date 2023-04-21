import React from "react";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ClientFeedbackMobile() {
  return (
    <>
      <div className="lg:hidden max-md:block">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide className="pb-7">
            <div className="rounded-md shadow-md w-80 h-72 flex justify-around items-center flex-col p-6 m-auto mt-5 mb-5">
              {/* <div className="rounded-[50%] w-20 h-20 border-8 border-purple-200 m-auto">
                <div className="bg-purple-100 h-full flex items-center justify-center rounded-[50%]">
                  <Image src={TrophieHackaton} alt="" />
                </div>
              </div> */}

              <div>
                <h1 className="font-normal text-20 leading-7 text-purple-300 not-italic">
                  Anderson Carrio
                </h1>
                <p className="font-normal text-14 leading-7 text-purple-300 not-italic">
                  Gerente Executivo de Tecnologia - Dexco
                </p>

                <p className="font-normal text-12 leading-4 text-gray-800 not-italic">
                  {`"`}Trabalhar com a equipe da Lab2Dev tem sido uma
                  experiência muito positiva. Eles demonstraram um profundo
                  conhecimento e experiência no SAP BTP e CPI, e foram capazes
                  de nos orientar de forma clara e precisa durante todo o nosso
                  processo. Além disso, a equipe é extremamente prestativa, ágil
                  e comprometida em entregar resultados de alta qualidade. Estou
                  muito satisfeito com o trabalho realizado pela Lab2Dev e
                  recomendo seus serviços aos que procuram soluções confiáveis e
                  eficientes em tecnologia.{`"`}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pb-7">
            <div className="rounded-md shadow-md w-80 h-72 flex justify-around items-center flex-col p-6 m-auto mt-5 mb-5">
              {/* <div className="rounded-[50%] w-20 h-20 border-8 border-purple-200 m-auto">
                <div className="bg-purple-100 h-full flex items-center justify-center rounded-[50%]">
                  <Image src={TrophieHackaton} alt="" />
                </div>
              </div> */}

              <div>
                <h1 className="font-normal text-20 leading-7 text-purple-300 not-italic">
                  Anderson Carrio
                </h1>
                <p className="font-normal text-14 leading-7 text-purple-300 not-italic">
                  Gerente Executivo de Tecnologia - Dexco
                </p>

                <p className="font-normal text-12 leading-4 text-gray-800 not-italic">
                  {`"`}Trabalhar com a equipe da Lab2Dev tem sido uma
                  experiência muito positiva. Eles demonstraram um profundo
                  conhecimento e experiência no SAP BTP e CPI, e foram capazes
                  de nos orientar de forma clara e precisa durante todo o nosso
                  processo. Além disso, a equipe é extremamente prestativa, ágil
                  e comprometida em entregar resultados de alta qualidade. Estou
                  muito satisfeito com o trabalho realizado pela Lab2Dev e
                  recomendo seus serviços aos que procuram soluções confiáveis e
                  eficientes em tecnologia.{`"`}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pb-7">
            <div className="rounded-md shadow-md w-80 h-72 flex justify-around items-center flex-col p-6 m-auto mt-5 mb-5">
              {/* <div className="rounded-[50%] w-20 h-20 border-8 border-purple-200 m-auto">
                <div className="bg-purple-100 h-full flex items-center justify-center rounded-[50%]">
                  <Image src={TrophieHackaton} alt="" />
                </div>
              </div> */}

              <div>
                <h1 className="font-normal text-20 leading-7 text-purple-300 not-italic">
                  Anderson Carrio
                </h1>
                <p className="font-normal text-14 leading-7 text-purple-300 not-italic">
                  Gerente Executivo de Tecnologia - Dexco
                </p>

                <p className="font-normal text-12 leading-4 text-gray-800 not-italic">
                  {`"`}Trabalhar com a equipe da Lab2Dev tem sido uma
                  experiência muito positiva. Eles demonstraram um profundo
                  conhecimento e experiência no SAP BTP e CPI, e foram capazes
                  de nos orientar de forma clara e precisa durante todo o nosso
                  processo. Além disso, a equipe é extremamente prestativa, ágil
                  e comprometida em entregar resultados de alta qualidade. Estou
                  muito satisfeito com o trabalho realizado pela Lab2Dev e
                  recomendo seus serviços aos que procuram soluções confiáveis e
                  eficientes em tecnologia.{`"`}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
