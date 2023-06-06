import Image from "next/image";
import React from "react";

import CardTrophie1 from "../../public/card-trophie-1.svg";
import CardTrophie2 from "../../public/card-trophie-2.svg";
interface CardTrophieProps {
  image?: string | any;
  title?: string;
  content?: string;
}

export const CardTrophie = ({ content, image, title }: CardTrophieProps) => {
  return (
    <>
      {/* <div className="bg-blue-200 w-60 rounded py-6 px-11 flex flex-col justify-center items-center">
        <div className="rounded-full w-36 h-36 border-8 border-gray-400">
          <div className="bg-white h-full flex items-center justify-center rounded-full">
            <Image src={image} alt="" />
          </div>
        </div>

        <div className="mt-7">
          <strong className="not-italic font-normal text-16 leading-7 text-center text-white flex justify-center items-center">
            {title}
          </strong>
          <p className="not-italic font-normal text-10 leading-3 text-center text-gray-100 flex justify-center w-[9.3125rem] items-center">
            {content}
          </p>
        </div>
      </div> */}

      <div className="flex flex-col flex-1">
        <div className="flex justify-end">
          <Image src={CardTrophie1} alt="" />
        </div>

        <div className="flex justify-start">
          <Image src={CardTrophie2} alt="" />
        </div>
      </div>
    </>
  );
};
