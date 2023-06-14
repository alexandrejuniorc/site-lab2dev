import Image from "next/image";
import React from "react";

interface CardTeamProps {
  title: string;
  image: string | any;
  content: string;
  width: number;
  height: number;
}

export const CardTeam = ({
  title,
  content,
  image,
  width,
  height,
}: CardTeamProps) => {
  return (
    <div className="flex flex-col items-center shadow-[0_0_4px_rgba(134,133,133,0.5)] p-6">
      <div>
        <Image src={image} alt="" width={width} height={height} />
      </div>

      <h1 className="text-18 leading-7 text-purple-300 uppercase text-justify mt-7">
        {title}
      </h1>

      <p className="text-14 leading-5 text-gray-800 text-justify mt-5">
        {content}
      </p>
    </div>
  );
};
