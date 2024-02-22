import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.logoSection}>
        <Link to="/" className={styles.logo}></Link>
      </div>
      <div className={styles.navSection}></div>
    </nav>
  );
}
export default Header;
