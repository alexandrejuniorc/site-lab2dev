import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import Logo from "../../public/logo.png";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="flex pt-10 justify-center container text">
      <div className="flex justify-between w-full">
        <div className="pr-36">
          <Link href="/">
            <Image src={Logo} alt="Logo Lab2dev" />
          </Link>
        </div>

        <div className="">
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
              router.pathname === "/btp"
                ? "font-normal text-16 leading-6 not-italic text-purple-300 pr-8 "
                : "font-normal text-16 leading-6 not-italic text-gray-600 pr-8 hover:text-purple-300"
            }
            href="btp"
          >
            BTP
          </Link>
          <Link
            className={
              router.pathname === "/ams"
                ? "font-normal text-16 leading-6 not-italic text-purple-300 pr-8 "
                : "font-normal text-16 leading-6 not-italic text-gray-600 pr-8 hover:text-purple-300"
            }
            href="ams"
          >
            AMS
          </Link>

          {/*
          NEW FEATURE COMING SOON
          
          <Link
            className={
              router.pathname === "/blog"
                ? "font-normal text-16 leading-6 not-italic text-purple-300 pr-8 "
                : "font-normal text-16 leading-6 not-italic text-gray-600 pr-8 hover:text-purple-300"
            }
            href="blog"
          >
            Blog
          </Link> */}

          <Link
            className="font-normal text-16 leading-6 not-italic text-gray-600 last:pr-0 hover:text-purple-300"
            href="#"
          >
            ENG/SPA
          </Link>
        </div>
      </div>
    </header>
  );
};
