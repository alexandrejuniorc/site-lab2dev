import Image from "next/image";
import React from "react";

import { CardTeam } from "@/components/CardTeam";
import { sapBTPBenefits } from "@/mock/sap-btp-benefits";
import { teamAreas } from "@/mock/team-areas";

import SapPoweringSapBtp from "../../../public/bg-powering-sap-btp.svg";
import SapBuildImage from "../../../public/bg-sap-build.svg";
import { AccordionSap } from "../../components/Accordion";

export default function SapBTP() {
  return (
    <>
      <section>
        <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase max-md:text-center">
          sap btp - Business Technology Platform
        </h1>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-8 text-justify max-md:text-center">
          SAP BTP (SAP Business Technology Platform) é uma plataforma de
          negócios baseada em nuvem da SAP, que oferece serviços de
          desenvolvimento, integração e análise de dados para ajudar as empresas
          a construir aplicativos e soluções personalizadas.
        </p>

        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-8 text-justify max-md:text-center">
          A plataforma é projetada para ajudar as empresas a criar experiências
          de usuário personalizadas, conectar-se a várias fontes de dados e
          integrar processos de negócios existentes em uma plataforma
          centralizada. Ela inclui uma variedade de ferramentas, tecnologias e
          serviços, como banco de dados em memória, machine learning, internet
          das coisas (IoT), analytics, segurança e muito mais.
        </p>

        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-8 text-justify max-md:text-center">
          A SAP BTP permite que os usuários desenvolvam e implementem
          aplicativos em várias linguagens de programação, como Java, Node.js e
          Python, e também fornece uma ampla gama de recursos de plataforma,
          incluindo a API Management, Integration Suite, Mobile Services,
          Workflow, entre outros. A plataforma é escalável e pode ser
          personalizada para atender às necessidades exclusivas de cada empresa.
        </p>

        <div className="flex justify-center mt-20">
          <Image src={SapBuildImage} alt="" />
        </div>
      </section>

      <section className="mt-20 grid grid-cols-1 gap-[3.25rem] md:grid-cols-2 md:gap-[6.5625rem]">
        <div>
          <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase max-md:text-center">
            benefícios sap btp
          </h1>
          <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-5 text-justify max-md:text-center">
            Existem vários benefícios que as empresas podem obter ao usar o SAP
            BTP (SAP Business Technology Platform), incluindo:
          </p>
        </div>

        <div className="md:mt-0">
          <AccordionSap data={sapBTPBenefits} />
        </div>

        <Image
          className="absolute left-0 -z-10 pt-[40%] md:pt-[15%] max-md:hidden"
          src={SapPoweringSapBtp}
          alt=""
        />
      </section>

      <section className="mt-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase">
            Equipe Lab2dev para SAP BTP
          </h1>
          <p className="not-italic font-normal text-16 leading-7 text-gray-800 text-justify  mt-5">
            Somos referência em implementação e criação de soluções dentro do
            SAP Business Technology Platform (BTP). Nossa equipe conta com:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-14">
          {teamAreas.map((team, index) => (
            <CardTeam
              key={index}
              title={team.title}
              content={team.content}
              image={team.img}
            />
          ))}
        </div>
      </section>
    </>
  );
}
