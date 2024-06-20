import { Link } from "react-router-dom";
import { useState } from "react";
import MlIcon from "../../assets/icons/ML.svg";
import ShopeeIcon from "../../assets/icons/shopeeLogo.svg";
import wandIcon from "../../assets/icons/wand.svg";
import homeMenu from "../../assets/icons/homeMenu.svg";
import wppLogo from "../../assets/icons/whatsappLogo.svg";
import instagramLogo from "../../assets/icons/instagrаmLogo.svg";
import openMenu from "../../assets/icons/openMenu.svg";
import closeMenu from "../../assets/icons/closeMenu.svg";
import styles from "./Header.module.css";
import ButtonLink from "../../components/buttonLink/ButtonLink.jsx";

function Header() {
  const [menuIcon, setMenuIcon] = useState(openMenu);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIcon(isMenuOpen ? openMenu : closeMenu);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.header}>
      <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
        <img src={menuIcon} className={styles.MenuIcon} alt="Menu Icon" />
      </div>
      <div className={styles.logoSection}>
        <Link to="/" className={styles.logo}></Link>
      </div>
      <div className={`${styles.navSection} ${isMenuOpen ? styles.show : ""}`}>
        <Link to="/" className={styles.mobileMenuLogo}></Link>
        <ButtonLink
          imageUrl={homeMenu}
          buttonText="Home"
          buttonColor={["#92008a", "#2d0081"]}
          animationColor={["#ffde26", "#826e00"]}
          showShadow={false}
          linkTo="/"
          padding="0.5%"
          width="20px"
          onClick={handleMenuClick}
        />
        <ButtonLink
          imageUrl={wandIcon}
          buttonText="Confira nossas peças!"
          buttonColor={["#92008a", "#2d0081"]}
          animationColor={["#ffde26", "#826e00"]}
          showShadow={false}
          linkTo="all-wands-components"
          padding="0.5%"
          width="40px"
          onClick={handleMenuClick}
        />
        <ButtonLink
          imageUrl={wandIcon}
          buttonText="Gerador de varinhas!"
          buttonColor={["#92008a", "#2d0081"]}
          animationColor={["#ffde26", "#826e00"]}
          showShadow={false}
          linkTo="wand-generator"
          padding="0.5%"
          width="40px"
          onClick={handleMenuClick}
        />
        <ButtonLink
          imageUrl={ShopeeIcon}
          buttonText="Compre Shopee!"
          buttonColor={["#cc4100", "#120600"]}
          animationColor={["#ffde26", "#826e00"]}
          showShadow={false}
          linkTo="https://shopee.com.br/product/407950839/23993043716/"
          padding="0.1%"
          openInNewTab={true}
          onClick={handleMenuClick}
        />
        <ButtonLink
          imageUrl={instagramLogo}
          buttonText="@kathelievarinhas"
          buttonColor={["#92008a", "#2d0081"]}
          animationColor={["#ffde26", "#826e00"]}
          showShadow={false}
          linkTo="https://www.instagram.com/kathelievarinhas/"
          padding="0.85%"
          onClick={handleMenuClick}
        />
      </div>
    </nav>
  );
}

export default Header;
