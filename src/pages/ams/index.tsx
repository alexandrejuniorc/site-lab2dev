import React from "react";

import { AccordionSap } from "@/components/Accordion";
import { CardSupport } from "@/components/CardSupport";

export default function WhoWeAre() {
  return (
    <>
      <section>
        <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase">
          ams btp - Application Management Services for Business Technology
          Platform
        </h1>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-7">
          Oferecemos o AMS BTP (Application Management Services for Business
          Technology Platform) para ajudar as empresas a gerenciar, manter e
          otimizar seus aplicativos e soluções desenvolvidos no SAP BTP (SAP
          Business Technology Platform).
        </p>

        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-5">
          Os serviços de AMS BTP são projetados para permitir que as empresas
          aproveitem ao máximo suas soluções SAP BTP, fornecendo suporte
          contínuo para garantir que os aplicativos sejam mantidos e executados
          sem problemas. Isso inclui a monitoração e resolução de problemas de
          desempenho, atualizações de software e gerenciamento de alterações.
        </p>
      </section>

      <section className="mt-20 grid grid-cols-2 max-md:flex max-md:flex-col">
        <div>
          <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase">
            SAP BTP
          </h1>
          <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-5 w-[19.5625rem]">
            Ao contratar os serviços de AMS BTP, as empresas podem se concentrar
            em seus principais negócios, enquanto cuidamos da manutenção,
            atualização e otimização contínuas de seus aplicativos e soluções
            desenvolvidos na SAP BTP.
          </p>
        </div>

        <div className="max-md:mt-5">
          <AccordionSap />
        </div>
      </section>

      <section className="mt-20">
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-md:gap-2">
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
    </>
  );
}
