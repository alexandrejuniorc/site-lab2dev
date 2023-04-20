import React from "react";

import { CardBlog } from "@/components/CardBlog";
import { CardTeam } from "@/components/CardTeam";

import { AccordionSap } from "../../components/Accordion";

export default function WhoWeAre() {
  return (
    <>
      <section>
        <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase">
          sap btp - Business Technology Platform
        </h1>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-8">
          SAP BTP (SAP Business Technology Platform) é uma plataforma de
          negócios baseada em nuvem da SAP, que oferece serviços de
          desenvolvimento, integração e análise de dados para ajudar as empresas
          a construir aplicativos e soluções personalizadas.
        </p>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-8">
          A plataforma é projetada para ajudar as empresas a criar experiências
          de usuário personalizadas, conectar-se a várias fontes de dados e
          integrar processos de negócios existentes em uma plataforma
          centralizada. Ela inclui uma variedade de ferramentas, tecnologias e
          serviços, como banco de dados em memória, machine learning, internet
          das coisas (IoT), analytics, segurança e muito mais.
        </p>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-8">
          A SAP BTP permite que os usuários desenvolvam e implementem
          aplicativos em várias linguagens de programação, como Java, Node.js e
          Python, e também fornece uma ampla gama de recursos de plataforma,
          incluindo a API Management, Integration Suite, Mobile Services,
          Workflow, entre outros. A plataforma é escalável e pode ser
          personalizada para atender às necessidades exclusivas de cada empresa.
        </p>
      </section>

      <section className="mt-20 grid grid-cols-2 max-md:flex max-md:flex-col">
        <div>
          <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase">
            benefícios sap btp
          </h1>
          <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-5">
            Existem vários benefícios que as empresas podem obter ao usar o SAP
            BTP (SAP Business Technology Platform), incluindo:
          </p>
        </div>

        <div className="max-md:mt-5">
          <AccordionSap />
        </div>
      </section>

      <section className="mt-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase">
            Equipe Lab2dev para SAP BTP
          </h1>
          <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-5">
            Somos referência em implementação e criação de soluções dentro do
            SAP Business Technology Platform
            <br /> (BTP). Nossa equipe conta com:
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2">
          <CardTeam
            title={"Consultores"}
            content={
              "Profissionais que têm conhecimento em várias soluções oferecidas pela plataforma SAP BTP, como integração, analytics, internet das coisas (IoT), inteligência artificial (IA), entre outras."
            }
          />
          <CardTeam
            title={"Desenvolvedores"}
            content={
              "Profissionais que trabalham com as tecnologias e ferramentas de desenvolvimento disponíveis na plataforma SAP BTP, incluindo desenvolvimento de aplicativos, construções de bancos de dados, microsserviços, entre outros."
            }
          />
          <CardTeam
            title={"Arquitetos"}
            content={
              "Profissionais que desenham e projetam soluções personalizadas usando diferentes serviços da plataforma SAP BTP para atender às necessidades dos clientes."
            }
          />
          <CardTeam
            title={"Analista de dados"}
            content={
              "Profissionais que possuem conhecimentos em soluções de análise de dados oferecidas pela plataforma SAP BTP, como SAP Data Intelligence (antigo Data Hub), SAP Data Warehouse Cloud (DWC) e SAP Analytics Cloud (SAC)."
            }
          />
        </div>
      </section>
    </>
  );
}
