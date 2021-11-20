import "../styles/globals.css";
import { BaseCSS } from "styled-bootstrap-grid";
import Layout from "../components/layout";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <BaseCSS />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
