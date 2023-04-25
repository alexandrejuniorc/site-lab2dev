import Image from "next/image";
import React from "react";

import { CardSupport } from "@/components/CardSupport";
import { TeamCarrousel } from "@/components/Carrousel/Team";
import { InfosCard } from "@/components/InfosCard";
import { OtherSolutionsCard } from "@/components/OtherSolutionsCard";
import { SapSolutionsCard } from "@/components/SapSolutionsCard";

import JavascriptImage from "../../../public/bg-javascript.svg";
import SapPartnerImage from "../../../public/bg-partner-sap.png";
import PythonImage from "../../../public/bg-python.svg";
import SapLogoImage from "../../../public/bg-sap-logo.svg";
import Image1 from "../../../public/carrousel-2/20230420_152412.jpeg";
import Image3 from "../../../public/carrousel-2/IMG_0730.jpeg";
import Image2 from "../../../public/carrousel-2/IMG_6609.jpeg";
import FigmaImage from "../../../public/icons/bg-icon-figma.svg";
import NextJsImage from "../../../public/icons/bg-icon-nextjs.svg";
import ReactNativeImage from "../../../public/icons/bg-icon-react-native.svg";
import Ui5Image from "../../../public/icons/bg-icon-ui5.svg";

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
          <SapSolutionsCard
            image={""}
            title={"SAP Build"}
            content={
              "Acreditamos em uma UX renovada! Trazemos o usuário para construir a aplicação juntamente com o time de desenvolvedores, afinal, ninguém melhor do que ele para desenhar a UX da solução."
            }
          />
          <SapSolutionsCard
            image={""}
            title={"SAP Hana"}
            content={
              "Com uma base sólida e rápida, a solução é escalável e conta com tudo que o HANA tem a oferecer. Trabalhamos com o que há de inovador na plataforma para prover a melhor solução."
            }
          />
          <SapSolutionsCard
            image={""}
            title={"SAP Fiori"}
            content={
              "Com mais de 12 mil horas e 28 projetos entregues pelo nosso time, acreditamos que o SAP Fiori será a tecnologia central de todas as interfaces de produtos da SAP, trazendo intuitividade, robustez e flexibilidade para aplicações SAP por meio da poderosa linguagem SAPUI5."
            }
          />
          <SapSolutionsCard
            image={""}
            title={"SAP BTP Workflow"}
            content={
              "Serviço de Workflow Cloud da SAP, que visa a comunicação de toda a cadeia de sistemas da empresa, permitindo uma gestão dos processos de negócio unificada e visual."
            }
          />
          <SapSolutionsCard
            image={""}
            title={"SAP Business Rules Cloud"}
            content={
              "Serviço de Business Rules Cloud da SAP, que visa a criação de lógica de aprovação, alçadas, regras de negócio e inteligência para tomada de decisões sem a necessidade de conhecimento em codificação. O próprio usuário é capaz de criar as regras de negócio."
            }
          />
          <SapSolutionsCard
            image={""}
            title={"SAP Document Service"}
            content={
              "Serviço de gerenciamento de documentos dentro do SCP, desenvolvido a fim de controlar acessos e versionamento de arquivos por meio de APIs seguras."
            }
          />
          <SapSolutionsCard
            image={""}
            title={"SAP API Management"}
            content={
              "Serviço que permite publicar, desenvolver e gerenciar APIs em um ambiente seguro e escalável de forma fácil e intuitiva."
            }
          />
          <SapSolutionsCard
            image={""}
            title={"SAP BTP Integration"}
            content={
              "Serviço de gerenciamento de documentos dentro do SCP, desenvolvido a fim de controlar acessos e versionamento de arquivos por meio de APIs seguras."
            }
          />
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
          <CardSupport
            title="Comprovação de habilidades"
            content="A empresa deve demonstrar um alto nível de habilidade na implementação de soluções SAP em várias áreas, como ERP, CRM, gestão da cadeia de suprimentos, analytics, entre outras."
          />
          <CardSupport
            title="Satisfação do cliente"
            content="A empresa deve ter um histórico comprovado de satisfação do cliente, atendendo ou superando as expectativas dos clientes em termos de qualidade, tempo de entrega e orçamento."
          />
          <CardSupport
            title="Certificação e treinamento"
            content="A empresa deve ter uma equipe altamente treinada e certificada em várias áreas de soluções SAP, incluindo certificações para consultores e especialistas."
          />
          <CardSupport
            title="nº de projetos bem-sucedidos"
            content="A empresa deve ter concluído um número significativo de projetos SAP bem-sucedidos, o que indica sua experiência e capacidade de fornecer soluções SAP de alta qualidade."
          />
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
            <OtherSolutionsCard
              title={"SAP UI5"}
              image={Ui5Image}
              content={
                "O OpenUI5 é uma estrutura de aplicativo JavaScript projetada para criar aplicativos prontos para a empresa, compatíveis com várias plataformas."
              }
            />
            <OtherSolutionsCard
              title={"Next.js"}
              image={NextJsImage}
              content={
                "Next.js é uma estrutura da web de desenvolvimento front-end React criada por Vercel que permite funcionalidades como renderização do lado do servidor e sites estáticos."
              }
            />
            <OtherSolutionsCard
              title={"React Native"}
              image={ReactNativeImage}
              content={
                "React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa."
              }
            />
            <OtherSolutionsCard
              title={"UI/UX Design"}
              image={FigmaImage}
              content={
                "UI trata dos elementos com os quais o usuário interage, ao passo que o UX procura entender os comportamentos e emoções dessas pessoas no uso do produto."
              }
            />

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
          <div className="max-md:w-[20rem] max-md:mt-16">
            <TeamCarrousel
              imageContent={{
                imgContent1: true,
                imgContent2: true,
                imgContent3: true,
              }}
              imageUrl={{
                img1: Image1,
                img2: Image2,
                img3: Image3,
              }}
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
          <InfosCard
            title={"PRESENÇA"}
            info={"+40"}
            content={"clientes atendidos"}
          />
          <InfosCard
            title={"DEDICAÇÃO"}
            info={"+140"}
            content={"colaboradores"}
          />
          <InfosCard
            title={"EXPERIÊNCIA"}
            info={"+750k horas"}
            content={"em projetos de inovação"}
          />
        </div>
      </section>
    </>
  );
}
