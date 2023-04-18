import Image from "next/image";
import React from "react";

import { TeamCarrousel } from "@/components/Carrousel/Team";
import { InfosCard } from "@/components/InfosCard";
import { OtherSolutionsCard } from "@/components/OtherSolutionsCard";
import { SapSolutionsCard } from "@/components/SapSolutionsCard";

import SapPartnerImage from "../../../public/bg-partner-sap.png";

export default function WhatWeDo() {
  return (
    <>
      <section>
        <div className="flex  flex-col">
          <p className="not-italic font-normal text-14 leading-4 text-blue-200">
            SAP
          </p>
          <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase mt-9">
            Nossas soluções SAP
          </h1>
          <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-5 w-[30rem]">
            Nossa atuação é focada no mercado SAP. Trazemos inovação e
            tendências tecnológicas dentro do portfólio de produtos SAP e também
            trabalhamos na simplificação das integrações de outros sistemas
            (Cloud e On-premises) com soluções SAP.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5 mt-16">
          <SapSolutionsCard />
          <SapSolutionsCard />
          <SapSolutionsCard />
          <SapSolutionsCard />
          <SapSolutionsCard />
          <SapSolutionsCard />
          <SapSolutionsCard />
          <SapSolutionsCard />
        </div>
      </section>

      <section className="mt-20">
        <div className="grid grid-cols-2 text-left">
          <Image src={SapPartnerImage} alt="" />

          <div className="flex flex-col">
            <h1 className="font-normal not-italic text-30 leading-10 text-purple-300">
              Somos PARCEIROS GOLD SAP
            </h1>
            <p className="font-normal not-italic text-16 leading-7 text-gray-800 mt-8">
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
        <div className="grid grid-cols-2">
          <div className="flex  flex-col">
            <p className="not-italic font-normal text-14 leading-4 text-blue-200 uppercase">
              Expertise
            </p>
            <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase mt-9">
              Outras soluções
            </h1>
            <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-5 w-[30rem]">
              Nosso principal foco sempre foi SAP, somos líder e referências no
              mercado. Porém isso não significa que não somos os melhores nas
              outras tecnologias também.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <OtherSolutionsCard />
            <OtherSolutionsCard />
            <OtherSolutionsCard />
            <OtherSolutionsCard />
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="grid grid-cols-2">
          <div className="w-[25.3125rem] h-[14.25rem]">
            <TeamCarrousel />
          </div>
          <div>
            <h1 className="not-italic font-normal text-30 leading-10 uppercase text-purple-300">
              equipe lab2dev
            </h1>
            <p className="not-italic font-normal text-16 leading-7 text-gray-800">
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
        <div className="grid grid-cols-3">
          <InfosCard />
          <InfosCard />
          <InfosCard />
        </div>
      </section>
    </>
  );
}
