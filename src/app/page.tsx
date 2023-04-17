import Image from "next/image";

import { ClientFeedback } from "@/components/Carrousel/ClientFeedback";
import { ClientsCarrousel } from "@/components/Carrousel/ClientsCarrousel";

import PartnerSAPImage from "../../public//bg-partner-sap.png";
import RealTimeImage from "../../public//bg-real-time.png";
import TrophieHackaton from "../../public/bg-trophies.png";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2 items-center justify-center">
        <div>
          <h1 className=" not-italic font-normal text-purple-purple-200 leading-10 text-30/px uppercase">
            Inovação e Tecnologia através do sap btp
          </h1>

          <p className="not-italic font-normal text-16/px leading-7 text-gray-gray-400 pt-8">
            A Lab2Dev é a primeira startup brasileira focada em inovação por
            meio do SAP BTP (Business Technology Platform). Através de soluções
            inteligentes, apoiamos a sua empresa na jornada da transformação
            digital.
          </p>

          <button className="bg-purple-purple-100 py-3 px-12 rounded-md font-normal text-center leading-6 not-italic text-18/px text-white mt-14">
            Saiba mais
          </button>
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
          <h1 className="not-italic font-normal text-purple-purple-200 leading-10 text-30/px uppercase">
            Somos parceiros Gold SAP!
          </h1>

          <p className="not-italic font-normal text-16/px leading-7 text-gray-gray-400 pt-8">
            Para se tornar um parceiro Gold SAP, a empresa parceira precisa
            atender a certos requisitos estabelecidos pela SAP, como demonstrar
            um alto nível de competência técnica e de negócios, ter um bom
            histórico de satisfação do cliente, manter uma equipe qualificada e
            engajada em treinamentos e certificações da SAP, além de atingir
            metas de vendas e receita.
          </p>

          <button className="bg-purple-purple-100 py-3 px-12 rounded-md font-normal text-center leading-6 not-italic text-18/px text-white mt-14">
            Saiba mais
          </button>
        </div>
      </section>

      <section className="mt-20 grid grid-cols-2">
        <div className="mr-28">
          <h1 className="font-normal text-purple-purple-200 leading-10 text-30/px uppercase">
            Somos premiados
          </h1>
          <p className="font-normal text-16/px leading-7 text-gray-gray-400 pt-8 not-italic">
            Ao longo de nossa jornada, tivemos o privilégio de receber diversos
            prêmios que reconhecem a qualidade de nossos produtos e serviços.
            Essas conquistas nos motivam a continuar trabalhando com excelência
            e comprometimento, em busca da satisfação de nossos clientes.
          </p>
        </div>

        <div className="flex flex-1 gap-x-5">
          <div className="bg-blue-blue-300 w-60 rounded py-6 px-11 flex flex-col justify-center items-center">
            <div className=" rounded-full w-36 h-36 border-8 border-gray-gray-200">
              <div className="bg-white h-full flex items-center justify-center rounded-full">
                <Image src={TrophieHackaton} alt="" />
              </div>
            </div>

            <div className="mt-7">
              <strong className="not-italic font-normal text-16/px leading-7 text-center text-white flex justify-center">
                1° Lugar
              </strong>
              <p className="not-italic font-normal text-10/px leading-3 text-center text-gray-gray-50 flex justify-center">
                Hackaton Odebrecht Hackaoec 2019
              </p>
            </div>
          </div>

          <div className="bg-blue-blue-300 w-60 rounded py-6 px-11 flex flex-col justify-center items-center">
            <div className=" rounded-full w-36 h-36 border-8 border-gray-gray-200">
              <div className="bg-white h-full flex items-center justify-center rounded-full">
                <Image src={TrophieHackaton} alt="" />
              </div>
            </div>

            <div className="mt-7">
              <strong className="not-italic font-normal text-16/px leading-7 text-center text-white flex justify-center">
                1° Lugar
              </strong>
              <p className="not-italic font-normal text-10/px leading-3 text-center text-gray-gray-50 flex justify-center">
                Hackaton Odebrecht Hackaoec 2019
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center text-center mt-20">
        <div>
          <h1 className="not-italic font-normal text-purple-purple-200 leading-10 text-30/px uppercase">
            Nossos clientes
          </h1>
          <p className="font-normal text-16/px leading-7 text-gray-gray-500 mt-5 not-italic">
            Atendemos no Brasil, na América Latina e na Ásia
          </p>
        </div>

        <div className="mt-16 block w-full">
          <ClientsCarrousel />
        </div>

        <div className="mt-20">
          <p className="font-normal text-16/px leading-7 text-gray-gray-500 mt-20 not-italic">
            Veja também alguns dos depoimentos deixados por representantes dos
            nossos
            <br /> clientes.
          </p>
        </div>

        <div className=" w-full">
          <ClientFeedback />
        </div>
      </section>

      <section className="mt-20">
        <div>
          <h1 className="font-normal text-30/px leading-10 text-purple-purple-200 not-italic uppercase text-center">
            Confira nosso blog!
          </h1>
          <p className="font-normal text-16/px leading-7 text-gray-gray-500 not-italic text-center mt-5">
            Últimas postagens
          </p>
        </div>

        <div className="mt-16 grid grid-cols-3">
          <div className="w-80 h-[30.125rem] max-h-[30.125rem] rounded-md shadow-md p-[1.625rem] flex flex-col justify-evenly">
            <div className="w-[16.875rem] h-[6.25rem] bg-gray-gray-60 ">
              {/* <Image src={} alt="" /> */}
            </div>

            <div className="mt-7">
              <h1 className="font-normal text-20/px leading-7 text-purple-purple-200 not-italic">
                Por que HANA é o banco de dados mais rápido?
              </h1>
              <p className="font-normal text-12/px leading-4 text-gray-gray-500 not-italic mt-5">
                Lançado em 2011 pela SAP, o SAP HANA veio para revolucionar a
                forma de como os dados empresariais são gerenciados, desde então
                todos os produtos lançados pela SAP [...]
              </p>
            </div>

            <div className="flex justify-between items-center mt-14">
              <div className="flex gap-3 items-center ">
                <div className="rounded-[50%] w-max border-2 border-blue-blue-50">
                  <div className="bg-blue-blue-100 w-6 h-6 flex items-center justify-center rounded-[50%]"></div>
                </div>

                <p className="font-normal text-12/px leading-4 text-gray-gray-500 not-italic">
                  Bruno Vianna
                </p>
              </div>

              <p className="font-normal text-12/px leading-4 text-gray-gray-500 not-italic text-right">
                Leitura: 3 min
              </p>
            </div>
          </div>

          <div className="w-80 h-[30.125rem] max-h-[30.125rem] rounded-md shadow-md p-[1.625rem] flex flex-col justify-evenly">
            <div className="w-[16.875rem] h-[6.25rem] bg-gray-gray-60 ">
              {/* <Image src={} alt="" /> */}
            </div>

            <div className="mt-7">
              <h1 className="font-normal text-20/px leading-7 text-purple-purple-200 not-italic">
                Por que HANA é o banco de dados mais rápido?
              </h1>
              <p className="font-normal text-12/px leading-4 text-gray-gray-500 not-italic mt-5">
                Lançado em 2011 pela SAP, o SAP HANA veio para revolucionar a
                forma de como os dados empresariais são gerenciados, desde então
                todos os produtos lançados pela SAP [...]
              </p>
            </div>

            <div className="flex justify-between items-center mt-14">
              <div className="flex gap-3 items-center ">
                <div className="rounded-[50%] w-max border-2 border-blue-blue-50">
                  <div className="bg-blue-blue-100 w-6 h-6 flex items-center justify-center rounded-[50%]"></div>
                </div>

                <p className="font-normal text-12/px leading-4 text-gray-gray-500 not-italic">
                  Bruno Vianna
                </p>
              </div>

              <p className="font-normal text-12/px leading-4 text-gray-gray-500 not-italic text-right">
                Leitura: 3 min
              </p>
            </div>
          </div>

          <div className="w-80 h-[30.125rem] max-h-[30.125rem] rounded-md shadow-md p-[1.625rem] flex flex-col justify-evenly">
            <div className="w-[16.875rem] h-[6.25rem] bg-gray-gray-60 ">
              {/* <Image src={} alt="" /> */}
            </div>

            <div className="mt-7">
              <h1 className="font-normal text-20/px leading-7 text-purple-purple-200 not-italic">
                Por que HANA é o banco de dados mais rápido?
              </h1>
              <p className="font-normal text-12/px leading-4 text-gray-gray-500 not-italic mt-5">
                Lançado em 2011 pela SAP, o SAP HANA veio para revolucionar a
                forma de como os dados empresariais são gerenciados, desde então
                todos os produtos lançados pela SAP [...]
              </p>
            </div>

            <div className="flex justify-between items-center mt-14">
              <div className="flex gap-3 items-center ">
                <div className="rounded-[50%] w-max border-2 border-blue-blue-50">
                  <div className="bg-blue-blue-100 w-6 h-6 flex items-center justify-center rounded-[50%]"></div>
                </div>

                <p className="font-normal text-12/px leading-4 text-gray-gray-500 not-italic">
                  Bruno Vianna
                </p>
              </div>

              <p className="font-normal text-12/px leading-4 text-gray-gray-500 not-italic text-right">
                Leitura: 3 min
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
