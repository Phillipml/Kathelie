import ButtonLink from "../../components/buttonLink/ButtonLink.jsx";
import wandIcon from "../../assets/icons/wand.svg";
import styles from "./BtnToWandComponents.module.css";
function BtnToWandComponents() {
  return (
    <div className={styles.btnWraper}>
      <h2>Que tal dar uma olhada nas nossas peças?</h2>
      <ButtonLink
        imageUrl={wandIcon}
        buttonText=""
        buttonColor={["#92008a", "#2d0081"]}
        animationColor={["#ffde26", "#826e00"]}
        showShadow={true}
        animationClass="purpleGlow"
        linkTo="all-wands-components"
        padding="5%"
        width="100px"
      />
    </div>
  );
}
export default BtnToWandComponents;
