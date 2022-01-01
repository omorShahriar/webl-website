import "../styles/globals.css";
import dynamic from "next/dynamic";
import { BaseCSS } from "styled-bootstrap-grid";
import Layout from "../components/layout";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Head from "next/head";

const DynamicChatHead = dynamic(
  () => import("../components/MessengerChatHead"),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <BaseCSS />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <DynamicChatHead />
    </>
  );
}

export default MyApp;
