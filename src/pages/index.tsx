import Image from "next/image";

import { Button } from "@/components/Button";
import { CardBlog } from "@/components/CardBlog";
import { CardTrophie } from "@/components/CardTrophie";
import { ClientFeedback } from "@/components/Carrousel/ClientFeedback";
import { Clients } from "@/components/Carrousel/Clients";

import PartnerSAPImage from "../../public/bg-partner-sap.png";
import RealTimeImage from "../../public/bg-real-time.png";
import TrophieHackaton from "../../public/bg-trophies.png";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2 items-center justify-center">
        <div>
          <h1 className=" not-italic font-normal text-purple-300 leading-10 text-30 uppercase">
            Inovação e Tecnologia através do sap btp
          </h1>

          <p className="not-italic font-normal text-16 leading-7 text-gray-800 pt-8">
            A Lab2Dev é a primeira startup brasileira focada em inovação por
            meio do SAP BTP (Business Technology Platform). Através de soluções
            inteligentes, apoiamos a sua empresa na jornada da transformação
            digital.
          </p>

          <div className="mt-14">
            <Button color="purple" content="Saiba mais" />
          </div>
        </div>

        <div className="flex">
          <Image src={RealTimeImage} alt="" />
        </div>
      </section>

      <section className="grid grid-cols-2 items-center justify-center mt-20">
        <div className="flex w-full h-max">
          <Image src={PartnerSAPImage} alt="" />
        </div>

        <div>
          <h1 className="not-italic font-normal text-purple-300 leading-10 text-30 uppercase">
            Somos parceiros Gold SAP!
          </h1>

          <p className="not-italic font-normal text-16 leading-7 text-gray-800 pt-8">
            Para se tornar um parceiro Gold SAP, a empresa parceira precisa
            atender a certos requisitos estabelecidos pela SAP, como demonstrar
            um alto nível de competência técnica e de negócios, ter um bom
            histórico de satisfação do cliente, manter uma equipe qualificada e
            engajada em treinamentos e certificações da SAP, além de atingir
            metas de vendas e receita.
          </p>

          <div className="mt-14">
            <Button color="purple" content="Saiba mais" />
          </div>
        </div>
      </section>

      <section className="mt-20 grid grid-cols-2">
        <div className="mr-28 lg:mr-0">
          <h1 className="font-normal text-purple-300 leading-10 text-30 uppercase">
            Somos premiados
          </h1>
          <p className="font-normal text-16 leading-7 text-gray-800 pt-8 not-italic">
            Ao longo de nossa jornada, tivemos o privilégio de receber diversos
            prêmios que reconhecem a qualidade de nossos produtos e serviços.
            Essas conquistas nos motivam a continuar trabalhando com excelência
            e comprometimento, em busca da satisfação de nossos clientes.
          </p>
        </div>

        <div className="flex flex-1 gap-x-5">
          <CardTrophie image={TrophieHackaton} content="Hackaton Odebrecht" />
          <CardTrophie image={TrophieHackaton} content="Hackaoec 2019" />
        </div>
      </section>

      <section className="flex flex-col items-center text-center mt-20">
        <div>
          <h1 className="not-italic font-normal text-purple-300 leading-10 text-30 uppercase">
            Nossos clientes
          </h1>
          <p className="font-normal text-16 leading-7 text-gray-800 mt-5 not-italic">
            Atendemos no Brasil, na América Latina e na Ásia
          </p>
        </div>

        <div className="mt-16 block w-full">
          <Clients />
        </div>

        <div className="mt-11">
          <p className="font-normal text-16 leading-7 text-gray-800 mt-20 not-italic">
            Veja também alguns dos depoimentos deixados por representantes dos
            nossos
            <br /> clientes.
          </p>
        </div>

        <div className="w-full mt-8">
          <ClientFeedback />
        </div>
      </section>

      {/*
      NEW FEATURE COMING SOON

      <section className="mt-20">
        <div>
          <h1 className="font-normal text-30 leading-10 text-purple-300 not-italic uppercase text-center">
            Confira nosso blog!
          </h1>
          <p className="font-normal text-16 leading-7 text-gray-800 not-italic text-center mt-5">
            Últimas postagens
          </p>
        </div>

        <div className="mt-16 grid grid-cols-3">
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
      </section> */}
    </>
  );
}
