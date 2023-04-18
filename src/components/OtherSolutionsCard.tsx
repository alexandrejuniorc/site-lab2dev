import Image from "next/image";
import React from "react";

import NextJsImage from "../../public/bg-icon-nextjs.png";

export const OtherSolutionsCard = () => {
  return (
    <div className="bg-purple-100 w-[25.1875rem] min-h-[10.75rem] px-7 pt-6 pb-9 rounded">
      <Image src={NextJsImage} alt="" />
      <h1 className="not-italic font-normal text-16 leading-7 text-white mt-5">
        Next.js
      </h1>
      <p className="not-italic font-normal text-10 leading-3  text-gray-100 mt-4">
        Next.js é uma estrutura da web de desenvolvimento front-end React criada
        por Vercel que permite funcionalidades como renderização do lado do
        servidor e sites estáticos.
      </p>
    </div>
  );
};
