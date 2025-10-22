import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />

        {/* SEO Meta */}
        <meta
          name="description"
          content="Immerse yourself in the magic of Araku Valley. Araku Travels offers curated journeys with expert local guides, personalized itineraries, and comfortable, clean cabs."
        />
        <meta
          name="keywords"
          content="Araku Travels, Araku tour, Araku tourism, Andhra Pradesh travel, coffee plantations"
        />
        <meta name="Araku Travels" content="Araku Travels" />

        {/* Open Graph */}
        <meta property="og:title" content="Araku Travels | Explore Araku Valley" />
        <meta
          property="og:description"
          content="Immerse yourself in the magic of Araku Valley. Araku Travels offers curated journeys with expert local guides, personalized itineraries, and comfortable, clean cabs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arakutravels.com" />

        {/* Favicon */}
        <link rel="icon" href="/logo.svg" />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />

        {/* ✅ Google Analytics using next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MHS2M9QSD8"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MHS2M9QSD8');
            `,
          }}
        />
      </body>
    </Html>
  );
}
