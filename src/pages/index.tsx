import Image from "next/image";

import { Button } from "@/components/Button";
import { CardTrophie } from "@/components/CardTrophie";
import CardTrophieMobile from "@/components/Carrousel/CardTrophieMobile";
import { Clients } from "@/components/Carrousel/Clients";

import Country from "../../public/bg-country.svg";
import PartnerSAPImage from "../../public/bg-partner-sap.png";
import RealTimeImage from "../../public/bg-real-time.png";
import TrophieHackaton2 from "../../public/bg-trophies-2.png";
import TrophieHackaton from "../../public/bg-trophies.png";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2 items-center justify-center max-md:flex max-md:flex-col max-md:text-center">
        <div>
          <h1 className=" not-italic font-normal text-purple-300 leading-10 text-30 uppercase">
            Inovação e Tecnologia através do sap btp
          </h1>

          <p className="not-italic font-normal text-16 leading-7 text-gray-800 pt-8 max-md:text-center">
            A Lab2Dev é a primeira startup brasileira focada em inovação por
            meio do SAP BTP (Business Technology Platform). Através de soluções
            inteligentes, apoiamos a sua empresa na jornada da transformação
            digital.
          </p>

          <div className="mt-14">
            <Button color="purple" content="Saiba mais" url={"o-que-fazemos"} />
          </div>
        </div>

        <div className="flex max-md:hidden">
          <Image src={RealTimeImage} alt="" />
        </div>
      </section>

      <section className="grid grid-cols-2 items-center justify-center mt-20 max-md:flex max-md:flex-col max-md:text-center">
        <div className="flex w-full h-max max-md:justify-center">
          <Image src={PartnerSAPImage} alt="" />
        </div>

        <div>
          <h1 className="not-italic font-normal text-purple-300 leading-10 text-30 uppercase max-md:mt-7">
            Somos parceiros Gold SAP!
          </h1>

          <p className="not-italic font-normal text-16 leading-7 text-gray-800 pt-8 max-lg:text-left max-md:text-center">
            Para se tornar um parceiro Gold SAP, a empresa parceira precisa
            atender a certos requisitos estabelecidos pela SAP, como demonstrar
            um alto nível de competência técnica e de negócios, ter um bom
            histórico de satisfação do cliente, manter uma equipe qualificada e
            engajada em treinamentos e certificações da SAP, além de atingir
            metas de vendas e receita.
          </p>

          <div className="mt-14">
            <Button color="purple" content="Saiba mais" url={"sap-btp"} />
          </div>
        </div>
      </section>

      <section className="mt-20 grid grid-cols-2 max-lg:flex max-lg:flex-col">
        <div className="mr-28 lg:mr-0 max-lg:text-center max-lg:m-0">
          <h1 className="font-normal text-purple-300 leading-10 text-30 uppercase">
            Somos premiados
          </h1>
          <p className="font-normal text-16 leading-7 text-gray-800 pt-8 not-italic max-lg:text-left max-md:text-center">
            Ao longo de nossa jornada, tivemos o privilégio de receber diversos
            prêmios que reconhecem a qualidade de nossos produtos e serviços.
            Essas conquistas nos motivam a continuar trabalhando com excelência
            e comprometimento, em busca da satisfação de nossos clientes.
          </p>
        </div>

        <div className="max-lg:mt-7">
          <div className="lg:flex lg:gap-5 max-lg:hidden">
            <CardTrophie
              image={TrophieHackaton}
              content={"Hackathon de Inovação Grupo Odebrecht"}
              title={"1° Lugar"}
            />
            <CardTrophie
              image={TrophieHackaton2}
              content="SAP Innovation Hackathon"
              title={"2° Lugar"}
            />
          </div>

          <CardTrophieMobile />
        </div>
      </section>

      <section className="flex flex-col items-center text-center mt-20">
        <Image className="absolute left-0 -z-10" src={Country} alt="" />

        <div>
          <h1 className="not-italic font-normal text-purple-300 leading-10 text-30 uppercase">
            Nossos clientes
          </h1>
          <p className="font-normal text-16 leading-7 text-gray-800 mt-5 not-italic">
            Atendemos no Brasil, na América Latina e na Ásia
          </p>
        </div>

        <div className="mt-16 block w-full max-lg:mt-6">
          <Clients />
        </div>

        <div className="mt-11">
          <p className="font-normal text-16 leading-7 text-gray-800 mt-14 not-italic">
            Veja também alguns dos depoimentos deixados por representantes dos
            nossos clientes.
          </p>
        </div>

        <div className="w-full mt-8 flex justify-center">
          <div className="rounded-md shadow-md w-80 flex justify-around items-center flex-col p-6 bg-white">
            <h1 className="font-normal text-20 leading-7 text-purple-300 not-italic">
              Anderson Carrio
            </h1>
            <p className="font-normal text-14 leading-7 text-purple-300 not-italic">
              Gerente Executivo de Tecnologia - Dexco
            </p>

            <p className="font-normal text-12 leading-4 text-gray-800 not-italic">
              {`"`}Trabalhar com a equipe da Lab2Dev tem sido uma experiência
              muito positiva. Eles demonstraram um profundo conhecimento e
              experiência no SAP BTP e CPI, e foram capazes de nos orientar de
              forma clara e precisa durante todo o nosso processo. Além disso, a
              equipe é extremamente prestativa, ágil e comprometida em entregar
              resultados de alta qualidade. Estou muito satisfeito com o
              trabalho realizado pela Lab2Dev e recomendo seus serviços aos que
              procuram soluções confiáveis e eficientes em tecnologia.{`"`}
            </p>
          </div>
          {/*   <ClientFeedback />
          <ClientFeedbackMobile /> */}
        </div>
      </section>
    </>
  );
}
