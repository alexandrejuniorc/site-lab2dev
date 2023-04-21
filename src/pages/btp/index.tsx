import Image from "next/image";
import React from "react";

import { CardTeam } from "@/components/CardTeam";

import SapBtpImage from "../../../public/bg-sap-btp.svg";
import ArchitectImage from "../../../public/icons/bg-icon-architect.svg";
import ConsultantImage from "../../../public/icons/bg-icon-consultant.svg";
import DataAnalystImage from "../../../public/icons/bg-icon-data-analyst.svg";
import DeveloperImage from "../../../public/icons/bg-icon-developer.svg";
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
          <AccordionSap
            title={{
              title1: "Agilidade no desenvolvimento de aplicativos",
              title2: "Integração de sistemas",
              title3: "Análise de dados avançada",
              title4: "Segurança e conformidade",
              title5: "Escalabilidade",
              title6: "Colaboração",
              title7: "Acesso global",
            }}
            content={{
              content1:
                "Agilidade no desenvolvimento de aplicativos: Com o SAP BTP, os desenvolvedores podem criar aplicativos personalizados rapidamente usando uma variedade de linguagens de programação e ferramentas disponíveis na plataforma. Além da facilidade da integração com sistemas SAP, como o S/4HANA, ECC, Ariba, SFSF e outros, diferentemente de outras plataformas.",
              content2:
                "Integração de sistemas: O SAP BTP fornece ferramentas e serviços de integração para ajudar as empresas a conectar sistemas e processos de negócios existentes.",
              content3:
                "Análise de dados avançada: A plataforma possui uma ampla gama de ferramentas de análise de dados, como machine learning e analytics, que permitem que as empresas obtenham insights valiosos sobre seus dados.",
              content4:
                "Segurança e conformidade: O SAP BTP fornece recursos de segurança avançados para proteger os dados da empresa e garantir a conformidade com os regulamentos de privacidade de dados.",
              content5:
                "Escalabilidade: A plataforma é escalável e pode ser dimensionada para atender às necessidades em constante mudança das empresas.",
              content6:
                "Colaboração: O SAP BTP permite que as equipes trabalhem em conjunto em projetos de desenvolvimento de aplicativos, compartilhando informações e colaborando em tempo real.",
              content7:
                "Acesso global: A plataforma é baseada na nuvem e pode ser acessada em qualquer lugar do mundo, permitindo que as empresas gerenciem seus negócios em uma escala global.",
            }}
          />
        </div>

        <Image
          className="absolute left-0 -z-10 top-[80%] max-xl:top-[90%] md:top-[90%] max-md:hidden"
          src={SapBtpImage}
          alt=""
        />
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

        <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:items-center mt-14">
          <CardTeam
            title={"Consultores"}
            content={
              "Profissionais que têm conhecimento em várias soluções oferecidas pela plataforma SAP BTP, como integração, analytics, internet das coisas (IoT), inteligência artificial (IA), entre outras."
            }
            image={ConsultantImage}
          />
          <CardTeam
            title={"Desenvolvedores"}
            content={
              "Profissionais que trabalham com as tecnologias e ferramentas de desenvolvimento disponíveis na plataforma SAP BTP, incluindo desenvolvimento de aplicativos, construções de bancos de dados, microsserviços, entre outros."
            }
            image={DeveloperImage}
          />
          <CardTeam
            title={"Arquitetos"}
            content={
              "Profissionais que desenham e projetam soluções personalizadas usando diferentes serviços da plataforma SAP BTP para atender às necessidades dos clientes."
            }
            image={ArchitectImage}
          />
          <CardTeam
            title={"Analista de dados"}
            content={
              "Profissionais que possuem conhecimentos em soluções de análise de dados oferecidas pela plataforma SAP BTP, como SAP Data Intelligence (antigo Data Hub), SAP Data Warehouse Cloud (DWC) e SAP Analytics Cloud (SAC)."
            }
            image={DataAnalystImage}
          />
        </div>
      </section>
    </>
  );
}
