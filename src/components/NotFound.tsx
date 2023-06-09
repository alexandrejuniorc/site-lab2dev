import Image from "next/image";
import React from "react";

import NotFoundImage from "../../public/not-found.png";

export const PageNotFound = () => {
  return (
    <div className="grid grid-cols-1 items-center text-center md:grid-cols-2">
      <div>
        <Image src={NotFoundImage} alt="Página não encontrada" />
      </div>

      <div>
        <strong className="text-purple-300 uppercase">
          página não encontrada!
        </strong>
        <p className="text-gray-800 mt-8 flex w-full">
          O link que você tentou acessar está incorreto ou a página foi movida.
        </p>
      </div>
    </div>
  );
};
