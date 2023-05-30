/* eslint-disable react/display-name */
import React from "react";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

interface AccordionSapProps {
  title: {
    title1?: string;
    title2?: string;
    title3?: string;
    title4?: string;
    title5?: string;
    title6?: string;
    title7?: string;
  };
  content: {
    content1?: string;
    content2?: string;
    content3?: string;
    content4?: string;
    content5?: string;
    content6?: string;
    content7?: string;
  };
}

export const AccordionSap = ({ content, title }: AccordionSapProps) => (
  <Accordion.Root
    className="shadow-md rounded-lg text-left "
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {title.title1 && content.content1 && (
      <AccordionItem value="item-1">
        <div className="mt-2 mb-2">
          <AccordionTrigger>
            <p className="text-left max-md:text-center">{title.title1}</p>
          </AccordionTrigger>
        </div>
        <AccordionContent>{content.content1}</AccordionContent>
      </AccordionItem>
    )}

    {title.title2 && content.content2 && (
      <AccordionItem value="item-2">
        <div className="mt-2 mb-2">
          <AccordionTrigger>
            <p className="text-left max-md:text-center">{title.title2}</p>
          </AccordionTrigger>
        </div>
        <AccordionContent>{content.content2}</AccordionContent>
      </AccordionItem>
    )}

    {title.title3 && content.content3 && (
      <AccordionItem value="item-3">
        <div className="mt-2 mb-2">
          <AccordionTrigger>
            <p className="text-left max-md:text-center">{title.title3}</p>
          </AccordionTrigger>
        </div>
        <AccordionContent>{content.content3}</AccordionContent>
      </AccordionItem>
    )}

    {title.title4 && content.content4 && (
      <AccordionItem value="item-4">
        <div className="mt-2 mb-2">
          <AccordionTrigger>
            <p className="text-left max-md:text-center">{title.title4}</p>
          </AccordionTrigger>
        </div>
        <AccordionContent>{content.content4}</AccordionContent>
      </AccordionItem>
    )}

    {title.title5 && content.content5 && (
      <AccordionItem value="item-5">
        <div className="mt-2 mb-2">
          <AccordionTrigger>
            <p className="text-left max-md:text-center">{title.title5}</p>
          </AccordionTrigger>
        </div>
        <AccordionContent>{content.content5}</AccordionContent>
      </AccordionItem>
    )}

    {title.title6 && content.content6 && (
      <AccordionItem value="item-6">
        <div className="mt-2 mb-2 ">
          <AccordionTrigger>
            <p className="text-left max-md:text-center">{title.title6}</p>
          </AccordionTrigger>
        </div>
        <AccordionContent>{content.content6}</AccordionContent>
      </AccordionItem>
    )}

    {title.title7 && content.content7 && (
      <AccordionItem value="item-7">
        <div className="mt-2 mb-2">
          <AccordionTrigger>
            <p className="text-left max-md:text-center">{title.title7}</p>
          </AccordionTrigger>
        </div>
        <AccordionContent>{content.content7}</AccordionContent>
      </AccordionItem>
    )}
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
        "text-gray-800 bg-gray-50 hover:bg-mauve3 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-16 leading-7 max-md:text-center",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);
