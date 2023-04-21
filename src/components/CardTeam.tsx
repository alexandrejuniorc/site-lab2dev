import Image from "next/image";
import React from "react";

interface CardTeamProps {
  title: string;
  image: string | any;
  content: string;
}

export const CardTeam = ({ title, content, image }: CardTeamProps) => {
  return (
    /* w-[14.6875rem] h-[28.25rem]  */
    <div className="rounded shadow-md px-[1.5625rem] pt-[1.5625rem] pb-[1.5625rem] h-full">
      {/* <div className="w-full h-[11.25rem] bg-gray-200"></div> */}

      <div className="flex justify-center">
        <Image src={image} alt="" />
      </div>

      <h1 className="not-italic font-normal text-20 text-center leading-7 text-purple-300 uppercase pt-7 w-full max-sm:leading-4 max-xl:text-16 max-lg:text-12">
        {title}
      </h1>

      <p className="not-italic font-normal text-12 leading-4 text-gray-800 pt-5">
        {content}
      </p>
    </div>
  );
};
