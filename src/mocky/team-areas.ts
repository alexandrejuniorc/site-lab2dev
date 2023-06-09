import ArchitectImage from "../../public/icons/bg-icon-architect.svg";
import ConsultantImage from "../../public/icons/bg-icon-consultant.svg";
import DataAnalystImage from "../../public/icons/bg-icon-data-analyst.svg";
import DeveloperImage from "../../public/icons/bg-icon-developer.svg";

export const teamAreas = [
  {
    title: "Consultores",
    content:
      "Profissionais que têm conhecimento em várias soluções oferecidas pela plataforma SAP BTP, como integração, analytics, internet das coisas (IoT), inteligência artificial (IA), entre outras.",
    img: ConsultantImage,
  },
  {
    title: "Desenvolvedores",
    content:
      "Profissionais que trabalham com as tecnologias e ferramentas de desenvolvimento disponíveis na plataforma SAP BTP, incluindo desenvolvimento de aplicativos, construções de bancos de dados, microsserviços, entre outros.",
    img: DeveloperImage,
  },
  {
    title: "Arquitetos",
    content:
      "Profissionais que desenham e projetam soluções personalizadas usando diferentes serviços da plataforma SAP BTP para atender às necessidades dos clientes.",
    img: ArchitectImage,
  },
  {
    title: "Analista de dados",
    content:
      "Profissionais que possuem conhecimentos em soluções de análise de dados oferecidas pela plataforma SAP BTP, como SAP Data Intelligence (antigo Data Hub), SAP Data Warehouse Cloud (DWC) e SAP Analytics Cloud (SAC).",
    img: DataAnalystImage,
  },
];
