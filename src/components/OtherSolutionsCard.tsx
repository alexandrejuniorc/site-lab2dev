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
    <div className="bg-purple-100 w-[25.1875rem] min-h-[10.75rem] px-7 pt-6 pb-9 rounded max-lg:w-auto">
      <Image src={image} alt="" />
      <h1 className="not-italic font-normal text-16 leading-7 text-white mt-5">
        {title}
      </h1>
      <p className="not-italic font-normal text-10 leading-3  text-gray-100 mt-4">
        {content}
      </p>
    </div>
  );
};
