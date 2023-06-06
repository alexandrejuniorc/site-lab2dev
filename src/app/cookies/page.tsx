import Image from "next/image";
import React from "react";

import CookiesImage from "../../../public/bg-cookies.png";

export default function Cookies() {
  return (
    <>
      <section>
        <div className="grid grid-cols-2 items-center">
          <div>
            <h1 className="not-italic font-normal text-30 leading-10 uppercase text-purple-300">
              Política de cookies
            </h1>
            <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-5">
              1. Introdução Nosso site, https://diegocastro.adv.br (doravante:
              “o site”) usa cookies e outras tecnologias relacionadas (por
              conveniência todas as tecnologias são referidas como “cookies”).
              Os cookies também são inseridos por terceiros que contratamos. No
              documento abaixo informamos sobre o uso de cookies em nosso site.
            </p>
          </div>

          <div className="flex justify-center">
            <Image src={CookiesImage} alt="" />
          </div>
        </div>
      </section>

      <section>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          2. O que são cookies?
          <br /> Um cookie é um arquivo pequeno e simples que é enviado junto
          com páginas deste site e armazenado pelo seu navegador no disco rígido
          do seu computador ou outro dispositivo. As informações armazenadas
          podem ser enviadas de volta aos nossos servidores ou aos servidores
          dos terceiros relevantes durante uma visita subsequente.
        </p>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          3. O que são scripts?
          <br /> Um script é uma parte de código de programa usado para fazer
          nosso site funcionar de forma adequada e interativa. Este código é
          executado em nosso servidor ou em seu dispositivo.
        </p>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          4. O que é um web beacon?
          <br /> Um web beacon (ou uma tag pixel) é um pequena e invisível texto
          ou imagem em um site que é usado para monitorar o tráfego em um site.
          Para fazer isso, vários dados sobre você são armazenados usando web
          beacons.
        </p>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          5. Cookies
          <br /> 5.1 Cookies
          <br /> técnicos ou funcionais Alguns cookies garantem que certas
          partes do site funcionem corretamente e que suas preferências de
          usuário permaneçam conhecidas. Ao inserir cookies funcionais,
          facilitamos a visita ao nosso site. Dessa forma, você não precisa
          inserir repetidamente as mesmas informações ao visitar nosso site e,
          por exemplo, os itens permanecem em seu carrinho de compras até que
          você tenha concluído a compra. Podemos inserir esses cookies baseado
          no princípio do legítimo interesse.
        </p>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          5.2 Cookies analíticos
          <br /> Usamos cookies analíticos para otimizar a experiência do site
          para nossos usuários. Com estes cookies analíticos, obtemos
          informações sobre o uso de nosso site. Podemos inserir esses cookies
          baseado no princípio do legítimo interesse.
        </p>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          5.3 Cookies de publicidade
          <br /> Neste site usamos cookies de publicidade, o que nos permite
          personalizar os anúncios para você, e nós (e terceiros) obtemos
          informações sobre os resultados da campanha. Isso acontece com base em
          um perfil que criamos com base no seu clique e na navegação dentro e
          fora de https://diegocastro.adv.br. Com esses cookies, você, como
          visitante do site, está vinculado a um ID único, de modo que não vê o
          mesmo anúncio mais de uma vez, por exemplo.
        </p>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          5.4 Cookies de marketing/rastreamento
          <br /> Cookies de marketing/rastreamento são cookies ou qualquer outra
          forma de armazenamento local, usados para criar perfis de usuário para
          exibir publicidade ou para rastrear o usuário neste site ou em vários
          sites para fins semelhantes de marketing. Podemos inserir esses
          cookies baseado no princípio do legítimo interesse.
        </p>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          5.5 Botões de mídia social
          <br /> Em nosso site, incluímos botões para Facebook, Twitter e
          Instagram promover(em) páginas da web (por exemplo, “curtir”, “pinar”)
          ou compartilhar (por exemplo, “tuitar”) em redes sociais como
          Facebook, Twitter e Instagram. Esses botões funcionam usando pedaços
          de código provenientes deles mesmos (Facebook, Twitter e Instagram).
          Este código insere cookies. Esses botões de mídia social também podem
          armazenar e processar certas informações para que um anúncio
          personalizado possa ser mostrado a você. Leia a declaração de
          privacidade dessas redes sociais (que podem mudar regularmente) para
          saber o que eles fazem com seus dados (pessoais) que eles processam
          usando esses cookies. Os dados recuperados são anonimizados tanto
          quanto possível. Facebook, Twitter e Instagram estão localizados nos
          Estados Unidos.
        </p>
      </section>
    </>
  );
}
