/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

interface SapSolutionsCardProps {
  image?: string | any;
  title: string;
  content: string;
}

export const SapSolutionsCard = ({
  title,
  content,
  image,
}: SapSolutionsCardProps) => {
  return (
    <div className="bg-purple-100 flex flex-col rounded-md p-6">
      {image && <Image src={image} alt="" />}

      <h1 className="not-italic font-normal text-20 leading-7 text-white uppercase">
        {title}
      </h1>

      <p className="not-italic font-normal text-14 leading-7 text-gray-100 mt-4">
        {content}
      </p>
    </div>
  );
};
