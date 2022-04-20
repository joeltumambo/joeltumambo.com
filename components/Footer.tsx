import Typography from "./Typography";
import Container from "./Container";

const Footer = () => (
  <Container component="footer" minHeight="10vh" background="var(--grey-900)">
    <Typography
      gutter={0.5}
      component="p"
      color="var(--grey-500)"
      size={{ xs: -2, sm: -1 }}
    >
      This website is built with{" "}
      <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
        Next.js
      </a>{" "}
      and hosted on{" "}
      <a href="https://vercel.com/" target="_blank" rel="noreferrer">
        Vercel
      </a>
      . The source code is hosted on{" "}
      <a
        href="https://github.com/joeltumambo/joeltumambo.com"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      .
    </Typography>
    <Typography
      gutter={0}
      component="p"
      color="var(--grey-500)"
      size={{ xs: -2, sm: -1 }}
    >
      © {new Date().getFullYear()} Joel Tumambo. All rights reserved.
    </Typography>
    <style jsx>
      {`
        a {
          color: var(--indigo-a100);
        }

        a:hover {
          text-decoration: underline;
        }
      `}
    </style>
  </Container>
);

export default Footer;
