import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import Logo from "../../public/logo.png";
import Menubar from "./Menubar";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="flex pt-10 justify-center container text">
      <div className="flex justify-between w-full max-md:justify-end md:justify-center lg:justify-between">
        <div className="pr-36 max-md:hidden max-lg:pr-3">
          <Link href="/">
            <Image src={Logo} alt="Logo Lab2dev" />
          </Link>
        </div>

        <div className="mb-24 flex items-center whitespace-nowrap max-md:hidden">
          <Link
            className={
              router.pathname === "/"
                ? "font-normal text-16 leading-6 not-italic text-purple-300 pr-8 "
                : "font-normal text-16 leading-6 not-italic text-gray-600 pr-8 hover:text-purple-300"
            }
            href="/"
          >
            {/*  */}
            Home
          </Link>
          <Link
            className={
              router.pathname === "/quem-somos"
                ? "font-normal text-16 leading-6 not-italic text-purple-300 pr-8 "
                : "font-normal text-16 leading-6 not-italic text-gray-600 pr-8 hover:text-purple-300"
            }
            href="quem-somos"
          >
            Quem somos
          </Link>
          <Link
            className={
              router.pathname === "/o-que-fazemos"
                ? "font-normal text-16 leading-6 not-italic text-purple-300 pr-8 "
                : "font-normal text-16 leading-6 not-italic text-gray-600 pr-8 hover:text-purple-300"
            }
            href="o-que-fazemos"
          >
            O que fazemos
          </Link>
          <Link
            className={
              router.pathname === "/sap-btp"
                ? "font-normal text-16 leading-6 not-italic text-purple-300 pr-8 "
                : "font-normal text-16 leading-6 not-italic text-gray-600 pr-8 hover:text-purple-300"
            }
            href="sap-btp"
          >
            BTP
          </Link>
          <Link
            className={
              router.pathname === "/sap-ams"
                ? "font-normal text-16 leading-6 not-italic text-purple-300 pr-8 "
                : "font-normal text-16 leading-6 not-italic text-gray-600 pr-8 hover:text-purple-300"
            }
            href="sap-ams"
          >
            AMS
          </Link>
        </div>

        <div className="hidden max-md:flex rounded-md border-2 border-[transparent] transition-colors hover:border-purple-300 mb-3">
          <Menubar />
        </div>
      </div>
    </header>
  );
};
