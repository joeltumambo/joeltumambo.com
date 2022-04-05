import Head from "next/head";
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

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Page;
