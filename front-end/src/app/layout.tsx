import "./globals.css";
import { Varela_Round } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export const metadata = {
  title: "Lab2dev",
  description: `A Lab2dev é a primeira startup brasileira focada em inovação por
  meio do SAP BTP (Business Technology Platform). Através de
  soluções inteligentes, apoiamos a sua empresa na jornada da
  transformação digital.`,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={varelaRound.className}>
        <Header />
        <main className="py-24 container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
