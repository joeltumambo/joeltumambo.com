import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

const makeEven = (n: number) => n % 2 === 0 ? n : n + 1;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const metaViewport = document.querySelector("meta[name=viewport]");
    if (metaViewport) {
      metaViewport.setAttribute(
        "content",
        `height=${makeEven(innerHeight)}, width=device-width, initial-scale=1.0`
      );
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
