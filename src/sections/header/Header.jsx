import { Link } from "react-router-dom";
import { useState } from "react";
import MlIcon from "../../assets/icons/ML.svg";
import wandIcon from "../../assets/icons/wand.svg";
import openMenu from "../../assets/icons/openMenu.svg";
import closeMenu from "../../assets/icons/closeMenu.svg";
import styles from "./Header.module.css";
import ButtonLink from "../../components/buttonLink/ButtonLink.jsx";
function Header() {
  const [menuIcon, setMenuIcon] = useState(openMenu);
  const toggleMenu = () => {
    setMenuIcon(menuIcon === openMenu ? closeMenu : openMenu);
  };

  return (
    <nav className={styles.header}>
      <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
        <img src={menuIcon} className={styles.MenuIcon} alt="Menu Icon" />
      </div>
      <div className={styles.logoSection}>
        <Link to="/" className={styles.logo}></Link>
      </div>
      <div className={styles.navSection}>
        <ButtonLink
          imageUrl={wandIcon}
          buttonText="Confira nossas peças!"
          buttonColor={["#92008a", "#2d0081"]}
          animationColor={["#ffde26", "#826e00"]}
          showShadow={false}
          linkTo="all-wands-components"
          padding="0.5%"
          width="40px"
        />

        <ButtonLink
          imageUrl={MlIcon}
          buttonText="Compre já!"
          buttonColor={["#ffd700", "#2d0081"]}
          animationColor={["#ffde26", "#826e00"]}
          showShadow={false}
          link="http://192.168.0.11:5173/"
          padding="0.5%"
        />
        <ButtonLink
          imageUrl={MlIcon}
          buttonText="Compre já!"
          buttonColor={["#92008a", "#2d0081"]}
          animationColor={["#ffde26", "#826e00"]}
          showShadow={false}
          link="http://192.168.0.11:5173/"
          padding="0.5%"
        />
      </div>
    </nav>
  );
}
export default Header;
