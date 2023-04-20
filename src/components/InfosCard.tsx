import React from "react";

interface InfosCardProps {
  title: string;
  info: string | number;
  content: string;
}

export const InfosCard = ({ content, info, title }: InfosCardProps) => {
  return (
    <div className="bg-blue-200 rounded p-6 pb-10 h-[10.125rem] flex justify-between flex-col items-center">
      <h1 className="not-italic font-normal text-16 leading-7 text-white">
        {title}
      </h1>
      <strong className="not-italic font-normal text-30 leading-4 text-white w-max">
        {info}
      </strong>
      <p className="not-italic font-normal text-14 leading-4 text-white">
        {content}
      </p>
    </div>
  );
};
