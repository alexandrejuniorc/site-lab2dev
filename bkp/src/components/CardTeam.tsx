import Image from "next/image";
import React from "react";

interface CardTeamProps {
  title: string;
  image: string | any;
  content: string;
}

export const CardTeam = ({ title, content, image }: CardTeamProps) => {
  return (
    /* className="rounded shadow-md px-[1.5625rem] pt-[1.5625rem] pb-[1.5625rem] h-full" */
    <div className="flex flex-col items-center text-center shadow-lg p-6">
      {/* className="flex justify-center" */}
      <div>
        <Image src={image} alt="" />
      </div>

      {/* className="not-italic font-normal text-20 text-center leading-7 text-purple-300 uppercase pt-7 w-full max-sm:leading-4" */}
      <h1 className="not-italic font-normal text-20 leading-7 text-purple-300 uppercase mt-7">
        {title}
      </h1>

      {/* className="not-italic font-normal text-14 leading-4 text-gray-800 pt-5" */}
      <p className="not-italic font-normal text-16 leading-5 text-gray-800 mt-5">
        {content}
      </p>
    </div>
  );
};
