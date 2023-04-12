import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";

import SapPartner from "../../assets/sap-partner.svg";
export const Footer = () => {
  return (
    <footer className="bg-purple-purple-200">
      <div>
        <p>Se identifica com nossos ideais?</p>
        <button>Trabalhe conosco</button>
        <p>
          Av. Hilário Pereira de Souza, 406, 8° andar, Torre 01, Osasco - SP
        </p>
      </div>

      <div>
        <p>SIGA NOSSAS REDES</p>
        <div>
          <AiOutlineLinkedin />
          <AiOutlineInstagram />
          <AiOutlineFacebook />
        </div>
        <p>Alguma dúvida? Fale com a gente!</p>
        <p>contato@lab2dev.com</p>
      </div>

      <div>
        <div>
          <Link href="">Política de privacidade</Link>
          <Link href="">Termos de uso</Link>
          <Link href="">Cookies</Link>
        </div>

        <div>
          <Image src={SapPartner} alt="Sap Partner" />
        </div>
      </div>
    </footer>
  );
};
