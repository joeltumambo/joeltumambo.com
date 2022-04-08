import React, { ReactElement } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Container from "../components/Container";
import { useIntersectionObserver } from "usehooks-ts";
import Page from "../components/Page";

const Hero = dynamic(() => import("../page-components/HeroSection"));
const Beauty = dynamic(() => import("../page-components/BeautySection"));
const Contact = dynamic(() => import("../page-components/ContactSection"));

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
      minHeight="90vh"
      background={background}
    >
      {isVisible ? component : "loading"}
    </Container>
  );
};

const Home: NextPage = () => {
  return (
    <Page title="Build Beautiful">
      <Container
        minHeight="80vh"
        background="var(--brown-50)"
        style={{
          paddingBottom: "10vh",
        }}
      >
        <Hero />
      </Container>
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
    </Page>
  );
};

export default Home;
