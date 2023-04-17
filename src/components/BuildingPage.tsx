import Image from "next/image";
import React from "react";

import BuildingPageImage from "../../assets/building-page.png";

export const BuildingPage = () => {
  return (
    <div className="grid grid-cols-2 items-center text-center min-h-69/vh">
      <div>
        <Image src={BuildingPageImage} alt="Página em construção" />
      </div>

      <div>
        <strong className="text-purple-purple-200 uppercase">
          página em construção!
        </strong>
        <p className="text-gray-gray-400 mt-8 whitespace-nowrap flex w-full">
          A página que você tentou acessar ainda está sendo desenvolvida,
          <br />
          esperamos você por aqui mais tarde!
        </p>
      </div>
    </div>
  );
};
