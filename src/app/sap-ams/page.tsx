import Link from "next/link";
import React from "react";

import { AccordionSap } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { sapBTP } from "@/mock/sap-btp";

export default function SapAMS() {
  return (
    <>
      <section>
        <div className="grid grid-cols-2 md:gap-[6.5625rem]">
          <div>
            <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase text-center md:text-left">
              ams btp - Application Management Services for Business Technology
              Platform
            </h1>

            <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-7 max-md:text-center">
              Oferecemos o AMS BTP (Application Management Services for Business
              Technology Platform) para ajudar as empresas a gerenciar, manter e
              otimizar seus aplicativos e soluções desenvolvidos no{" "}
              <Link href="https://www.sap.com/brazil/products/technology-platform.html">
                <u className="text-purple-300 hover:text-purple-100">
                  SAP BTP (SAP Business Technology Platform)
                </u>
              </Link>
              .
            </p>
          </div>

          <div className="flex max-md:hidden">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/jcsZGBnBlIo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-5 text-center md:text-justify">
          Os serviços de AMS BTP são projetados para permitir que as empresas
          aproveitem ao máximo suas soluções SAP BTP, fornecendo suporte
          contínuo para garantir que os aplicativos sejam mantidos e executados
          sem problemas. Isso inclui a monitoração e resolução de problemas de
          desempenho, atualizações de software e gerenciamento de alterações.
        </p>

        <div className="mt-7">
          <Button
            color="purple"
            content="Fale conosco"
            url="mailto:daniele.veron@lab2dev.com"
          />
        </div>
      </section>

      <section className="mt-20 grid grid-cols-1 gap-[3.25rem] md:grid-cols-2 md:gap-[105px]">
        <div>
          <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase max-md:text-center">
            SAP BTP
          </h1>

          <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-5 text-center md:text-justify">
            Ao contratar os serviços de AMS BTP, as empresas podem se concentrar
            em seus principais negócios, enquanto cuidamos da manutenção,
            atualização e otimização contínuas de seus aplicativos e soluções
            desenvolvidos na SAP BTP.
          </p>
        </div>

        <div className="max-md:mt-5">
          <AccordionSap data={sapBTP} />
        </div>
      </section>
    </>
  );
}
