"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import Logo from "../../public/logo.png";
import Menubar from "./Menubar";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="pt-10 container">
      <div className="flex justify-between">
        <div className="pr-36  max-lg:pr-3">
          <Link href="/" prefetch={true}>
            <Image src={Logo} alt="Logo Lab2dev" />
          </Link>
        </div>

        <div className=" flex items-center max-md:hidden">
          <Link
            prefetch={true}
            className={
              pathname === "/"
                ? "font-normal text-16 leading-6 not-italic text-purple-300 pr-8 "
                : "font-normal text-16 leading-6 not-italic text-gray-600 pr-8 hover:text-purple-300"
            }
            href="/"
          >
            {/*  */}
            Home
          </Link>
          <Link
            prefetch={true}
            className={
              pathname === "/quem-somos"
                ? "font-normal text-16 leading-6 not-italic text-purple-300 pr-8 "
                : "font-normal text-16 leading-6 not-italic text-gray-600 pr-8 hover:text-purple-300"
            }
            href="quem-somos"
          >
            Quem somos
          </Link>
          <Link
            prefetch={true}
            className={
              pathname === "/o-que-fazemos"
                ? "font-normal text-16 leading-6 not-italic text-purple-300 pr-8 "
                : "font-normal text-16 leading-6 not-italic text-gray-600 pr-8 hover:text-purple-300"
            }
            href="o-que-fazemos"
          >
            O que fazemos
          </Link>
          <Link
            prefetch={true}
            className={
              pathname === "/sap-btp"
                ? "font-normal text-16 leading-6 not-italic text-purple-300 pr-8 "
                : "font-normal text-16 leading-6 not-italic text-gray-600 pr-8 hover:text-purple-300"
            }
            href="sap-btp"
          >
            BTP
          </Link>
          <Link
            prefetch={true}
            className={
              pathname === "/sap-ams"
                ? "font-normal text-16 leading-6 not-italic text-purple-300"
                : "font-normal text-16 leading-6 not-italic text-gray-600 hover:text-purple-300"
            }
            href="sap-ams"
          >
            AMS
          </Link>
        </div>

        <div className="flex md:hidden rounded-md border-2 border-[transparent] transition-colors hover:border-purple-300 mb-3">
          <Menubar />
        </div>
      </div>
    </header>
  );
};
