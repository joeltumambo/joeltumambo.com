import React, { ReactElement } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import Container from "../components/Container";
import { useIntersectionObserver } from "usehooks-ts";

const Hero = dynamic(() => import("../page-components/HeroSection"));
const Beauty = dynamic(() => import("../page-components/BeautySection"));
const Contact = dynamic(() => import("../page-components/ContactSection"));
const Footer = dynamic(() => import("../components/Footer"));

interface LazySectionProps {
  id: string;
  component: ReactElement;
  background: string;
}

const LazySection: React.FC<LazySectionProps> = ({
  id,
  component,
  background,
}) => {
  const ref = React.useRef(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.15,
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  return (
    <Container
      containerRef={ref}
      id={id}
      key={id}
      minHeight="90vh"
      background={background}
    >
      {isVisible ? component : "loading"}
    </Container>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Joel Tumambo</title>
        <meta
          name="description"
          content="Joel Tumambo is a software engineer based in Philippines.
            He specializes in beautiful front-end and design system"
        />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LazySection
          id="hero"
          component={<Hero />}
          background="var(--brown-50)"
        />
        <LazySection
          id="learn"
          component={<Beauty />}
          background="var(--grey-50)"
        />
        <LazySection
          id="contact"
          component={<Contact />}
          background="var(--indigo-50)"
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
