// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        

        {/* SEO Meta */}
        <meta name="description" content="Araku Travels - Discover the beauty of Araku Valley with curated packages, scenic coffee estates, and tribal heritage." />
        <meta name="keywords" content="Araku Travels, Araku tour, Araku tourism, Andhra Pradesh travel, coffee plantations" />
        <meta name="Kiran" content="Araku Travels" />

        {/* Open Graph */}
        <meta property="og:title" content="Araku Travels | Explore Araku Valley" />
        <meta property="og:description" content="Book your Araku tour with us and experience nature, tribal culture, and coffee plantations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arakutravels.com" />
        

      

        {/* Favicon */}
        <link rel="icon" href="/logo.svg" />
      </Head>
      <body className="antialiased ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
