import Image from "next/image";
import React from "react";

import AndersonCarrio from "../../public/clients/testimonial-clients/anderson-carrio.jpeg";

export const CardClientTestimonial = () => {
  return (
    <div className="rounded-md shadow-md w-80 flex justify-around items-center flex-col p-6 bg-white">
      <div className="bg-purple-100 w-[4.375rem] h-[4.375rem] border-8 border-purple-200/50 rounded-full">
        <Image className="rounded-full" src={AndersonCarrio} alt="" />
      </div>

      <div className="flex flex-col">
        <h1 className="font-normal text-20 leading-7 text-purple-300 not-italic mt-5">
          Anderson Carrio
        </h1>
        <p className="font-normal text-16 leading-5 text-purple-300 not-italic">
          Gerente Executivo de Tecnologia - Dexco
        </p>
      </div>

      <p className="font-normal text-14 leading-5 text-gray-800 not-italic mt-5">
        {`"`}Trabalhar com a equipe da Lab2Dev tem sido uma experiência muito
        positiva. Eles demonstraram um profundo conhecimento e experiência no
        SAP BTP e CPI, e foram capazes de nos orientar de forma clara e precisa
        durante todo o nosso processo. Além disso, a equipe é extremamente
        prestativa, ágil e comprometida em entregar resultados de alta
        qualidade. Estou muito satisfeito com o trabalho realizado pela Lab2Dev
        e recomendo seus serviços aos que procuram soluções confiáveis e
        eficientes em tecnologia.{`"`}
      </p>
    </div>
  );
};
