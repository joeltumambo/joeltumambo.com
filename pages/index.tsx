import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import ContactSection from "../page-components/ContactSection";
import HeroSection from "../page-components/HeroSection";
import BeautySection from "../page-components/BeautySection";
import Container from "../components/Container";
import { useEffect } from "react";

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
        <HeroSection />
      </Container>
      <Container minHeight="90vh" id="learn" background="var(--grey-50)">
        <BeautySection />
      </Container>
      <Container minHeight="90vh" id="contact" background="var(--indigo-50)">
        <ContactSection />
      </Container>
    </main>
    <Footer />
  </>
);

export default Home;
