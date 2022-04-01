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

const Home: NextPage = () => {
  const sections: {
    id: string;
    component: ReactElement;
    background: string;
    ref: React.RefObject<Element>;
  }[] = [
    {
      id: "hero",
      component: <Hero />,
      background: "var(--brown-50)",
      ref: React.useRef(null),
    },
    {
      id: "learn",
      component: <Beauty />,
      background: "var(--grey-50)",
      ref: React.useRef(null),
    },
    {
      id: "contact",
      component: <Contact />,
      background: "var(--indigo-50)",
      ref: React.useRef(null),
    },
  ];

  const entries = sections.map((section) =>
    useIntersectionObserver(section.ref, {
      threshold: 0.1,
      freezeOnceVisible: true,
    })
  );

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
        {sections.map(({ id, background, component, ref }, index) => (
          <Container
            containerRef={ref}
            id={id}
            key={id}
            minHeight="90vh"
            background={background}
          >
            {!!entries[index]?.isIntersecting ? component : "loading"}
          </Container>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Home;
