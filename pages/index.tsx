import React, { ReactElement, useEffect, useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import Container from "../components/Container";
import { useIntersectionObserver } from "usehooks-ts";

const Hero = dynamic(() => import("../page-components/HeroSection"));
const Beauty = dynamic(() => import("../page-components/BeautySection"));
const Contact = dynamic(() => import("../page-components/ContactSection"));
const Footer = dynamic(() => import("../components/Footer"));

const sections: {
  id: string;
  component: ReactElement;
  background: string;
}[] = [
  {
    id: "hero",
    component: <Hero />,
    background: "var(--brown-50)",
  },
  {
    id: "learn",
    component: <Beauty />,
    background: "var(--grey-50)",
  },
  {
    id: "contact",
    component: <Contact />,
    background: "var(--indigo-50)",
  },
];

const Home: NextPage = () => {
  const refs = sections.map(() => React.useRef<HTMLElement>(null));
  const entries = refs.map((ref) =>
    useIntersectionObserver(ref, {
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
        {sections.map(({ id, background, component }, index) => (
          <Container
            containerRef={refs[index]}
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
