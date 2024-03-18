import styles from "./MlButton.module.css";
import mlLogo from "../../assets/icons/ML.svg";
function MlButton() {
  return (
    <div className={styles.mlButton}>
      <img
        className={styles.buttonIcon}
        src={mlLogo}
        alt="Mercado Livre Icon"
      />
      <span>Compre já!</span>
    </div>
  );
}
export default MlButton;
