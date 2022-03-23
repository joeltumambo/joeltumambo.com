import Typography from "../atoms/Typography";
import styles from "../styles/Home.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <Typography gutter={0} color="inherit" size={-1}>
        © {new Date().getFullYear()} Joel Tumambo
      </Typography>
    </div>
  </footer>
);

export default Footer
