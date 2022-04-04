import Head from "next/head";
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
}) => (
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

export default Page;
