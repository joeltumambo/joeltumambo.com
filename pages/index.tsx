import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import Container from "../components/Container";

const Hero = dynamic(() => import("../page-components/HeroSection"));
const Beauty = dynamic(() => import("../page-components/BeautySection"));
const Contact = dynamic(() => import("../page-components/ContactSection"));
const Footer = dynamic(() => import("../components/Footer"));

const Home: NextPage = () => (
  <>
    <Head>
      <title>Joel Tumambo</title>
      <meta
        name="description"
        content="Joel Tumambo is a software engineer based in Philippines.
          He specializes in beautiful front-end and design system"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Container minHeight="90vh" background="var(--brown-50)">
        <Hero />
      </Container>
      <Container minHeight="90vh" id="learn" background="var(--grey-50)">
        <Beauty />
      </Container>
      <Container minHeight="90vh" id="contact" background="var(--indigo-50)">
        <Contact />
      </Container>
    </main>
    <Footer />
  </>
);

export default Home;
