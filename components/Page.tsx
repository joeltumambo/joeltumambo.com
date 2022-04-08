import Head from "next/head";
import { TITLE, DESCRIPTION, INITIAL_VIEWPORT_META } from "../utils/contants";
import Footer from "./Footer";
import Header from "./Header";

interface PageProps {
  title?: string;
  description?: string;
  viewport?: string
}

const Page: React.FC<PageProps> = ({
  title: titleProp,
  description = DESCRIPTION,
  viewport = INITIAL_VIEWPORT_META,
  children,
}) => {
  const title = titleProp ? [titleProp, TITLE].join(" | ") : TITLE;

  return (
    <>
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
