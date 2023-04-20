import Image from "next/image";
import React from "react";

interface SapSolutionsCardProps {
  image: string | any;
  title: string;
  content: string;
}

export const SapSolutionsCard = ({
  title,
  content,
  image,
}: SapSolutionsCardProps) => {
  return (
    <div className="bg-purple-100 flex flex-col min-h-[15.625rem] p-6 rounded">
      <Image src={image} alt="" />
      <h1 className="not-italic font-normal text-16 leading-5 text-white mt-5">
        {title}
      </h1>
      <p className="not-italic font-normal text-10 leading-3 text-white mt-4">
        {content}
      </p>
    </div>
  );
};
