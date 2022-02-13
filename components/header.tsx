import Button from "./Button";
import styles from "../styles/Header.module.css";

interface HeaderProps {}

const Header = () => (
  <div className={styles.section}>
    <div className={styles.container}>
      <span>
        <Button size="small" component="a">
          Joel
        </Button>
      </span>
      <span className={styles.right}>
        <Button size="small" component="a">
          Home
        </Button>
        <Button size="small" component="a">
          Posts
        </Button>
        <Button size="medium" component="a" iconLeading="waving_hand" filled>
          Say hello!
        </Button>
      </span>
    </div>
  </div>
);

export default Header;
