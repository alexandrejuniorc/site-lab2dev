import Link from "next/link";
import React from "react";

interface ButtonProps {
  content: string;
  color: "purple" | "white";
  url: string;
}

export const Button = ({ content, color, url }: ButtonProps) => {
  return (
    <Link href={url}>
      <button
        className={
          color === "purple"
            ? "bg-purple-100 text-white border-2 border-purple-100 py-3 px-8 rounded-md not-italic font-normal text-18 leading-6 hover:bg-opacity-5  hover:border-purple-100 hover:text-purple-100 transition-colors"
            : "bg-white text-purple-300 border-2 border-white py-3 px-8 rounded-md not-italic font-normal text-18 leading-6 hover:bg-purple-300 hover:border-white hover:text-white transition-colors"
        }
      >
        {content}
      </button>
    </Link>
  );
};
