import Image from "next/image";
import React from "react";

import { Button } from "@/components/Button";
import { CardBlog } from "@/components/CardBlog";

import BlogImage from "../../../public/bg-blog.png";

export default function WhoWeAre() {
  return (
    <>
      <section>
        <div className="grid grid-cols-2">
          <div>
            <h1 className="not-italic font-normal text-30 leading-10 text-purple-300 uppercase">
              blog lab2dev
            </h1>
            <p className="not-italic font-normal text-16 leading-7 text-gray-800">
              Seja bem-vindo ao blog da Lab. Aprenda sobre as tecnologias que
              utilizamos e conheça mais sobre SAP e seus serviços
            </p>
          </div>

          <div className="flex justify-center">
            <Image src={BlogImage} alt="" />
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="grid grid-cols-4 gap-5">
          <Button color="purple" content="HANA" url={""} />
          <Button color="purple" content="React" url={""} />
          <Button color="purple" content="Fiori" url={""} />
          <Button color="purple" content="UI/UX" url={""} />
        </div>

        <div className="grid grid-cols-3 gap-7 mt-20">
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
      </section>
    </>
  );
}
