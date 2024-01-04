import 'libs/styles/main.scss';
import { CharkaConfigProvider } from '../components/Providers/CharkaConfigProvider';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        {/* <link rel="preload" href="https://icons.dunggramer.com/dg.woff2" as="font" type="font/woff2" crossOrigin='anonymous' /> */}
        <link rel="stylesheet preload" href="https://icons.dunggramer.com/dg.css" crossOrigin='anonymous' />
      </head>
      <body>
        <CharkaConfigProvider>{children}</CharkaConfigProvider>
      </body>
    </html>
  );
}
