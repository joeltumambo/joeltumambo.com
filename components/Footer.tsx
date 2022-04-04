import Typography from "./Typography";
import Container from "./Container";

const Footer = () => (
  <Container component="footer" minHeight="10vh" background="var(--grey-900)">
    <Typography gutter={0} color="var(--grey-500)" size={{ xs: -2, sm: -1 }}>
      © {new Date().getFullYear()} Joel Tumambo
    </Typography>
  </Container>
);

export default Footer;
