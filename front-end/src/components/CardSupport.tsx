import React from "react";

interface MissionCardProps {
  title: string;
  content: string;
}

export const CardSupport = ({ title, content }: MissionCardProps) => {
  return (
    <div className="bg-blue-200 rounded-md p-6">
      <h1 className="not-italic font-normal text-16 leading-7 uppercase text-white text-center">
        {title}
      </h1>

      <p className="not-italic font-normal text-14 leading-5 text-white text-center flex grow-0 mt-5">
        {content}
      </p>
    </div>
  );
};
