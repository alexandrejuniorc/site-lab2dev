import { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="py-24 container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
