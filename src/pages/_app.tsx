// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/ui/theme-provider"; // make sure the path is correct
import Head from "next/head";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}
