import Image from "next/image";
import React from "react";

import TermsImage from "../../../public/bg-terms.png";

export default function TermsOfUse() {
  return (
    <>
      <section>
        <div className="grid grid-cols-2">
          <div>
            <h1 className="not-italic font-normal text-30 leading-10 uppercase text-purple-300">
              termos de uso
            </h1>
            <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-5">
              Seja bem-vindo ao nosso site. Leia com atenção todos os termos
              abaixo. Este documento, e todo o conteúdo do site é oferecido por
              (ADICIONAR DADOS DA EMPRESA OU NOME FANTASIA), neste termo
              representado apenas por “EMPRESA”, que regulamenta todos os
              direitos e obrigações com todos que acessam o site, denominado
              neste termo como “VISITANTE”, reguardado todos os direitos
              previstos na legislação, trazem as cláusulas abaixo como requisito
              para acesso e visita do mesmo, situado no endereço (ADICIONAR
              ENDEREÇO DO SITE).
            </p>
          </div>

          <div className="flex justify-center">
            <Image src={TermsImage} alt="" />
          </div>
        </div>
      </section>

      <section className="mt-2">
        <p className="not-italic font-normal text-16 leading-7 text-gray-800">
          A permanência no website implica-se automaticamente na leitura e
          aceitação tácita do presente termos de uso a seguir. Este termo foi
          atualizado pela última vez em 14 de setembro de 2021.
        </p>

        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          1. DA FUNÇÃO DO SITE <br /> Este site foi criado e desenvolvido com a
          função de trazer conteúdo informativo de alta qualidade, a venda de
          produtos físicos, digitais e a divulgação de prestação de serviço. A
          EMPRESA busca através da criação de conteúdo de alta qualidade,
          desenvolvido por profissionais da área, trazer o conhecimento ao
          alcance de todos, assim como a divulgação dos próprios serviços. Nesta
          plataforma, poderá ser realizado tanto a divulgação de material
          original de alta qualidade, assim como a divulgação de produtos de
          e-commerce. Todo o conteúdo presente neste site foi desenvolvido
          buscando fontes e materiais de confiabilidade, assim como são baseados
          em estudos sérios e respeitados, através de pesquisa de alta nível.
          Todo o conteúdo é atualizado periodicamente, porém, pode conter em
          algum artigo, vídeo ou imagem, alguma informação que não reflita a
          verdade atual, não podendo a EMPRESA ser responsabilizada de nenhuma
          forma ou meio por qualquer conteúdo que não esteja devidamente
          atualizado. É de responsabilidade do usuário de usar todas as
          informações presentes no site com senso crítico, utilizando apenas
          como fonte de informação, e sempre buscando especialistas da área para
          a solução concreta do seu conflito.
        </p>

        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          2. DO ACEITE DOS TERMOS <br /> Este documento, chamado “Termos de
          Uso”, aplicáveis a todos os visitantes do site, foi desenvolvido por
          Diego Castro Advogado – OAB/PI 15.613, modificado com permissão para
          este site. Este termo especifica e exige que todo usuário ao acessar o
          site da EMPRESA, leia e compreenda todas as cláusulas do mesmo, visto
          que ele estabelece entre a EMPRESA e o VISITANTE direitos e obrigações
          entre ambas as partes, aceitos expressamente pelo VISITANTE a
          permanecer navegando no site da EMPRESA. Ao continuar acessando o
          site, o VISITANTE expressa que aceita e entende todas as cláusulas,
          assim como concorda integralmente com cada uma delas, sendo este
          aceite imprescindível para a permanência na mesma. Caso o VISITANTE
          discorde de alguma cláusula ou termo deste contrato, o mesmo deve
          imediatamente interromper sua navegação de todas as formas e meios.
          Este termo pode e irá ser atualizado periodicamente pela EMPRESA, que
          se resguarda no direito de alteração, sem qualquer tipo de aviso
          prévio e comunicação. É importante que o VISITANTE confira sempre se
          houve movimentação e qual foi a última atualização do mesmo no começo
          da página.
        </p>

        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          3. DO GLOSSÁRIO Este termo pode conter algumas palavras específicas
          que podem não se de conhecimento geral. Entre elas: VISITANTE: Todo e
          qualquer usuário do site, de qualquer forma e meio, que acesse através
          de computador, notebook, tablet, celular ou quaisquer outros meios, o
          website ou plataforma da empresa. NAVEGAÇÃO: O ato de visitar páginas
          e conteúdo do website ou plataforma da empresa. COOKIES: Pequenos
          arquivos de textos gerados automaticamente pelo site e transmitido
          para o navegador do visitante, que servem para melhorar a usabilidade
          do visitante.
        </p>

        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          LOGIN: Dados de acesso do visitante ao realizar o cadastro junto a
          EMPRESA, dividido entre usuário e senha, que dá acesso a funções
          restritas do site.
        </p>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          HIPERLINKS: São links clicáveis que podem aparecer pelo site ou no
          conteúdo, que levam para outra página da EMPRESA ou site externo.
        </p>
        <p className="not-italic font-normal text-16 leading-7 text-gray-800 mt-2">
          OFFLINE: Quando o site ou plataforma se encontra indisponível, não
          podendo ser acessado externamente por nenhum usuário. Em caso de
          dúvidas sobre qualquer palavra utilizada neste termo, o VISITANTE
          deverá entrar em contato com a EMPRESA através dos canais de
          comunicação encontradas no site.
        </p>
      </section>
    </>
  );
}
