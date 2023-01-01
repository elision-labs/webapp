import Footer from "components/Footer";
import Header from "components/Header";
import Head from "next/head";
import { ReactNode } from "react";

interface BasicLayoutProps {
  children: ReactNode;
}
export default function BasicLayout({ children }: BasicLayoutProps) {
  return (
    <>
      <Header />
      <Head>
        <title>Elision Labs</title>
        <meta property="og:title" content="Elision Labs" key="title" />
        <meta
          name="description"
          property="og:description"
          content="Building the Future Web"
        />
        <link rel="icon" href="png/logo-white.png" />
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
}
