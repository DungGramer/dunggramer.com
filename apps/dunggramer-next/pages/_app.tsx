import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/main.scss';
// import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dunggramer</title>
      </Head>
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
