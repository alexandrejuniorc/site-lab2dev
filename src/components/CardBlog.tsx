import React from "react";

export const CardBlog = () => {
  return (
    <div className="w-80 h-[30.125rem] max-h-[30.125rem] rounded-md shadow-md p-[1.625rem] flex flex-col justify-evenly">
      <div className="w-[16.875rem] h-[6.25rem] bg-gray-200">
        {/* <Image src={} alt="" /> */}
      </div>

      <div className="mt-7">
        <h1 className="font-normal text-20 leading-7 text-purple-300 not-italic">
          Por que HANA é o banco de dados mais rápido?
        </h1>
        <p className="font-normal text-12 leading-4 text-gray-800 not-italic mt-5">
          Lançado em 2011 pela SAP, o SAP HANA veio para revolucionar a forma de
          como os dados empresariais são gerenciados, desde então todos os
          produtos lançados pela SAP [...]
        </p>
      </div>

      <div className="flex justify-between items-center mt-14">
        <div className="flex gap-3 items-center ">
          <div className="rounded-[50%] w-max border-2 border-blue-blue-50">
            <div className="bg-blue-100 w-6 h-6 flex items-center justify-center rounded-[50%]"></div>
          </div>

          <p className="font-normal text-12 leading-4 text-gray-800 not-italic">
            Bruno Vianna
          </p>
        </div>

        <p className="font-normal text-12 leading-4 text-gray-800 not-italic text-right">
          Leitura: 3 min
        </p>
      </div>
    </div>
  );
};
