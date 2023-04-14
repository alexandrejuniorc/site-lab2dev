import Image from "next/image";

import PartnerSAPImage from "../assets/bg-partner-sap.png";
import RealTimeImage from "../assets/bg-real-time.png";
import TrophieHackaton from "../assets/bg-trophies.png";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2 items-center justify-center">
        <div>
          <strong className=" not-italic font-normal text-purple-purple-200 leading-10 text-30/px uppercase">
            Inovação e Tecnologia através do sap btp
          </strong>

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
          <strong className="not-italic font-normal text-purple-purple-200 leading-10 text-30/px uppercase">
            Somos parceiros Gold SAP!
          </strong>

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
          <strong className="font-normal text-purple-purple-200 leading-10 text-30/px uppercase">
            Somos premiados
          </strong>
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
    </>
  );
}
