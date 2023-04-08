import { Html, Head, Main, NextScript } from 'next/document';

const description =
  'Explore the world of frontend development through my personal website.';
const title = 'Dunggramer - Frontend Developer';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* <!-- SEO --> */}
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Dunggramer - Frontend Developer" />
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta itemProp="name" content={title} />
        <meta property="og:site_name" content={title} />
        <meta name="application-name" content={title} />

        <meta name="description" content={description} />
        <meta itemProp="description" content={description} />
        <meta
          name="keywords"
          content="DungGramer, Nguyễn Công Dũng, Web development, Frontend Development, Javascript, React, Portfolio, Projects, Blog, Accessibility"
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.facebook.com/DungGramer/"
        />
        <meta property="og:title" content="Dunggramer - Frontend Developer" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/cover.jpg" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="article:author" content="DungGramer" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://twitter.com/DungGramer" />
        <meta
          property="twitter:title"
          content="Dunggramer - Frontend Developer"
        />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/cover.jpg" />
        {/* <!-- Google Android --> */}
        <meta name="theme-color" content="#8f5c2a" />
        {/* <!-- Add to home screen --> */}
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* App */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="msapplication-TileColor" content="#8f5c2a" />
        <meta name="theme-color" content="#8f5c2a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#8f5c2a" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/ms-icon-144x144.png"
        />

        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="address=no" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="generator" content="React application" />

        <script type="application/ld+json">
          {`{
          "@context": "http://www.schema.org",
          "@type": "WebSite",
          "name": "DungGramer",
          "url": "https://dunggramer.com"
        }`}
        </script>

        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://dunggramer.com/",
          "logo": "/logo.png"
			  }`}
        </script>

        <link rel="canonical" href="https://www.dunggramer.com/" />
        <link rel="me" href="mailto:dung.dev.gramer@gmail.com" />
        <link rel="me" href="sms:+84334565999" />
        <meta name="copyright" content="DungGramer" />
        <meta name="GENERATOR" content="DungGramer" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
