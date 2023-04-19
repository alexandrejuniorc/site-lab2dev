import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";

import BackgroundFooter from "../../public/bg-footer.png";
import SapPartner from "../../public/bg-partner-sap-footer.png";

export const Footer = () => {
  return (
    <footer className="bg-purple-300 text">
      <div className="container">
        <div className="grid grid-cols-3 gap-x-7 m-auto p-0 pt-20 pb-10">
          <div>
            <p className="font-normal text-16 leading-7 not-italic">
              Se identifica com nossos ideais?
            </p>
            <button className="font-normal text-18 leading-6 not-italic bg-white text-purple-300 py-3 px-14 rounded-md mt-3 hover:bg-gray-400 transition-colors">
              Trabalhe conosco
            </button>
            <p className="font-normal text-14 leading-7 not-italic mt-3">
              Av. Hilário Pereira de Souza, 406, 8° andar,
              <br />
              Torre 01, Osasco - SP
            </p>
          </div>

          <div>
            <p className="font-normal text-16 leading-7 not-italic uppercase text-white">
              SIGA NOSSAS REDES
            </p>

            <div className="flex mt-3">
              <Link className="hover:text-gray-400" href="">
                <AiOutlineLinkedin size={40} />
              </Link>

              <Link className="hover:text-gray-400" href="">
                <AiOutlineInstagram size={40} />
              </Link>

              <Link className="hover:text-gray-400" href="">
                <AiOutlineFacebook size={40} />
              </Link>
            </div>

            <div className="flex flex-col">
              <p className="font-normal text-14 leading-7 not-italic mt-3 text-white">
                Alguma dúvida? Fale com a gente!
              </p>
              <Link
                href="mailto:teste@teste.com"
                className="font-normal text-14 leading-7 not-italic hover:underline underline-offset-4"
              >
                contato@lab2dev.com
              </Link>
              <Link
                href="tel:+551136814552"
                className="font-normal text-14 leading-7 not-italic hover:underline underline-offset-4"
              >
                (11) 3681-4552
              </Link>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2 pb-2 font-normal text-16 leading-7 not-italic text-white">
              <Link
                className="w-max hover:underline underline-offset-4"
                href="politica-de-privacidade"
              >
                Política de privacidade
              </Link>

              <Link
                className="w-max hover:underline underline-offset-4"
                href="termos-de-uso"
              >
                Termos de uso
              </Link>

              <Link
                className="w-max hover:underline underline-offset-4"
                href="cookies"
              >
                Cookies
              </Link>
            </div>

            <div>
              <Image src={SapPartner} alt="Sap Partner" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center py-5">
            <p className="font-normal text-10/px leading-4 not-italic text-white">
              © 2023 Lab2Dev. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Image className="w-full" src={BackgroundFooter} alt="" />
      </div>
    </footer>
  );
};
