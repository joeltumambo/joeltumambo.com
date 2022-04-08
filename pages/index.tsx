import React, { ReactElement, useState } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Container from "../components/Container";
import { useIntersectionObserver } from "usehooks-ts";
import Page from "../components/Page";
import evenify from "../utils/evenify";
import { INITIAL_VIEWPORT_META } from "../utils/contants";

const Hero = dynamic(() => import("../page-components/HeroSection"));
const Beauty = dynamic(() => import("../page-components/BeautySection"));
const Contact = dynamic(() => import("../page-components/ContactSection"));

interface LazySectionProps {
  id: string;
  component: ReactElement;
  background: string;
  onVisible?(): void;
}

const LazySection: React.FC<LazySectionProps> = ({
  id,
  component,
  background,
  onVisible,
}) => {
  const ref = React.useRef(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.15,
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  if (onVisible && isVisible) {
    onVisible();
  }

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
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT_META);

  const onContactVisible = () => {
    if (document.documentElement.clientWidth < 600) {
      const height = document.documentElement.clientHeight;
      const evenHeight = evenify(height);
      const content = `height=${evenHeight}, ${INITIAL_VIEWPORT_META}`;

      setViewport(content);
    }
  };

  return (
    <Page title="Build Beautiful" viewport={viewport}>
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
        onVisible={onContactVisible}
      />
    </Page>
  );
};

export default Home;
