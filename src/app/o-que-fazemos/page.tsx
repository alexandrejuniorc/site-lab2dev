"use client";
import Image from "next/image";
import React from "react";

import { CardSupport } from "@/components/CardSupport";
import { CardTrophie } from "@/components/CardTrophie";
import CardTrophieMobile from "@/components/Carrousel/CardTrophieMobile";
import { TeamCarrousel } from "@/components/Carrousel/Team";
import { OtherSolutionsCard } from "@/components/OtherSolutionsCard";
import { SapSolutionsCard } from "@/components/SapSolutionsCard";
import { cardSupport } from "@/mock/card-support";
import { sapSolutionsCard } from "@/mock/sap-solutions-card";
import { stacks } from "@/mock/stacks";

import JavascriptImage from "../../../public/bg-javascript.svg";
import SapPartnerImage from "../../../public/bg-partner-sap.png";
import PythonImage from "../../../public/bg-python.svg";
import SapLogoImage from "../../../public/bg-sap-logo.svg";
import { imagesCarrousel2Mocky } from "../../mock/carrousel-2";

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
          <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase max-md:text-center">
            Nossas soluções SAP
          </h1>
          <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-5 text-justify max-md:text-center">
            Nossa atuação é focada no mercado SAP. Trazemos inovação e
            tendências tecnológicas dentro do portfólio de produtos SAP e também
            trabalhamos na simplificação das integrações de outros sistemas
            (Cloud e On-premises) com soluções SAP.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-14">
          {sapSolutionsCard.map((card) => (
            <SapSolutionsCard
              key={card.title}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="grid grid-cols-[max-content_1fr] gap-[6.5625rem] text-left max-md:flex max-md:flex-col max-md:text-center">
          <div className="max-md:flex max-md:justify-center items-center">
            <Image
              className="w-[20rem] h-[15.5rem]"
              src={SapPartnerImage}
              alt=""
            />
          </div>

          <div className="flex flex-col">
            <h1 className="font-normal not-italic text-30 leading-10 text-purple-300 mt-7 max-md:text-center">
              SOMOS PARCEIROS GOLD SAP
            </h1>
            <p className="font-normal not-italic text-16 leading-7 text-justify text-gray-800 mt-8 max-md:text-center">
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
        <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-14">
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
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase mt-9 max-md:text-center">
              Outras soluções
            </h1>

            <p className="not-italic font-normal text-16 leading-7 text-justify text-gray-800 mt-5 max-md:text-center">
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

          {/* className="flex flex-col gap-8 items-end max-md:justify-center max-md:items-center max-md:mt-7" */}
          <div className="grid grid-cols-2 gap-5 mt-20">
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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h1 className="not-italic font-normal text-30 leading-10 uppercase text-purple-300 text-center lg:text-left">
              equipe lab2dev
            </h1>
            <p className="not-italic font-normal text-16 leading-7 text-gray-800 text-center lg:text-justify mt-7">
              Nossa equipe, composta por consultores, arquitetos de solução,
              desenvolvedores, UX Designers e Integradores, é altamente
              qualificada e experiente em fornecer soluções personalizadas de
              software para empresas que buscam melhorar seus processos de
              negócios.
            </p>
          </div>

          <div className="lg:order-first">
            <TeamCarrousel
              typeCard="quem-somos"
              dataImages={imagesCarrousel2Mocky}
            />
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="grid grid-cols-2">
          <div className="mr-28 lg:mr-0 max-lg:text-center max-lg:m-0">
            <h1 className="font-normal text-purple-300 leading-10 text-30 uppercase">
              Somos premiados
            </h1>
            <p className="font-normal text-16 leading-7 text-gray-800 pt-8 not-italic lg:text-justify max-md:text-center">
              Ao longo de nossa jornada, tivemos o privilégio de receber
              diversos prêmios que reconhecem a qualidade de nossos produtos e
              serviços. Essas conquistas nos motivam a continuar trabalhando com
              excelência e comprometimento, em busca da satisfação de nossos
              clientes.
            </p>
          </div>

          <div className="max-lg:mt-7">
            <div className="lg:flex lg:gap-5 max-lg:hidden">
              <CardTrophie />
            </div>

            <CardTrophieMobile />
          </div>
        </div>
      </section>
    </>
  );
}
