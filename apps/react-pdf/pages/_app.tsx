import { PDFViewer } from '@react-pdf/renderer'
import { AppProps } from 'next/app'
import Head from 'next/head'
import './styles.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to react-pdf!</title>
      </Head>
      {/* <PDFViewer width="500px" height="1000px"> */}
      <Component {...pageProps} />
      {/* </PDFViewer> */}
    </>
  )
}

export default CustomApp
