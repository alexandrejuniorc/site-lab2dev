import Image from "next/image";
import React from "react";

interface CardTeamProps {
  title: string;
  image: string | any;
  content: string;
}

export const CardTeam = ({ title, content, image }: CardTeamProps) => {
  return (
    <div className="flex flex-col items-center shadow-lg p-6">
      <div>
        <Image src={image} alt="" />
      </div>

      <h1 className="not-italic font-normal text-18 leading-7 text-purple-300 uppercase text-justify mt-7">
        {title}
      </h1>

      <p className="not-italic font-normal text-14 leading-5 text-gray-800 text-justify mt-5">
        {content}
      </p>
    </div>
  );
};
