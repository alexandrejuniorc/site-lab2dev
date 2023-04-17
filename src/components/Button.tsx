import React from "react";

interface ButtonProps {
  content: string;
  color: "purple" | "white";
}

export const Button = ({ content, color }: ButtonProps) => {
  return (
    <button
      className={
        color === "purple"
          ? "bg-purple-100 text-white py-3 px-8 rounded-md not-italic font-normal text-18 leading-6 hover:bg-gray-500 hover:text-purple-300 transition-colors"
          : "bg-white text-purple-300 py-3 px-8 rounded-md not-italic font-normal text-18 leading-6 hover:bg-gray-500 hover:text-purple-300 transition-colors"
      }
    >
      {content}
    </button>
  );
};
