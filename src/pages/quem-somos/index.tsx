import Image from "next/image";

import { Button } from "@/components/Button";
import { TeamCarrousel } from "@/components/Carrousel/Team";
import { MissionCard } from "@/components/MissionCard";

import Image1 from "../../../public/carrousel-1/IMG_0735.jpeg";
import Image2 from "../../../public/carrousel-1/IMG_6595.jpeg";
import Image3 from "../../../public/carrousel-1/IMG_6600.jpeg";
import Image4 from "../../../public/carrousel-1/IMG_6602.jpeg";

export default function WhoWeAre() {
  return (
    <>
      <section className="grid grid-cols-2 gap-5 max-md:flex max-md:flex-col">
        <div className="flex flex-col">
          <h1 className="text-purple-300 leading-10 text-30 font-normal not-italic uppercase">
            nossa história
          </h1>
          <p className="text-gray-800 text-16 leading-7 font-normal not-italic mt-7">
            Fundada em 2018, a Lab2Dev é a primeira startup brasileira focada em
            inovação por meio do SAP BTP (Business Technology Platform). Somos
            especialistas em criar soluções, utilizando o que há de mais
            avançado em tecnologia para apoiar a transformação digital dos
            nossos clientes.
          </p>

          <p className="text-gray-800 text-16 leading-7 font-normal not-italic mt-2">
            Temos no nosso DNA a agilidade, inovação e paixão por desenvolver
            sistemas para transformar empresas e, consequentemente, pessoas.
          </p>
        </div>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jcsZGBnBlIo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {/* <Image src={Video} alt="" /> */}
        </div>
      </section>

      <section className="grid grid-cols-3 gap-5 mt-20 max-md:flex max-md:flex-col items-center">
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

        <div className="w-[41.25rem] mt-16 max-md:w-[20rem]">
          <TeamCarrousel
            imageContent={{
              imgContent1: true,
              imgContent2: true,
              imgContent3: true,
              imgContent4: true,
            }}
            imageUrl={{
              img1: Image1,
              img2: Image2,
              img3: Image3,
              img4: Image4,
            }}
          />
        </div>
      </section>

      <section className="max-md:flex max-md:flex-col">
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
          <Button color="purple" content="Trabalhe conosco" url={""} />
        </div>
      </section>
    </>
  );
}
