import React from "react";

interface MissionCardProps {
  title: string;
  content: string;
}

export const CardSupport = ({ title, content }: MissionCardProps) => {
  return (
    <div className="bg-blue-200 rounded-md p-6  text-center items-center max-sm:w-full">
      <h1 className="text-16 font-normal leading-7 not-italic text-white uppercase">
        {title}
      </h1>
      <p className="text-14 font-normal leading-4 not-italic mt-5 text-white text-left">
        {content}
      </p>
    </div>
  );
};
