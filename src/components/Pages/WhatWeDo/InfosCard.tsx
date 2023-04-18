import React from "react";

export const InfosCard = () => {
  return (
    <div className="bg-blue-200 rounded p-6 pb-10 w-[20rem] h-[10.125rem] flex flex-col items-center">
      <h1 className="not-italic font-normal text-16 leading-7 text-white">
        PRESENÇA
      </h1>
      <strong className="not-italic font-normal text-30 leading-4 text-white mt-5">
        +25
      </strong>
      <p className="not-italic font-normal text-14 leading-4 text-white mt-2">
        clientes atendidos
      </p>
    </div>
  );
};
