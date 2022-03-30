import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import Typography from "../components/Typography";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import ContactSection from "../page-components/ContactSection";
import HeroSection from "../page-components/HeroSection";
import ReceiptsSection from "../page-components/ReceiptsSection";
import BeautySection from "../page-components/BeautySection";
import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Joel Tumambo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container background="#efebe9">
          <HeroSection />
        </Container>
        <Container background="#fafafa">
          <BeautySection />
        </Container>
        {/* <div
          style={{
            borderTop: "1px solid #efebe9",
          }}
        /> */}
        {/* <Container id="receipts" background="#fafafa">
          <ReceiptsSection />
        </Container> */}
        <Container id="contact" background="#e8eaf6">
          <ContactSection />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
