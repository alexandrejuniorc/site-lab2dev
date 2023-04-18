import React from "react";

interface MissionCardProps {
  title: string;
  content: string;
}

export const MissionCard = ({ title, content }: MissionCardProps) => {
  return (
    <div className="bg-blue-200 rounded-md p-6 w-[20rem] h-[10.1800rem] text-center items-center">
      <h1 className="text-16 font-normal leading-7 not-italic text-white">
        {title}
      </h1>
      <p className="text-14 font-normal leading-4 not-itali mt-5 text-white text-left">
        {content}
      </p>
    </div>
  );
};
