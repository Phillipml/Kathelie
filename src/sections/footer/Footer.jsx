import styles from "./Footer.module.css";
import wppLogo from "../../assets/icons/whatsappLogo.svg";
import mlLogo from "../../assets/icons/ML.svg";
import instaLogo from "../../assets/icons/instagrаmLogo.svg";
import ButtonLink from "../../components/buttonLink/ButtonLink";

function Footer() {
  return (
    <div>
      <div className={styles.footerWraper}>
        <div className={styles.footerSide}>
          <h3>Fale com a gente!</h3>
          <ButtonLink
            imageUrl={wppLogo}
            buttonText="(31)99999-9999"
            buttonColor={["#1f6310", "#24c900"]}
            animationColor={["#ffde26", "#826e00"]}
            animationClass="greenGlow"
            showShadow={true}
            link="http://192.168.0.11:5173/"
          />
        </div>
        <div className={styles.footerSide}>
          <h3>Faça seu pedido!</h3>
          <ButtonLink
            imageUrl={mlLogo}
            buttonText="Compre já!"
            buttonColor={["#ffd700", "#2d0081"]}
            animationColor={["#ffde26", "#826e00"]}
            animationClass="yellowGlow"
            showShadow={true}
            link="http://192.168.0.11:5173/"
          />
        </div>{" "}
        <div className={styles.footerSide}>
          <h3>Nos siga no Instagram!</h3>
          <ButtonLink
            imageUrl={instaLogo}
            buttonText="@KathelieVarinhas"
            buttonColor={["#92008a", "#2d0081"]}
            animationColor={["#ffde26", "#826e00"]}
            animationClass="pinkGlow"
            showShadow={true}
            link="http://192.168.0.11:5173/"
            padding="5%"
            width="40px"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
