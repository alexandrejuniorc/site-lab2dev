import Image from "next/image";
import React from "react";

import NotFoundImage from "../../assets/not-found.png";

export const PageNotFound = () => {
  return (
    <div className="grid grid-cols-2 items-center text-center">
      <div>
        <Image src={NotFoundImage} alt="Página não encontrada" />
      </div>

      <div>
        <strong className="text-purple-purple-200 uppercase">
          página não encontrada!
        </strong>
        <p className="text-gray-gray-400 mt-8 whitespace-nowrap flex w-full">
          O link que você tentou acessar está incorreto ou a página foi movida.
        </p>
      </div>
    </div>
  );
};
