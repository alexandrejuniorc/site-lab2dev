import Image from "next/image";
import React from "react";

import TrophieHackaton from "../../../public/bg-trophies.png";

export const CardTrophie = () => {
  return (
    <div className="bg-blue-200 w-60 rounded py-6 px-11 flex flex-col justify-center items-center">
      <div className="rounded-full w-36 h-36 border-8 border-gray-400">
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
  );
};
