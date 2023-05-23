import React from "react";

interface MissionCardProps {
  title: string;
  content: string;
}

export const MissionCard = ({ title, content }: MissionCardProps) => {
  return (
    <div className="bg-blue-200 rounded-md p-6">
      <h1 className="not-italic font-normal text-20 leading-7 text-white text-center">
        {title}
      </h1>

      <p className="not-italic font-normal text-16 leading-7 text-white text-left mt-5">
        {content}
      </p>
    </div>
  );
};
