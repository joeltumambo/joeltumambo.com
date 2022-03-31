import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import ContactSection from "../page-components/ContactSection";
import HeroSection from "../page-components/HeroSection";
import BeautySection from "../page-components/BeautySection";
import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <div>
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
        <Container background="var(--brown-50)">
          <HeroSection />
        </Container>
        <Container id="learn" background="var(--grey-50)">
          <BeautySection />
        </Container>
        <Container id="contact" background="var(--indigo-50)">
          <ContactSection />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
