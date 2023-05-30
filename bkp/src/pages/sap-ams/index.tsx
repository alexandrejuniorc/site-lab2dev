import React from "react";

import { AccordionSap } from "@/components/Accordion";

export default function WhoWeAre() {
  return (
    <>
      <section>
        <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase max-md:text-center">
          ams btp - Application Management Services for Business Technology
          Platform
        </h1>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-7 max-md:text-center">
          Oferecemos o AMS BTP (Application Management Services for Business
          Technology Platform) para ajudar as empresas a gerenciar, manter e
          otimizar seus aplicativos e soluções desenvolvidos no SAP BTP (SAP
          Business Technology Platform).
        </p>

        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-5 max-md:text-center">
          Os serviços de AMS BTP são projetados para permitir que as empresas
          aproveitem ao máximo suas soluções SAP BTP, fornecendo suporte
          contínuo para garantir que os aplicativos sejam mantidos e executados
          sem problemas. Isso inclui a monitoração e resolução de problemas de
          desempenho, atualizações de software e gerenciamento de alterações.
        </p>
      </section>

      <section className="mt-20 grid grid-cols-2 max-md:flex max-md:flex-col">
        <div>
          <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase max-md:text-center">
            SAP BTP
          </h1>
          <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-5 max-md:text-center">
            Ao contratar os serviços de AMS BTP, as empresas podem se concentrar
            em seus principais negócios, enquanto cuidamos da manutenção,
            atualização e otimização contínuas de seus aplicativos e soluções
            desenvolvidos na SAP BTP.
          </p>
        </div>

        <div className="max-md:mt-5">
          <AccordionSap
            title={{
              title1: "Suporte contínuo",
              title2: "Monitoramento",
              title3: "Manutenção",
              title4: "Otimização",
              title5: "Gerenciamento de mudanças",
            }}
            content={{
              content1:
                "Para resolver problemas e garantir que os aplicativos estejam sempre em execução.",
              content2:
                "Monitoramento contínuo do desempenho dos aplicativos e identificação de problemas antes que eles afetem os usuários.",
              content3:
                "Manutenção e atualizações regulares do software para garantir que os aplicativos estejam sempre atualizados e seguros.",
              content4:
                "Identificação de oportunidades de melhoria e otimização dos aplicativos para maximizar a eficiência e reduzir custos.",
              content5:
                "Gerenciamento eficiente de alterações para minimizar o tempo de inatividade e reduzir os riscos de falhas de sistema.",
            }}
          />
        </div>
      </section>
    </>
  );
}
