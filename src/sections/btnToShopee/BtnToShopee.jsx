import ButtonLink from "../../components/buttonLink/ButtonLink.jsx";
import wandIcon from "../../assets/icons/wand.svg";
import ShopeeIcon from "../../assets/icons/shopeeLogo.svg";
import styles from "./BtnToShopee.module.css";
function BtnToShopee() {
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className={styles.btnWraper}>
      <h2>Faça já seu pedido!</h2>
      <ButtonLink
        imageUrl={ShopeeIcon}
        buttonText="Compre Shopee!"
        buttonColor={["#cc4100", "#120600"]}
        animationColor={["#ffde26", "#826e00"]}
        showShadow={false}
        linkTo="https://shopee.com.br/product/407950839/23993043716/"
        padding="1%"
        openInNewTab={true}
        onClick={handleMenuClick}
      />
    </div>
  );
}
export default BtnToShopee;
