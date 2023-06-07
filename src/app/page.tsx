"use client";
import Image from "next/image";

import { Button } from "@/components/Button";
import { CardClientTestimonial } from "@/components/CardClientTestimonial";
import { Clients } from "@/components/Carrousel/Clients";
import { InfosCard } from "@/components/InfosCard";
import { infoCard } from "@/mock/info-card";

import Country from "../../public/bg-country.svg";
import PartnerSAPImage from "../../public/bg-partner-sap.png";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2 gap-5 items-center justify-center max-md:flex max-md:flex-col max-md:text-center">
        <div>
          <h1 className=" not-italic font-normal text-purple-300 leading-10 text-30 uppercase">
            Inovação e Tecnologia através do sap btp
          </h1>

          <div>
            <p className="not-italic font-normal text-justify text-16 leading-7 text-gray-800 pt-7 max-md:text-center">
              A Lab2dev é a primeira startup brasileira focada em inovação por
              meio do SAP BTP (Business Technology Platform). Através de
              soluções inteligentes, apoiamos a sua empresa na jornada da
              transformação digital.
            </p>

            <div className="mt-14">
              <Button
                color="purple"
                content="Saiba mais"
                url={"o-que-fazemos"}
              />
            </div>
          </div>
        </div>

        <div className="flex max-md:hidden">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/kvrRC1S2noE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="grid grid-cols-1 mt-20 md:grid-cols-2">
        <div className="w-full flex justify-center md:justify-start items-center">
          <Image
            className="w-[20rem] h-[15.5rem]"
            src={PartnerSAPImage}
            alt=""
          />
        </div>

        <div>
          <h1 className="not-italic font-normal text-purple-300 leading-10 text-30 uppercase mt-7 md:mt-0">
            Somos parceiros Gold SAP!
          </h1>

          <p className="not-italic font-normal text-justify text-16 leading-7 text-gray-800 pt-7">
            Para se tornar um parceiro Gold SAP, a empresa parceira precisa
            atender a certos requisitos estabelecidos pela SAP, como demonstrar
            um alto nível de competência técnica e de negócios, ter um bom
            histórico de satisfação do cliente, manter uma equipe qualificada e
            engajada em treinamentos e certificações da SAP, além de atingir
            metas de vendas e receita.
          </p>

          <div className="mt-14 flex justify-center md:justify-start">
            <Button color="purple" content="Saiba mais" url={"sap-btp"} />
          </div>
        </div>
      </section>

      <section className="mt-20 grid grid-cols-3 gap-5 max-lg:flex max-lg:flex-col">
        {infoCard.map((card) => (
          <InfosCard
            key={card.title}
            title={card.title}
            info={card.info}
            content={card.content}
          />
        ))}
      </section>

      <section className="flex flex-col items-center text-center mt-20">
        <Image className="absolute left-0 -z-10" src={Country} alt="" />

        <div>
          <h1 className="not-italic font-normal text-purple-300 leading-10 text-30 uppercase">
            Nossos clientes
          </h1>
          <p className=" not-italic font-normal text-16 leading-7 text-gray-800 mt-5 ">
            Atendemos no Brasil, na América Latina, Ásia e nos EUA
          </p>
        </div>

        <div className="mt-12 block w-full max-lg:mt-6">
          <Clients />
        </div>

        <div className="mt-10">
          <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-14 ">
            Veja também alguns dos depoimentos deixados por representantes dos
            nossos clientes.
          </p>
        </div>

        <div className="w-full mt-7 flex justify-center">
          <CardClientTestimonial />
        </div>
      </section>
    </>
  );
}
