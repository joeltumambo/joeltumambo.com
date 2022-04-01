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

interface Section {
  id: string;
  component: ReactElement;
  background: string;
  ref: React.RefObject<Element>;
  isVisible: boolean;
}

const createSection = (
  id: string,
  component: ReactElement,
  background: string
): Section => {
  const ref = React.useRef(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return {
    id,
    component,
    background,
    ref,
    isVisible: !!entry?.isIntersecting,
  };
};

const Home: NextPage = () => {
  const sections: Section[] = [
    createSection("hero", <Hero />, "var(--brown-50)"),
    createSection("learn", <Beauty />, "var(--grey-50)"),
    createSection("contact", <Contact />, "var(--indigo-50)"),
  ];

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
        {sections.map(({ id, background, component, ref, isVisible }) => (
          <Container
            containerRef={ref}
            id={id}
            key={id}
            minHeight="90vh"
            background={background}
          >
            {isVisible ? component : "loading"}
          </Container>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Home;
