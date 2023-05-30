import React from "react";

interface InfosCardProps {
  title: string;
  info: string | number;
  content: string;
}

export const InfosCard = ({ content, info, title }: InfosCardProps) => {
  return (
    <div className="bg-blue-200 rounded p-6">
      <h1 className="not-italic font-normal text-20 leading-7 text-white text-center">
        {title}
      </h1>

      <div className="flex flex-col text-center mt-5">
        <strong className="not-italic font-normal text-30 leading-6 text-white">
          {info}
        </strong>

        <p className="not-italic font-normal text-16 leading-4 text-white pt-2">
          {content}
        </p>
      </div>
    </div>
  );
};
