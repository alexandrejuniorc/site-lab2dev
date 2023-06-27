"use client";
/* eslint-disable react/display-name */
import React from "react";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

type AccordionData = {
  title: string;
  content: string;
  id: number;
};
interface AccordionSapProps {
  data: AccordionData[];
}

export const AccordionSap = ({ data }: AccordionSapProps) => (
  <Accordion.Root
    className="shadow-[0_0_4px_rgba(134,133,133,0.5)] rounded-lg text-left "
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {data.map(({ title, content, id }: AccordionData) => {
      return (
        <AccordionItem value={`item-${id}`} key={id}>
          <div className="mt-2 mb-2">
            <AccordionTrigger>
              <p className="text-justify">{title}</p>
            </AccordionTrigger>
          </div>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      );
    })}
  </Accordion.Root>
);

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        "mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 shadow-md focus-within:shadow-md",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          "text-purple-300 bg-white group flex h-[45px] flex-1 cursor-default items-center justify-between px-5 text-16 leading-7 outline-none max-md:text-center",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        "text-gray-800 bg-gray-50 hover:bg-mauve3 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-16 leading-7 text-justify",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);
