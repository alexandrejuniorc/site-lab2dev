import Image from "next/image";

import { Button } from "@/components/Button";
import { TeamCarrousel } from "@/components/Carrousel/Team";
import { MissionCard } from "@/components/MissionCard";
import { imagesCarrouselMocky } from "@/mock/carrousel-1";
import { imagesCarrousel2Mocky } from "@/mock/carrousel-2";
import { missionCard } from "@/mock/mission-card";

import Mind from "../../../public/bg-mind.svg";
import Two from "../../../public/bg-two.svg";

export default function WhoWeAre() {
  return (
    <>
      <Image
        className="absolute top-0 left-0 -z-10 max-md:h-[11.25rem] max-md:w-auto"
        src={Two}
        alt=""
      />

      <section className="grid grid-cols-1 gap-[3.25rem] md:gap-[6.5625rem] md:grid-cols-2">
        <div className="flex flex-col">
          <h1 className="text-purple-300 leading-10 text-30 font-normal not-italic uppercase max-md:text-center">
            nossa história
          </h1>
          <p className="text-gray-800 text-16 leading-7 text-justify font-normal not-italic mt-7 max-md:text-center">
            Fundada em 2018, a Lab2dev é a primeira startup brasileira focada em
            inovação por meio do SAP BTP (Business Technology Platform). Somos
            especialistas em criar soluções, utilizando o que há de mais
            avançado em tecnologia para apoiar a transformação digital dos
            nossos clientes.
          </p>

          <p className="text-gray-800 text-16 leading-7 text-justify font-normal not-italic mt-2 max-md:text-center">
            Temos no nosso DNA a agilidade, inovação e paixão por desenvolver
            sistemas para transformar empresas e, consequentemente, pessoas.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full h-full lg:w-[25.3125rem] md:h-[14.25rem]">
            <TeamCarrousel
              width={25.3125}
              height={14.25}
              dataImages={imagesCarrousel2Mocky}
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-5 mt-20 md:grid-cols-3">
        {missionCard.map((card) => (
          <MissionCard
            key={card.title}
            title={card.title}
            content={card.content}
          />
        ))}

        <Image
          className="absolute right-0 -z-10 top-[70%] max-lg:top-[80%] max-md:hidden"
          src={Mind}
          alt=""
        />
      </section>

      <section className="mt-20 flex flex-col items-center">
        <h1 className="not-italic font-normal text-30 leading-10 uppercase text-purple-300">
          nossa equipe
        </h1>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 text-center mt-5">
          Nossa equipe, composta por consultores, arquitetos de solução,
          desenvolvedores, UX Designers e Integradores, é altamente qualificada
          e experiente em fornecer soluções personalizadas de software para
          empresas que buscam melhorar seus processos de negócios.
        </p>

        <div className=" mt-16 w-full h-full md:w-[41.25rem] md:h-[23.1875rem]">
          <TeamCarrousel
            dataImages={imagesCarrouselMocky}
            width={41.25}
            height={23.1875}
          />
        </div>
      </section>

      <section className="max-md:flex max-md:flex-col">
        <h1 className="not-italic font-normal text-30 leading-10 uppercase text-purple-300 mt-20 max-md:text-center">
          em que acreditamos
        </h1>
        <p className="not-italic font-normal text-16 text-justify leading-7 text-gray-800  mt-5 max-md:text-center">
          Queremos questionar o óbvio e prover novas possibilidades para que
          equipes e clientes SAP possam usufruir o que há de mais atual em
          termos de tecnologia e metodologias. Acreditamos que essa adoção pode
          ocorrer de maneira ágil e simplificada a partir do momento que se tem
          uma plataforma preparada e que acompanhe as novidades tecnológicas
          como o SAP BTP (Business Technology Platform). Por essa razão, ele é o
          centro de nossos estudos e dedicação. Se identifica com nossos ideais?
        </p>

        <div className="mt-11 max-md:flex max-md:justify-center">
          <Button
            color="purple"
            content="Trabalhe conosco"
            url={"https://jobs.quickin.io/lab2dev/jobs"}
          />
        </div>
      </section>
    </>
  );
}
