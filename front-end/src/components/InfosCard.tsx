import React from "react";

interface InfosCardProps {
  title: string;
  info: string | number;
  content: string;
}

export const InfosCard = ({ content, info, title }: InfosCardProps) => {
  return (
    <div className="bg-blue-200 rounded  flex-col p-6">
      <h1 className="not-italic flex justify-center text-justify font-normal text-20 leading-7 text-white ">
        {title}
      </h1>

      <p className="not-italic flex justify-center text-justify font-normal  text-30 leading-5 text-white mt-5">
        {info}
      </p>

      <p className="not-italic flex justify-center text-justify font-normal  text-16 leading-4 text-white mt-1">
        {content}
      </p>
    </div>
  );
};
