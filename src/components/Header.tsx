import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../../public/logo.png";

export const Header = () => {
  return (
    <header className="flex pt-10 justify-center container">
      <div className="flex justify-between w-full">
        <div className="pr-36">
          <Link href="/">
            <Image src={Logo} alt="Logo Lab2dev" />
          </Link>
        </div>

        <div className="font-normal text-16/px leading-6 not-italic text-gray-gray-300 ">
          <Link className="pr-8" href="quem-somos">
            Quem somos
          </Link>
          <Link className="pr-8" href="o-que-fazemos">
            O que fazemos
          </Link>
          <Link className="pr-8" href="btp">
            BTP
          </Link>
          <Link className="pr-8" href="ams">
            AMS
          </Link>
          <Link className="pr-8" href="blog">
            Blog
          </Link>
          <Link className="last:pr-0" href="#">
            ENG/SPA
          </Link>
        </div>
      </div>
    </header>
  );
};
