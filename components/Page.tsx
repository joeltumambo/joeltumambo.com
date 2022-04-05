import Head from "next/head";
import { useState } from "react";
import { useEffectOnce } from "usehooks-ts";
import getViewportMeta, { DEFAULT_VIEWPORT_META } from "../getViewportMeta";
import Footer from "./Footer";

interface PageProps {
  title?: string;
  description?: string;
}

const DEFAULT_TITLE = "Joel Tumambo";
const DESCRIPTION =
  "Joel Tumambo is a software engineer from Philippines. He specializes in beautiful front-end and design systems.";

const Page: React.FC<PageProps> = ({
  title: titleProp,
  description = DESCRIPTION,
  children,
}) => {
  const title = titleProp
    ? [titleProp, DEFAULT_TITLE].join(" | ")
    : DEFAULT_TITLE;
  const [viewportMeta, setViewportMeta] = useState(DEFAULT_VIEWPORT_META);

  useEffectOnce(() => {
    const newViewportMeta = getViewportMeta();
    setViewportMeta(newViewportMeta);
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content={viewportMeta} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Page;
