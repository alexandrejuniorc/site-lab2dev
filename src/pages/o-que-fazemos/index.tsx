import Image from "next/image";
import React from "react";

import { CardSupport } from "@/components/CardSupport";
import { TeamCarrousel } from "@/components/Carrousel/Team";
import { InfosCard } from "@/components/InfosCard";
import { OtherSolutionsCard } from "@/components/OtherSolutionsCard";
import { SapSolutionsCard } from "@/components/SapSolutionsCard";
import { cardSupport } from "@/mocky/card-support";
import { infoCard } from "@/mocky/info-card";
import { sapSolutionsCard } from "@/mocky/sap-solutions-card";
import { stacks } from "@/mocky/stacks";

import JavascriptImage from "../../../public/bg-javascript.svg";
import SapPartnerImage from "../../../public/bg-partner-sap.png";
import PythonImage from "../../../public/bg-python.svg";
import SapLogoImage from "../../../public/bg-sap-logo.svg";
import { imagesCarrousel2Mocky } from "../../mocky/carrousel-2";

export default function WhatWeDo() {
  return (
    <>
      <Image
        className="absolute top-0 right-0 -z-10 max-md:h-[9rem] max-md:w-auto max-sm:h-[7rem]"
        src={SapLogoImage}
        alt=""
      />

      <section>
        <div className="flex  flex-col">
          <p className="not-italic font-normal text-14 leading-4 text-blue-200">
            SAP
          </p>
          <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase mt-9 max-md:text-center">
            Nossas soluções SAP
          </h1>
          <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-5 max-md:text-center">
            Nossa atuação é focada no mercado SAP. Trazemos inovação e
            tendências tecnológicas dentro do portfólio de produtos SAP e também
            trabalhamos na simplificação das integrações de outros sistemas
            (Cloud e On-premises) com soluções SAP.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5 mt-16 max-md:grid-cols-2">
          {sapSolutionsCard.map((card) => (
            <SapSolutionsCard
              key={card.title}
              image={card.img}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="grid grid-cols-2 text-left max-md:flex max-md:flex-col max-md:text-center">
          <div className="max-md:flex max-md:justify-center max-md:items-center">
            <Image src={SapPartnerImage} alt="" />
          </div>

          <div className="flex flex-col">
            <h1 className="font-normal not-italic text-30 leading-10 text-purple-300 mt-7 max-md:text-center">
              SOMOS PARCEIROS GOLD SAP
            </h1>
            <p className="font-normal not-italic text-16 leading-7 text-gray-800 mt-8 max-md:text-center">
              Para se tornar um parceiro Gold SAP, a empresa parceira precisa
              atender a certos requisitos estabelecidos pela SAP, como
              demonstrar um alto nível de competência técnica e de negócios, ter
              um bom histórico de satisfação do cliente, manter uma equipe
              qualificada e engajada em treinamentos e certificações da SAP,
              além de atingir metas de vendas e receita.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2 max-md:gap-2 max-sm:flex max-sm:flex-col max-sm:items-center">
          {cardSupport.map((card) => (
            <CardSupport
              key={card.title}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="grid grid-cols-2 max-md:flex max-md:flex-col">
          <div className="flex flex-col">
            <p className="not-italic font-normal text-14 leading-4 text-blue-200 uppercase">
              Expertise
            </p>
            <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase mt-9 max-md:text-center">
              Outras soluções
            </h1>
            <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-5 max-md:text-center">
              Nosso principal foco sempre foi SAP, somos líder e referências no
              mercado. Porém isso não significa que não somos os melhores nas
              outras tecnologias também.
            </p>
          </div>

          <Image
            className="absolute right-0 -z-10 max-md:hidden"
            src={PythonImage}
            alt=""
          />

          <div className="flex flex-col gap-8 items-end max-md:justify-center max-md:items-center max-md:mt-7">
            {stacks.map((stack) => (
              <OtherSolutionsCard
                key={stack.title}
                title={stack.title}
                image={stack.img}
                content={stack.content}
              />
            ))}

            <Image
              className="absolute left-0 -z-10 max-md:hidden max-lg:pt-[46%] lg:pt-[36%] xl:pt-[33%]"
              src={JavascriptImage}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="grid grid-cols-2 gap-[6.5625rem] items-center max-md:flex max-md:flex-col-reverse max-md:gap-0">
          <div>
            {/*  className="max-md:w-[20rem] max-md:mt-16" */}
            <TeamCarrousel
              dataImages={imagesCarrousel2Mocky}
              height={"228px"}
              width={"405px"}
              object="cover"
              classSwiperSlide={"pb-6"}
            />
          </div>
          <div>
            <h1 className="not-italic font-normal text-30 leading-10 uppercase text-purple-300 max-md:text-center">
              equipe lab2dev
            </h1>
            <p className="not-italic font-normal text-16 leading-7 text-gray-800 max-md:text-center">
              Nossa equipe, composta por consultores, arquitetos de solução,
              desenvolvedores, UX Designers e Integradores, é altamente
              qualificada e experiente em fornecer soluções personalizadas de
              software para empresas que buscam melhorar seus processos de
              negócios.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="grid grid-cols-3 gap-5 max-md:flex max-md:flex-col">
          {infoCard.map((card) => (
            <InfosCard
              key={card.title}
              title={card.title}
              info={card.info}
              content={card.content}
            />
          ))}
        </div>
      </section>
    </>
  );
}
