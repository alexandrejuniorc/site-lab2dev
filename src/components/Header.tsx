import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../../public/logo.png";

export const Header = () => {
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
            className="font-normal text-16 leading-6 not-italic text-gray-600 pr-8"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-normal text-16 leading-6 not-italic text-gray-600 pr-8"
            href="quem-somos"
          >
            Quem somos
          </Link>
          <Link
            className="font-normal text-16 leading-6 not-italic text-gray-600 pr-8"
            href="o-que-fazemos"
          >
            O que fazemos
          </Link>
          <Link
            className="font-normal text-16 leading-6 not-italic text-gray-600 pr-8"
            href="btp"
          >
            BTP
          </Link>
          <Link
            className="font-normal text-16 leading-6 not-italic text-gray-600 pr-8"
            href="ams"
          >
            AMS
          </Link>
          <Link
            className="font-normal text-16 leading-6 not-italic text-gray-600 pr-8"
            href="blog"
          >
            Blog
          </Link>
          <Link
            className="font-normal text-16 leading-6 not-italic text-gray-600 last:pr-0"
            href="#"
          >
            ENG/SPA
          </Link>
        </div>
      </div>
    </header>
  );
};
