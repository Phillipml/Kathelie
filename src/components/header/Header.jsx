import styles from "./Header.module.css";
import logo from "../../public/kathelieLogo.svg";
function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.logoSection}>
        <div className={styles.logo} />
      </div>
      <div className={styles.navSection}></div>
    </nav>
  );
}
export default Header;
