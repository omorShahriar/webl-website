import '../styles/globals.css'
import { BaseCSS } from 'styled-bootstrap-grid';
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BaseCSS/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
   
  )
  
  
}

export default MyApp
