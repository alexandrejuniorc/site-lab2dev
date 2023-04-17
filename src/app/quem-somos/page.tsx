import Image from "next/image";

import { Button } from "@/components/Button";
import { TeamCarrousel } from "@/components/Carrousel/TeamCarrousel";
import { MissionCard } from "@/components/Pages/WhoWeAre/MissionCard";

import Video from "../../../public/bg-video.png";

export default function WhoWeAre() {
  return (
    <>
      <section className="grid grid-cols-2 gap-5">
        <div className="flex flex-col">
          <h1 className="text-purple-300 leading-10 text-30 font-normal not-italic uppercase">
            nossa história
          </h1>
          <p className="text-gray-800 text-16 leading-7 font-normal not-italic mt-7">
            Fundada em 2018, a Lab2Dev é a primeira startup brasileira focada em
            inovação por meio do SAP BTP (Business Technology Platform). Somos
            especialistas em criar soluções, utilizando o que há de mais
            avançado em tecnologia para apoiar a transformação digital dos
            nossos clientes. Temos no nosso DNA a agilidade, inovação e paixão
            por desenvolver sistemas para transformar empresas e,
            consequentemente, pessoas.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src={Video} alt="" />
        </div>
      </section>

      <section className="grid grid-cols-3 gap-5 mt-20">
        <MissionCard
          title="MISSÃO"
          content="Maximizar o resultado dos nossos clientes, criando soluções inteligentes, auxiliando na jornada de transformação digital."
        />
        <MissionCard
          title="VISÃO"
          content="Ser reconhecido como o principal parceiro de inovação de nossos clientes."
        />
        <MissionCard
          title="VALORES"
          content="Inovação, Criatividade, Paixão, Ética, Honestidade, Empatia, Amizade, Comprometimento e respeito com nossos colaboradores e clientes"
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

        <div className="w-[41.25rem] h-[23rem] mt-16">
          <TeamCarrousel />
        </div>
      </section>

      <section>
        <h1 className="not-italic font-normal text-30 leading-10 uppercase text-purple-300 mt-20">
          em que acreditamos
        </h1>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800  mt-5 text-left">
          Queremos questionar o óbvio e prover novas possibilidades para que
          equipes e clientes SAP possam usufruir o que há de mais atual em
          termos de tecnologia e metodologias. Acreditamos que essa adoção pode
          ocorrer de maneira ágil e simplificada a partir do momento que se tem
          uma plataforma preparada e que acompanhe as novidades tecnológicas
          como o SAP BTO (Business Technology Platform). Por essa razão, ele é o
          centro de nossos estudos e dedicação. <br />
          <br />
          Se identifica com nossos ideais?
        </p>

        <div className="mt-11">
          <Button color="purple" content="Trabalhe conosco" />
        </div>
      </section>
    </>
  );
}
