import { useState } from "react";
import Head from "next/head";
import Footer from "./Footer/Index";
import Navbar from "./NavBar";
import Sidebar from "./SideBar";
export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="apple-mobile-web-app-title" content="WebL Innovations" />
        <meta name="application-name" content="WebL Innovations" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <main>{children}</main>
      <Footer />
    </>
  );
}
