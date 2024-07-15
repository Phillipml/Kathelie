import styles from "./Footer.module.css";
import wppLogo from "../../assets/icons/whatsappLogo.svg";
import mlLogo from "../../assets/icons/ML.svg";
import instagramLogo from "../../assets/icons/instagrаmLogo.svg";
import ButtonLink from "../../components/buttonLink/ButtonLink";
import ShopeeIcon from "../../assets/icons/shopeeLogo.svg";

function Footer() {
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <div>
      <div className={styles.footerWraper}>
        <div className={styles.footerSide}>
          <h3>Faça seu pedido!</h3>
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
        </div>{" "}
        <div className={styles.footerSide}>
          <h3>Nos siga no Instagram!</h3>
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
      </div>
    </div>
  );
}

export default Footer;
