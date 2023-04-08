import { AppProps } from 'next/app';
import Head from 'next/head';

import 'libs/styles/main.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dunggramer - Frontend Developer</title>
      </Head>
        <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
