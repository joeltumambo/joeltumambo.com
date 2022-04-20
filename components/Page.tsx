import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useEventListener } from "usehooks-ts";
import { TITLE, DESCRIPTION, INITIAL_VIEWPORT_META } from "../utils/contants";
import evenify from "../utils/evenify";
import isInputFocus from "../utils/isInputFocus";
import Footer from "./Footer";
import Header from "./Header";

interface PageProps {
  title?: string;
  description?: string;
}

const Page: React.FC<PageProps> = ({
  title: titleProp,
  description = DESCRIPTION,
  children,
}) => {
  const [initialSize, setInitialSize] = useState({
    width: 0,
    height: 0,
  });
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT_META);
  const title = titleProp ? [titleProp, TITLE].join(" | ") : TITLE;

  useEffect(() => {
    setInitialSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, []);

  useEventListener("resize", () => {
    if (!isInputFocus()) {
      setViewport(INITIAL_VIEWPORT_META);
      setInitialSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    }
  });

  useEventListener("focusin", () => {
    if (isInputFocus()) {
      const { width } = initialSize;
      const height = evenify(initialSize.height);
      const newViewport = `height=${height}, width=${width}, initial-scale=1.0`;

      setViewport(newViewport);
    }
  });

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content={viewport} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://www.joeltumambo.com/logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Page;
