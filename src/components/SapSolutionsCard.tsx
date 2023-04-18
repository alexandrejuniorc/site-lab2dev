import Image from "next/image";
import React from "react";

import HanaImage from "../../public/bg-icon-hana.png";

export const SapSolutionsCard = () => {
  return (
    <div className="bg-purple-100 flex flex-col w-[14.6875rem] h-[15.625rem] p-6 rounded">
      <Image src={HanaImage} alt="" />
      <h1 className="not-italic font-normal text-16 leading-5 text-white mt-5">
        SAP Hana
      </h1>
      <p className="not-italic font-normal text-10 leading-3 text-white mt-4">
        Com uma base sólida e rápida, a solução é escalável e conta com tudo que
        o HANA tem a oferecer. Trabalhamos com o que há de inovador na
        plataforma para prover a melhor solução.
      </p>
    </div>
  );
};
