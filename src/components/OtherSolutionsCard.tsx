/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

interface OtherSolutionsCardProps {
  title: string;
  image: string | any;
  content: string;
}

export const OtherSolutionsCard = ({
  content,
  title,
  image,
}: OtherSolutionsCardProps) => {
  return (
    <div className="bg-purple-100 pt-6 pb-7 px-7 rounded-md">
      <div>
        <Image className="w-max h-14" src={image} alt="" />
      </div>

      <h1 className="not-italic font-normal text-20 leading-8 text-white mt-4 uppercase">
        {title}
      </h1>

      <p className="not-italic font-normal text-14 leading-5 text-gray-100 mt-3">
        {content}
      </p>
    </div>
  );
};
