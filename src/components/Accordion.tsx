/* eslint-disable react/display-name */
import React from "react";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

export const AccordionSap = () => (
  <Accordion.Root
    className="shadow-md rounded-lg"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>
        Agilidade no desenvolvimento de aplicativos
      </AccordionTrigger>
      <AccordionContent>
        Com o SAP BTP, os desenvolvedores podem criar aplicativos personalizados
        rapidamente usando uma variedade de linguagens de programação e
        ferramentas disponíveis na plataforma. Além da facilidade da integração
        com sistemas SAP, como o S/4HANA, ECC, Ariba, SFSF e outros,
        diferentemente de outras plataformas.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Integração de sistemas</AccordionTrigger>
      <AccordionContent>
        Yes. {"It's"} unstyled by default, giving you freedom over the look and
        feel.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Análise de dados avançada</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger>Segurança e conformidade</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-5">
      <AccordionTrigger>Escalabilidade</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-6">
      <AccordionTrigger>Colaboração</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-7">
      <AccordionTrigger>Acesso global</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>
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
          "text-purple-300 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-gray-50 px-5 text-16 leading-7 outline-none",
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
        "text-gray-800 bg-gray-50 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-16 leading-7",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);
