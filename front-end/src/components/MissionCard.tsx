import React from "react";

interface MissionCardProps {
  title: string;
  content: string;
}

export const MissionCard = ({ title, content }: MissionCardProps) => {
  return (
    <div className="bg-blue-200 rounded-md p-6">
      <h1 className="not-italic font-normal text-center text-20 leading-7 text-white ">
        {title}
      </h1>

      <div className=" text-justify">
        <p className="not-italic font-normal text-center text-14 leading-7 text-white mt-5">
          {content}
        </p>
      </div>
    </div>
  );
};
