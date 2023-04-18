import React from "react";

export const CardTeam = () => {
  return (
    <div className="w-[14.6875rem] h-[28.25rem] rounded shadow-md px-[1.5625rem] pt-[1.5625rem] pb-[1.5625rem]">
      <div className="w-[11.5625rem] h-[11.25rem] bg-gray-200"></div>
      <h1 className="not-italic font-normal text-20 leading-7 text-purple-300 uppercase mt-7">
        Consultores
      </h1>
      <p className="not-italic font-normal text-12 leading-4 text-gray-800 mt-5">
        Profissionais que têm conhecimento em várias soluções oferecidas pela
        plataforma SAP BTP, como integração, analytics, internet das coisas
        (IoT), inteligência artificial (IA), entre outras.
      </p>
    </div>
  );
};
