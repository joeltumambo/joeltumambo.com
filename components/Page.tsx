import Head from "next/head";
import { useState } from "react";
import { useEffectOnce, useEventListener } from "usehooks-ts";
import evenify from "../utils/evenify";
import Footer from "./Footer";
import Header from "./Header";

interface PageProps {
  title?: string;
  description?: string;
}

const DEFAULT_TITLE = "Joel Tumambo";
const DESCRIPTION =
  "Joel Tumambo is a software engineer from Philippines. He specializes in beautiful front-end and design systems.";
const VIEWPORT_META = "width=device-width, initial-scale=1.0";

const Page: React.FC<PageProps> = ({
  title: titleProp,
  description = DESCRIPTION,
  children,
}) => {
  const [viewportMeta, setViewportMeta] = useState(VIEWPORT_META);
  const title = titleProp
    ? [titleProp, DEFAULT_TITLE].join(" | ")
    : DEFAULT_TITLE;

  const checkHeight = () => {
    if (document.documentElement.clientWidth < 600) {
      const evenHeight = evenify(document.documentElement.clientHeight);
      setViewportMeta(`height=${evenHeight}, ${VIEWPORT_META}`);
    }
  };

  useEffectOnce(checkHeight);
  useEventListener("resize", checkHeight);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content={viewportMeta} />
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
