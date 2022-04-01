import Typography from "./Typography";
import styles from "../styles/Home.module.css";
import Container from "./Container";
import Grid from "./Grid";

const Footer = () => (
  <footer
    style={{
      background: "#212121",
      color: "#9e9e9e",
    }}
  >
    <Container component="div">
      <Typography gutter={0} color="inherit" size={{ xs: -2, sm: -1 }}>
        © {new Date().getFullYear()} Joel Tumambo
      </Typography>
    </Container>
  </footer>
);

export default Footer;
