import React from "react";

interface MissionCardProps {
  title: string;
  content: string;
}

export const CardSupport = ({ title, content }: MissionCardProps) => {
  return (
    /* className="bg-blue-200 rounded-md p-6  text-center items-center max-sm:w-full" */
    <div className="bg-blue-200 rounded-md p-6">
      <h1 className="not-italic font-normal text-16 leading-7 uppercase text-white text-center">
        {title}
      </h1>
      {/* className="text-14 font-normal leading-4 not-italic mt-5 text-white text-left" */}
      <p className="not-italic font-normal text-16 leading-6 text-white text-left mt-5">
        {content}
      </p>
    </div>
  );
};
