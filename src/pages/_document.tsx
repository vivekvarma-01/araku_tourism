// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Plan your perfect Araku trip with Araku Travels. Experience sunrise treks, tribal dances, bamboo chicken, nature tours, and personalized packages. Book now for memorable journeys!"
        />
        <meta
          name="keywords"
          content="Araku Travels, Araku tour packages, Araku trip, Araku sunrise, tribal dance, bamboo chicken, custom Araku tours"
        />
        <meta name="author" content="Araku Travels" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Araku Travels | Best Araku Tour Packages" />
        <meta
          property="og:description"
          content="Plan your perfect Araku trip with Araku Travels. Book now and explore the beauty of Araku Valley!"
        />
        <meta property="og:url" content="https://www.arakutravels.com/" />
        <meta property="og:image" content="https://www.arakutravels.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Araku Travels | Best Araku Tour Packages" />
        <meta
          name="twitter:description"
          content="Plan your perfect Araku trip with Araku Travels. Book now and explore the beauty of Araku Valley!"
        />
        <meta name="twitter:image" content="https://www.arakutravels.com/og-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.arakutravels.com/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
