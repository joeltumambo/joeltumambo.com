import Head from "next/head";
import { useState } from "react";
import { useEffectOnce } from "usehooks-ts";
import getViewportMeta, { DEFAULT_VIEWPORT_META } from "../getViewportMeta";
import Footer from "./Footer";

interface PageProps {
  title?: string;
  description?: string;
}

const TITLE = "Software Engineer for Hire | Joel Tumambo";
const DESCRIPTION =
  "Joel Tumambo is a software engineer from Philippines. He specializes in beautiful front-end and design systems.";

const Page: React.FC<PageProps> = ({
  title = TITLE,
  description = DESCRIPTION,
  children,
}) => {
  const [viewportMeta, setViewportMeta] = useState(DEFAULT_VIEWPORT_META);

  useEffectOnce(() => {
    const newViewportMeta = getViewportMeta();
    setViewportMeta(newViewportMeta);
    console.log("set meta")
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
