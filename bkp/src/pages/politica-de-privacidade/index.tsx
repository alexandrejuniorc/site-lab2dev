import Image from "next/image";
import React from "react";

import BlogImage from "../../../public/bg-blog.png";

const Policy = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-2">
          <div>
            <h1 className="not-italic font-normal text-30 leading-10 uppercase text-purple-300">
              política de privacidade
            </h1>
            <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-5">
              Na (nome empresarial simplificado), privacidade e segurança são
              prioridades e nos comprometemos com a transparência do tratamento
              de dados pessoais dos nossos usuários/clientes. Por isso, esta
              presente Política de Privacidade estabelece como é feita a coleta,
              uso e transferência de informações de clientes ou outras pessoas
              que acessam ou usam nosso site.{" "}
            </p>
          </div>

          <div className="flex justify-center">
            <Image src={BlogImage} alt="" />
          </div>
        </div>
      </section>

      <section>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800">
          Ao utilizar nossos serviços, você entende que coletaremos e usaremos
          suas informações pessoais nas formas descritas nesta Política, sob as
          normas da Constituição Federal de 1988 (art. 5º, LXXIX; e o art. 22º,
          XXX – incluídos pela EC 115/2022), das normas de Proteção de Dados
          (LGPD, Lei Federal 13.709/2018), das disposições consumeristas da Lei
          Federal 8078/1990 e as demais normas do ordenamento jurídico
          brasileiro aplicáveis. Dessa forma, a (nome empresarial), doravante
          denominada simplesmente como “(nome empresarial simplificado)”,
          inscrita no CNPJ/MF sob o nº (nº do CNPJ), no papel de Controladora de
          Dados, obriga-se ao disposto na presente Política de Privacidade. 1.
          Quais dados coletamos sobre você e para qual finalidade? Nosso site
          coleta e utiliza alguns dados pessoais seus, de forma a viabilizar a
          prestação de serviços e aprimorar a experiência de uso.
        </p>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          1.1. Dados pessoais fornecidos pelo titular
          <br /> Dado e finalidade
          <br />
          Dado e finalidade <br /> Dado e finalidade <br /> Dado e finalidade
          <br />
        </p>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          1.2. Dados pessoais coletados automaticamente <br /> Dado e finalidade
          <br />
          Dado e finalidade <br /> Dado e finalidade <br /> Dado e finalidade
          <br />
        </p>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          2. Como coletamos os seus dados?
          <br /> Nesse sentido, a coleta dos seus dados pessoais ocorre da
          seguinte forma:
          <br /> Como se coleta <br /> Como se coleta <br /> Como se coleta
          <br /> Como se coleta
        </p>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          2.1. Consentimento <br /> É a partir do seu consentimento que tratamos
          os seus dados pessoais. O consentimento é a manifestação livre,
          informada e inequívoca pela qual você autoriza a (nome empresarial
          simplificado) a tratar seus dados. Assim, em consonância com a Lei
          Geral de Proteção de Dados, seus dados só serão coletados, tratados e
          armazenados mediante prévio e expresso consentimento. O seu
          consentimento será obtido de forma específica para cada finalidade
          acima descrita, evidenciando o compromisso de transparência e boa-fé
          da (nome empresarial simplificado) para com seus usuários/clientes,
          seguindo as regulações legislativas pertinentes. Ao utilizar os
          serviços da (nome empresarial simplificado) e fornecer seus dados
          pessoais, você está ciente e consentindo com as disposições desta
          Política de Privacidade, além de conhecer seus direitos e como
          exercê-los. A qualquer tempo e sem nenhum custo, você poderá revogar
          seu consentimento. É importante destacar que a revogação do
          consentimento para o tratamento dos dados pode implicar a
          impossibilidade da performance adequada de alguma funcionalidade do
          site que dependa da operação. Tais consequências serão informadas
          previamente.
        </p>
      </section>
    </>
  );
};

export default Policy;
